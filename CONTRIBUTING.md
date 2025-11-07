# Contributing Guide

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated releases.

### Commit Message Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- **feat**: A new feature (triggers minor version bump)
- **fix**: A bug fix (triggers patch version bump)
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Breaking Changes

To trigger a major version bump, add `BREAKING CHANGE:` in the commit footer:

```
feat: new API for name formatting

BREAKING CHANGE: The formatName function now requires an options object
```

### Examples

```bash
# Patch release (1.0.0 -> 1.0.1)
fix: correct initial formatting for multi-letter initials

# Minor release (1.0.0 -> 1.1.0)
feat: add support for Portuguese locale

# Major release (1.0.0 -> 2.0.0)
feat: redesign API structure

BREAKING CHANGE: formatName now returns an object instead of string
```

## Release Process

Releases are automated via GitHub Actions:

1. Push commits to `main` branch
2. GitHub Actions runs tests
3. Semantic Release analyzes commits
4. Version is bumped automatically
5. CHANGELOG is updated
6. Package is published to npm
7. GitHub release is created

## Development Workflow

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build the project
npm run build

# Lint code
npm run lint

# Type check
npm run type-check
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Add tests for new functionality
4. Ensure all tests pass: `npm test`
5. Ensure linting passes: `npm run lint`
6. Ensure type checking passes: `npm run type-check`
7. Use conventional commit messages
8. Open a pull request to `main`
9. Wait for CI checks to pass
10. Request review from maintainers
