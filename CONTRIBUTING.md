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
git push -u origin feature/feature-name

# Regular updates
git pull origin develop
git push origin feature/feature-name

# Finish a feature
git flow feature finish feature-name
```

### 2. Bug Fixes

```bash
# Start a hotfix
git flow hotfix start hotfix-name

# Finish a hotfix
git flow hotfix finish hotfix-name
```

### 3. Releases

```bash
# Start a release
git flow release start v1.0.0

# Finish a release
git flow release finish v1.0.0
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
