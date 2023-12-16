include .env.local

export PATH := $(PATH):$(HOME)/bin

.npmrc:
	@curl --fail -u $(ARTIFACTORY_USER):$(ARTIFACTORY_TOKEN) https://optimizely.jfrog.io/optimizely/api/npm/npm/auth/optimizely > $@
	@echo "registry=https://optimizely.jfrog.io/optimizely/api/npm/npm/">> $@

install: .npmrc
	@yarn install