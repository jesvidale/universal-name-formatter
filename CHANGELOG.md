## [1.0.2](https://github.com/jesvidale/universal-name-formatter/compare/v1.0.1...v1.0.2) (2025-11-10)


### Performance Improvements

* reduce npm package from 169KB to 34.5KB (78% smaller) ([cdbe235](https://github.com/jesvidale/universal-name-formatter/commit/cdbe235af3f83a9da7dfc0debd74807a07eafb02))

## [1.0.1](https://github.com/jesvidale/universal-name-formatter/compare/v1.0.0...v1.0.1) (2025-11-10)


### Bug Fixes

* lint ([242def5](https://github.com/jesvidale/universal-name-formatter/commit/242def55bb1f4150e176afbe59648a938e72c830))
* reduce code duplication and code smells ([459a24d](https://github.com/jesvidale/universal-name-formatter/commit/459a24d15145764dec26ea50de8b15866e57dbb4))

# 1.0.0 (2025-11-10)


### Bug Fixes

* add workflow permissions and fix vitest config for semantic-release ([08d5c21](https://github.com/jesvidale/universal-name-formatter/commit/08d5c21ff1729955eadd73cde0062304416399fc))
* correct vitest config - use reporters instead of reporter ([a36f445](https://github.com/jesvidale/universal-name-formatter/commit/a36f4450619c9c9ba47703f6175c9d5095f1704d))
* optimize workflows to prevent duplicate runs and add permissions ([e291ae6](https://github.com/jesvidale/universal-name-formatter/commit/e291ae6a0939f0cd9309f7cd1b295594c16c3138))
* update Node.js version to 22.x for semantic-release compatibility ([9095e5f](https://github.com/jesvidale/universal-name-formatter/commit/9095e5f9b2f26bff33e0a38d2f093776e3c4da37))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added
- Initial release of Universal Name Formatter
- Universal linguistic rules for international names
- Locale-specific apostrophe handling for French articles vs Italian surnames
- Support for Spanish, French, German, Dutch, Italian, Irish, and Scottish names
- Smart handling of initials, hyphenated names, and special prefixes
- Comprehensive TypeScript support with full type definitions
- Zero dependencies implementation
- 100% test coverage with locale-specific scenarios
- Detailed documentation with locale guide

### Features
- `formatName()` function with universal linguistic rules
- Optional locale parameter for precise apostrophe handling
- Support for locale codes: fr, it, es, fr-FR, it-IT, etc.
- Graceful fallback for unknown locales
- Backward compatibility with simple universal formatting

### Supported Name Patterns
- Spanish: `josé maría de la cruz` → `José María de la Cruz`
- French: `jean-claude de la fontaine` → `Jean-Claude de la Fontaine`
- German: `hans von neumann` → `Hans von Neumann`
- Dutch: `jan van der waals` → `Jan van der Waals`
- Italian: `leonardo da vinci` → `Leonardo da Vinci`
- Irish: `patrick o'malley` → `Patrick O'Malley`
- Scottish: `donald mcdonald` → `Donald McDonald`

### Locale-Specific Rules
- French locale prioritizes French articles: `d'aubigny` (lowercase)
- Italian locale prioritizes Italian surnames: `D'Amico` (uppercase)
- Spanish locale follows mixed intelligent rules
- Always capitalizes Irish/Scottish names regardless of locale
