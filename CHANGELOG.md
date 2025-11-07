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