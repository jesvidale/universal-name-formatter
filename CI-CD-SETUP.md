# CI/CD Setup Guide

## ✅ What's Been Configured

### 1. GitHub Actions Workflows
- **`.github/workflows/ci.yml`** - Continuous Integration
  - Runs on every push to `main`/`develop` and PRs
  - Tests on Node.js 18, 20, 22
  - Runs lint, type-check, tests, and build
  - Uploads coverage to Codecov

- **`.github/workflows/release.yml`** - Automated Releases
  - Runs on push to `main` branch
  - Uses Semantic Release for versioning
  - Auto-publishes to npm
  - Creates GitHub releases

### 2. Semantic Release Configuration
- **`.releaserc.json`** - Semantic Release config
  - Analyzes commits using Conventional Commits
  - Updates CHANGELOG.md automatically
  - Bumps version in package.json
  - Publishes to npm
  - Creates GitHub release with assets

### 3. Package Configuration
- Added `type-check` script
- Added `semantic-release` script
- Configured for automated publishing

### 4. Documentation
- **`CONTRIBUTING.md`** - Contribution guidelines with commit conventions
- **`.npmignore`** - Ensures only necessary files are published
- **README badges** - CI status, npm version, coverage, license

## 🚀 Setup Steps Required

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "chore: initial commit with CI/CD setup"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Create repository named `universal-name-formatter`
3. **Don't** initialize with README (you already have one)
4. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/universal-name-formatter.git
git branch -M main
git push -u origin main
```

### Step 3: Configure npm Token
1. Login to npmjs.com
2. Go to Access Tokens: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
3. Create new token (Automation type)
4. Copy the token

### Step 4: Add Secrets to GitHub
1. Go to your repo: `Settings` → `Secrets and variables` → `Actions`
2. Click `New repository secret`
3. Add `NPM_TOKEN` with your npm token
4. GitHub token is automatically available as `GITHUB_TOKEN`

### Step 5: Update README Badges
Replace `YOUR_USERNAME` in README.md with your GitHub username:
```markdown
[![CI](https://github.com/YOUR_USERNAME/universal-name-formatter/workflows/CI/badge.svg)]
[![Coverage](https://img.shields.io/codecov/c/github/YOUR_USERNAME/universal-name-formatter)]
```

### Step 6 (Optional): Setup Codecov
1. Go to https://codecov.io
2. Sign in with GitHub
3. Add your repository
4. Get the upload token (usually automatic for public repos)
5. If needed, add `CODECOV_TOKEN` to GitHub secrets

## 📝 How to Use

### Making Changes
1. Create a feature branch:
```bash
git checkout -b feat/my-new-feature
```

2. Make your changes and commit using conventional commits:
```bash
git commit -m "feat: add support for Portuguese locale"
```

3. Push and create PR:
```bash
git push origin feat/my-new-feature
```

### Commit Message Format
```
<type>(<scope>): <subject>

Types:
- feat: new feature (minor version bump)
- fix: bug fix (patch version bump)
- docs: documentation changes
- style: formatting changes
- refactor: code refactoring
- perf: performance improvement
- test: adding tests
- chore: maintenance tasks

Breaking changes: Add BREAKING CHANGE: in footer (major version bump)
```

### Examples
```bash
# Patch: 1.0.0 → 1.0.1
git commit -m "fix: correct Welsh language code"

# Minor: 1.0.0 → 1.1.0
git commit -m "feat: add Romanian locale support"

# Major: 1.0.0 → 2.0.0
git commit -m "feat: redesign API

BREAKING CHANGE: formatName now requires options object"
```

### Release Process
Once commits are merged to `main`:
1. ✅ CI runs all tests
2. ✅ Semantic Release analyzes commits
3. ✅ Version is bumped in package.json
4. ✅ CHANGELOG.md is updated
5. ✅ Package is built and published to npm
6. ✅ GitHub release is created
7. ✅ Git tag is created

**Everything is automatic!** 🎉

## 🧪 Testing Locally

Before pushing:
```bash
# Run all tests
npm test

# Check linting
npm run lint

# Check types
npm run type-check

# Build project
npm run build

# Run all checks
npm run lint && npm run type-check && npm test && npm run build
```

## 📊 Monitoring

After setup:
- **CI Status**: Check Actions tab on GitHub
- **npm Package**: https://www.npmjs.com/package/universal-name-formatter
- **Coverage**: https://codecov.io/gh/YOUR_USERNAME/universal-name-formatter
- **Releases**: https://github.com/YOUR_USERNAME/universal-name-formatter/releases

## 🔧 Troubleshooting

### CI Fails
- Check Actions tab for error logs
- Ensure all tests pass locally first
- Verify Node.js version compatibility

### Release Fails
- Verify NPM_TOKEN is correctly set in GitHub secrets
- Check Semantic Release logs in Actions
- Ensure commits follow Conventional Commits format

### npm Publish Fails
- Verify you're logged in to npm
- Check package name is available
- Ensure version doesn't already exist

## 🎯 Next Steps

1. ✅ Initialize git repository
2. ✅ Create GitHub repository
3. ✅ Add NPM_TOKEN to secrets
4. ✅ Update README badges
5. ✅ Push first commit
6. ✅ Watch automated release happen!

---

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username in all URLs and badges.
