# Contributing Guidelines

## Table of Contents

- [Contributing Guidelines](#contributing-guidelines)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setting Up Git Flow](#setting-up-git-flow)
  - [Development Workflow](#development-workflow)
    - [1. Feature Development](#1-feature-development)
    - [2. Bug Fixes](#2-bug-fixes)
    - [3. Releases](#3-releases)
  - [Git Workflow](#git-workflow)
    - [Branch Naming Convention](#branch-naming-convention)
    - [Commit Messages](#commit-messages)
  - [Pull Request Process](#pull-request-process)
  - [Release Process](#release-process)

## Getting Started

### Prerequisites

- Git
- Git Flow extension

### Setting Up Git Flow

1. Install Git Flow:

```bash
# first check if it is already available
git flow version

# macOS
brew install git-flow

# Windows
choco install git-flow-dependencies

# Linux
sudo apt-get install git-flow
```

2. Configure Git Flow:

```bash
# Initialize Git Flow
git flow init

# Use these settings when prompted:
# Master branch: main
# Development branch: develop
# Feature prefix: feature/
# Release prefix: release/
# Hotfix prefix: hotfix/
# Support prefix: support/
--- Add this v prefix ---
# Version tag prefix: v
```

## Development Workflow

### 1. Feature Development

```bash
# Start a new feature
git flow feature start feature-name

# Add all changes files (Example)
git add services/auth/

# Commit (Example)
git commit -m "feat(auth): initialize auth service - Basic service structure"

# (Optional)
# If you want to keep the feature branch:
git flow feature publish feature-name

# To finish feature and delete branch:
git flow feature finish feature-name

# (Optional)
# If you kept the branch, later you can:
# Pull latest changes
git flow feature pull origin feature-name
# Track remote feature
git flow feature track feature-name

# Push to remote
git push origin develop
```

### 2. Bug Fixes

```bash
# For bugs in production (main branch):
# Start a hotfix
git flow hotfix start hotfix-name

# Make your changes
git add services/auth/affected-file.js

# Commit your changes
git commit -m "fix(auth): resolve token expiration issue"

# (Optional)
# If you want to keep the hotfix branch:
git flow hotfix publish hotfix-name

# Before finishing hotfix:
# Ensure main is up to date
git pull origin main
# Ensure develop is up to date
git pull origin develop
# Run tests to verify fix
npm test

# To finish hotfix and delete branch:
git flow hotfix finish hotfix-name
# This will:
# 1. Merge into main
# 2. Tag the release
# 3. Merge back into develop

# Push changes to both branches
git push origin main develop --tags

---
# For bugs only in develop branch:
# Start a feature branch instead of hotfix
git flow feature start bug-fix-name

# Make your changes
git add services/auth/affected-file.js

# Commit your changes
git commit -m "fix(auth): resolve development issue"

# (Optional)
# If you want to keep the branch:
git flow feature publish bug-fix-name

# Before finishing:
# Ensure develop is up to date
git pull origin develop
# Run tests to verify fix
npm test

# To finish and delete branch:
git flow feature finish bug-fix-name

# Push to remote
git push origin develop
```

### 3. Releases

```bash
# Start a release
git flow release start v1.0.0

# Make release preparations
git add package.json
git commit -m "chore(release): bump version to 1.0.0"

# Add last-minute fixes if needed
git add services/auth/config.js
git commit -m "fix(config): update production endpoints"

# (Optional)
# If you want to keep the release branch:
git flow release publish v1.0.0

# Before finishing release:
# Run all tests
npm test
# Build the project
npm run build
# Add built files
git add dist/
git commit -m "chore(release): add built files"

# To finish release and delete branch:
git flow release finish v1.0.0
# This will:
# 1. Merge into main
# 2. Tag the release
# 3. Merge back into develop

# Push all changes
git push origin main develop --tags
```

## Git Workflow

### Branch Naming Convention

- Features: `feature/descriptive-feature-name`
- Hotfixes: `hotfix/issue-description`
- Releases: `release/v1.0.0`

### Commit Messages

Follow Conventional Commits specification:

```
<type>(<scope>): <description> - [optional body]
```

Types:

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc.)
- refactor: Code refactoring
- test: Adding or updating tests
- chore: Maintenance tasks

Example:

```
feat(auth): implement JWT authentication
- Add JWT token generation
- Implement token validation middleware
- Update user model for token storage
```

## Pull Request Process

1. **Before Creating a PR**

   - Update your branch with develop
   - Run all tests
   - Update documentation
   - Ensure code formatting is correct

2. **PR Description Template**

   ```markdown
   ## Description

   [Describe the changes]

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   ```

3. **Review Process**
   - At least one approval required
   - All comments must be resolved
   - CI checks must pass

## Release Process

1. **Prepare Release**

   - Update version numbers
   - Update CHANGELOG.md
   - Update documentation

2. **Create Release**

   ```bash
   git flow release start v1.0.0
   # Make version updates
   git flow release finish v1.0.0
   ```

3. **Post Release**
   - Tag the release
   - Update deployment configurations
   - Notify team members
