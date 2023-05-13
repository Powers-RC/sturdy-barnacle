S3_BUCKET_NAME = www.powersc.work

.PHONY: build
build:
	@(yarn build)

.PHONY: deploy-iaas
deploy-iaas:
	@( cd iaas && \
		cdk deploy personal-website-infrastructure-stack \
	)

.PHONY: destroy-iaas
destroy-iaas:
	@( cd iaas && \
		cdk destroy personal-website-infrastructure-stack \
	)

.PHONY: s3-copy
s3-copy:
	@(aws s3 cp ./build s3://$(S3_BUCKET_NAME) --recursive)

.PHONY: s3-sync
s3-sync:
	@(aws s3 sync ./build s3://$(S3_BUCKET_NAME) --delete)
