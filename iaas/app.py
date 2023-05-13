#!/usr/bin/env python3
import os

import aws_cdk as cdk

from stacks.app_infrastructure_stack import AppInfrastructureStack


app = cdk.App()
env=cdk.Environment(
    region=os.environ["CDK_DEFAULT_REGION"]
)
app_infrastructure_stack = AppInfrastructureStack(app, "personal-website-infrastructure-stack", "personal-website", env=env)

app.synth()
