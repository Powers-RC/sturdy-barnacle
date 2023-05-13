from aws_cdk import Stack, RemovalPolicy, CfnOutput
from aws_cdk import Duration
from aws_cdk import aws_s3 as s3
from aws_cdk import aws_route53 as r53
from aws_cdk import aws_route53_targets as targets

from constructs import Construct


class AppInfrastructureStack(Stack):
    def __init__(
        self,
        scope: Construct,
        construct_id: str,
        project_name: str,
        **kwargs,
    ) -> None:
        super().__init__(scope, construct_id, **kwargs)
        self.project_name = project_name
        self.record_name = "www"
        self.domain_name = "powersc.work"

        access_logs_sub_bucket = s3.Bucket(
            self,
            "AccessLogsSubBucket",
            lifecycle_rules=[
                s3.LifecycleRule(id="DeleteRule", expiration=Duration.days(30)),
            ],
            auto_delete_objects=True,
            removal_policy=RemovalPolicy.DESTROY,
        )

        personal_sub_website_bucket = s3.Bucket(
            self,
            f"{self.project_name}-sub-bucket",
            bucket_name=f"{self.record_name}.{self.domain_name}",
            # Maybe turn this to false
            public_read_access=True,
            server_access_logs_bucket=access_logs_sub_bucket,
            server_access_logs_prefix="logs",
            auto_delete_objects=True,
            removal_policy=RemovalPolicy.DESTROY,
            block_public_access=s3.BlockPublicAccess.BLOCK_ACLS,
            access_control=s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
            website_index_document="index.html",
        )

        access_logs_main_bucket = s3.Bucket(
            self,
            "AccessLogsMainBucket",
            lifecycle_rules=[
                s3.LifecycleRule(id="DeleteRule", expiration=Duration.days(30)),
            ],
            auto_delete_objects=True,
            removal_policy=RemovalPolicy.DESTROY,
        )

        personal_main_website_bucket = s3.Bucket(
            self,
            f"{self.project_name}-main-bucket",
            bucket_name=f"{self.domain_name}",
            # Maybe turn this to false
            server_access_logs_bucket=access_logs_main_bucket,
            server_access_logs_prefix="logs",
            auto_delete_objects=True,
            removal_policy=RemovalPolicy.DESTROY,
            block_public_access=s3.BlockPublicAccess.BLOCK_ACLS,
            access_control=s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
            website_redirect=s3.RedirectTarget(host_name=f"{self.record_name}.{self.domain_name}"),
        )

        CfnOutput(
            self,
            "personal-website-bucket-name",
            value=personal_sub_website_bucket.bucket_name,
            export_name="personal-website-bucket-name",
        )

        hosted_zone = r53.PublicHostedZone(self, f"{self.project_name}-hosted-zone",
            zone_name=f"{self.domain_name}"
        )

        r53.ARecord(self, "MainAliasRecord",
            zone=hosted_zone,
            record_name="",
            target=r53.RecordTarget.from_alias(targets.BucketWebsiteTarget(personal_main_website_bucket)),
            delete_existing=True
        )

        r53.ARecord(self, "SubAliasRecord",
            zone=hosted_zone,
            record_name=f"{self.record_name}",  # www
            target=r53.RecordTarget.from_alias(targets.BucketWebsiteTarget(personal_sub_website_bucket)),
            delete_existing=True
        )

