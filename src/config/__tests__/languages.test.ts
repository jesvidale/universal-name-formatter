import { describe, it, expect } from 'vitest';
import { getLanguageConfig } from '../languages';
import { SupportedLocale } from '../types';

describe('Language Configuration', () => {
  describe('getLanguageConfig', () => {
    it('should return French configuration', () => {
      const config = getLanguageConfig(SupportedLocale.FRENCH);

      expect(config).toBeDefined();
      expect(config?.apostropheRules.apostrophePrefixes).toContain("d'");
      expect(config?.apostropheRules.apostrophePrefixes).toContain("l'");
      expect(config?.apostropheRules.keepPrefixLowercase).toBe(true);
      expect(config?.apostropheRules.capitalizeAfterApostrophe).toBe(false);
    });

    it('should return Italian configuration', () => {
      const config = getLanguageConfig(SupportedLocale.ITALIAN);

      expect(config).toBeDefined();
      expect(config?.apostropheRules.apostrophePrefixes).toContain("d'");
      expect(config?.apostropheRules.apostrophePrefixes).toContain("dell'");
      expect(config?.apostropheRules.keepPrefixLowercase).toBe(false);
      expect(config?.apostropheRules.capitalizeAfterApostrophe).toBe(true);
    });

    it('should return Irish configuration', () => {
      const config = getLanguageConfig(SupportedLocale.IRISH_GAELIC);

      expect(config).toBeDefined();
      expect(config?.apostropheRules.apostrophePrefixes).toContain("o'");
      expect(config?.apostropheRules.keepPrefixLowercase).toBe(false);
      expect(config?.apostropheRules.capitalizeAfterApostrophe).toBe(true);
    });

    it('should return Spanish configuration with prepositions', () => {
      const config = getLanguageConfig(SupportedLocale.SPANISH);

      expect(config).toBeDefined();
      expect(config?.prepositions).toContain('de');
      expect(config?.prepositions).toContain('del');
      expect(config?.prepositions).toContain('de la');
    });

    it('should return null for unsupported locales', () => {
      const config = getLanguageConfig('unsupported' as SupportedLocale);

      expect(config).toBeNull();
    });

    it('should have consistent structure for all supported locales', () => {
      const supportedLocales = [
        SupportedLocale.FRENCH,
        SupportedLocale.ITALIAN,
        SupportedLocale.SPANISH,
        SupportedLocale.IRISH_GAELIC,
        SupportedLocale.DUTCH,
        SupportedLocale.CATALAN,
      ];

      supportedLocales.forEach(locale => {
        const config = getLanguageConfig(locale);
        expect(config).toBeDefined();
        expect(config).toHaveProperty('apostropheRules');
        expect(config).toHaveProperty('prepositions');
        expect(Array.isArray(config?.apostropheRules.apostrophePrefixes)).toBe(true);
        expect(Array.isArray(config?.prepositions)).toBe(true);
      });
    });
  });
});
