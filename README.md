# Universal Name Formatter

[![CI](https://github.com/jesvidale/universal-name-formatter/workflows/CI/badge.svg)](https://github.com/jesvidale/universal-name-formatter/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jesvidale_universal-name-formatter&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jesvidale_universal-name-formatter)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jesvidale_universal-name-formatter&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jesvidale_universal-name-formatter)
[![npm version](https://img.shields.io/npm/v/universal-name-formatter.svg)](https://www.npmjs.com/package/universal-name-formatter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, locale-aware name formatting utility that handles international names with proper linguistic rules.

## 📦 Package Overview

### Key Features
✅ **Universal Linguistic Rules** - Handles Spanish, French, Italian, German, Dutch, Irish, Scottish names  
✅ **Locale-Specific Formatting** - Smart handling of French articles vs Italian surnames (d'Aubigny vs D'Amico)  
✅ **Apostrophe Intelligence** - Distinguishes between French articles and Italian surnames  
✅ **Zero Dependencies** - Lightweight and self-contained  
✅ **TypeScript Support** - Full type safety with comprehensive interfaces  
✅ **Modern Testing** - Vitest with native ES modules and fast execution (89.28% coverage)  

### Package Structure
```
universal-name-formatter/
├── src/
│   ├── index.ts           # Main exports
│   ├── universal-formatter.ts  # Core functionality
│   └── types.ts           # TypeScript interfaces
├── tests/
│   └── universal-formatter.test.ts  # Tests
├── dist/                  # Built JavaScript (CJS + ESM)
└── package.json          # NPM configuration
```

## Installation

```bash
npm install universal-name-formatter
```

## � Complete Tutorial

For detailed explanations, examples, and best practices, check out our comprehensive tutorial:

```bash
npm run tutorial
```

Then open [http://localhost:8080/tutorial.html](http://localhost:8080/tutorial.html) for the complete guide.

## �🚀 Try the Demo

Experience the formatter in action with our interactive demo:

```bash
npm run demo
```

Then open [http://localhost:8080/demo.html](http://localhost:8080/demo.html) in your browser to test the formatter with real-time formatting, locale selection, and example names.

## Quick Start

```typescript
import { formatName } from 'universal-name-formatter';

// Universal formatting (works great without locale)
formatName('josé maría de la cruz');         // "José María de la Cruz"
formatName('jean-claude van damme');         // "Jean-Claude van Damme"
formatName('leonardo da vinci');             // "Leonardo da Vinci"

// Locale-specific precision for apostrophes
formatName('marie d\'aubigny', { locale: 'fr' });  // "Marie d'Aubigny"
formatName('giovanni d\'amico', { locale: 'it' }); // "Giovanni D'Amico"

## Locale-Specific Formatting Guide

### French Names (`fr`)
French articles are kept lowercase:
```typescript
formatName("marie d'aubigny", { locale: "fr" });     // "Marie d'Aubigny"
formatName("charles d'artagnan", { locale: "fr" });  // "Charles d'Artagnan"  
```

### Italian Names (`it`)
Italian surname prefixes are capitalized:
```typescript
formatName("giovanni d'amico", { locale: "it" });    // "Giovanni D'Amico"
formatName("marco d'alessandro", { locale: "it" });  // "Marco D'Alessandro"
```

## Technical Details

### Build Output
- **CommonJS**: `dist/*.js` (for Node.js)
- **ES Modules**: `dist/esm/*.js` (for modern bundlers)
- **TypeScript Definitions**: `dist/*.d.ts`

### Test Coverage
- **Statements**: 89.28%
- **Branches**: 77.04%
- **Functions**: 100%
formatName('marie d\'aubigny', { locale: 'fr' });    // "Marie d'Aubigny" (French article)
formatName('giovanni d\'amico', { locale: 'it' });   // "Giovanni D'Amico" (Italian surname)
```

## Supported Name Patterns

| Language | Example Input | Output |
|----------|---------------|--------|
| Spanish | `josé maría de la cruz` | `José María de la Cruz` |
| French | `jean-claude de la fontaine` | `Jean-Claude de la Fontaine` |
| German | `hans von neumann` | `Hans von Neumann` |
| Dutch | `jan van der waals` | `Jan van der Waals` |
| Italian | `leonardo da vinci` | `Leonardo da Vinci` |
| Irish | `patrick o'malley` | `Patrick O'Malley` |
| Scottish | `donald mcdonald` | `Donald McDonald` |

## Locale-Specific Apostrophe Handling

The formatter intelligently handles the distinction between French articles and Italian surnames:

### French Context
```typescript
formatName('marie d\'aubigny', { locale: 'fr' });     // "Marie d'Aubigny"
formatName('charles d\'artagnan', { locale: 'fr' });  // "Charles d'Artagnan"
formatName('giovanni d\'amico', { locale: 'fr' });    // "Giovanni D'Amico" (known Italian)
```

### Italian Context
```typescript
formatName('giovanni d\'amico', { locale: 'it' });    // "Giovanni D'Amico"
formatName('francesco d\'angelo', { locale: 'it' });  // "Francesco D'Angelo"
formatName('marie d\'aubigny', { locale: 'it' });     // "Marie d'Aubigny" (known French)
```

## API Reference

### `formatName(name, options?)`

Formats a name using universal linguistic rules with optional locale-specific handling.

**Parameters:**
- `name` (string): The name to format
- `options` (object, optional):
  - `locale` (string): Language code (e.g., 'fr', 'it', 'es', 'fr-FR')
  - `trim` (boolean): Whether to trim whitespace (default: true)
  - `normalizeSpaces` (boolean): Whether to normalize multiple spaces (default: true)

**Returns:** Formatted name string

### `getSupportedNamePatterns()`

Returns examples of supported name formatting patterns.

**Returns:** Object with pattern examples

## Supported Locales

- `fr`, `fr-FR`, `fr-CA` - French
- `it`, `it-IT` - Italian  
- `es`, `es-ES`, `es-MX` - Spanish
- Falls back gracefully for unknown locales

## Advanced Usage

```typescript
import { formatName, getSupportedNamePatterns } from 'universal-name-formatter';

// Combine locale with other options
const formatted = formatName('  marie d\'aubigny  ', {
  locale: 'fr',
  trim: true,
  normalizeSpaces: true
});

// Get examples of supported patterns
const patterns = getSupportedNamePatterns();
console.log(patterns['French names']); // Examples of French name formatting

// Handle mixed linguistic origins
formatName('maría von habsburg');        // "María von Habsburg"
formatName('jean-claude mcdonald');      // "Jean-Claude McDonald"
```

## Migration Guide

This package is fully backward compatible. Existing code continues to work:

```typescript
// Old code (still works perfectly)
formatName('marie d\'aubigny');

// New code (more precise)
formatName('marie d\'aubigny', { locale: 'fr' });
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import { formatName, NameFormatterOptions, LocaleRules } from 'universal-name-formatter';

const options: NameFormatterOptions = {
  locale: 'fr',
  trim: true,
  normalizeSpaces: true
};

const formatted: string = formatName('marie d\'aubigny', options);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

**Jesus Vidal Alejandre** (jesvidale)  
📧 Email: jesvidale@gmail.com  
🐙 GitHub: [@jesvidale](https://github.com/jesvidale)  

## Copyright

Copyright © 2025 Jesus Vidal Alejandre (jesvidale). All rights reserved.

## Support

For questions and support, please open an issue on [GitHub](https://github.com/jesvidale/universal-name-formatter/issues).