# Run build command
.PHONY: build
build:
	npm run build

# Run tests
.PHONY: test
test:
	npm run test

# Run linting
.PHONY: lint
lint:
	npm run lint:check

# Clean build artifacts
.PHONY: clean
clean:
	rm -rf node_modules dist

# Prepare package for publishing (build, test, lint)
.PHONY: prepare
prepare: lint build

# Publish package to npm registry
.PHONY: publish
publish: prepare
	npm publish

# Bump version (usage: make bump VERSION=patch/minor/major)
.PHONY: bump
bump:
	npm version $(VERSION)

# Remove node_modules
.PHONY: prune
prune:
	npm prune

# Display available commands
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make build       - Build the package"
	@echo "  make test        - Run tests"
	@echo "  make lint        - Run linter"
	@echo "  make clean       - Clean build artifacts"
	@echo "  make prepare     - Prepare package for publishing"
	@echo "  make publish     - Publish package to npm"
	@echo "  make bump        - Bump version (VERSION=patch/minor/major)"
	@echo "  make prune       - Remove node_modules"
