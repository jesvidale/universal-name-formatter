# Universal Name Formatter

[![npm version](https://img.shields.io/npm/v/universal-name-formatter.svg)](https://www.npmjs.com/package/universal-name-formatter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A locale-aware name formatting utility that handles international names with proper linguistic rules. Supports 17+ languages including Spanish, French, Italian, German, Dutch, Irish, and Scottish names.

## Features

- **Universal Linguistic Rules** - Handles complex name patterns across languages
- **Locale-Specific Formatting** - French articles vs Italian surnames (d'Aubigny vs D'Amico)  
- **Zero Dependencies** - Lightweight (11.5 kB compressed)
- **TypeScript Support** - Full type safety
- **Legacy Compatible** - CommonJS + ESM support

## Installation

```bash
npm install universal-name-formatter
```

## Quick Start

```typescript
import { formatName } from 'universal-name-formatter';

// Universal formatting
formatName('josé maría de la cruz');         // "José María de la Cruz"
formatName('jean-claude van damme');         // "Jean-Claude van Damme"
formatName('leonardo da vinci');             // "Leonardo da Vinci"

// Locale-specific precision
formatName('marie d\'aubigny', { locale: 'fr' });  // "Marie d'Aubigny"
formatName('giovanni d\'amico', { locale: 'it' }); // "Giovanni D'Amico"
```

## Supported Languages

| Language | Example | Output |
|----------|---------|--------|
| Spanish | `josé maría de la cruz` | `José María de la Cruz` |
| French | `jean-claude de la fontaine` | `Jean-Claude de la Fontaine` |
| German | `hans von neumann` | `Hans von Neumann` |
| Dutch | `jan van der waals` | `Jan van der Waals` |
| Italian | `leonardo da vinci` | `Leonardo da Vinci` |
| Irish | `patrick o'malley` | `Patrick O'Malley` |
| Scottish | `donald mcdonald` | `Donald McDonald` |

Plus: Catalan, Swedish, Norwegian, Danish, Welsh, Galician, Polish, Czech, Romanian

## API

### formatName(name, options?)

**Parameters:**
- `name` (string): The name to format
- `options` (object, optional):
  - `locale` (string): Language code (e.g., 'fr', 'it', 'es')
  - `trim` (boolean): Trim whitespace (default: true)
  - `normalizeSpaces` (boolean): Normalize spaces (default: true)

**Returns:** Formatted name string

## Locale Examples

```typescript
// French - keeps articles lowercase
formatName("marie d'aubigny", { locale: "fr" });     // "Marie d'Aubigny"

// Italian - capitalizes surnames  
formatName("giovanni d'amico", { locale: "it" });    // "Giovanni D'Amico"

// Spanish - handles prepositions
formatName("maría de la cruz", { locale: "es" });    // "María de la Cruz"

// German - von/zu prefixes
formatName("ludwig van beethoven", { locale: "de" }); // "Ludwig van Beethoven"
```

## Advanced Usage

```typescript
// Handle mixed origins
formatName('maría von habsburg');        // "María von Habsburg"
formatName('jean-claude mcdonald');      // "Jean-Claude McDonald"

// Custom options
formatName('  marie d\'aubigny  ', {
  locale: 'fr',
  trim: true,
  normalizeSpaces: true
});
```

## TypeScript

```typescript
import { formatName, type NameFormatterOptions } from 'universal-name-formatter';

const options: NameFormatterOptions = {
  locale: 'fr',
  trim: true
};

const formatted: string = formatName('marie d\'aubigny', options);
```

## License

MIT - see [LICENSE](LICENSE) file for details.