const { formatName } = require('./dist/index.js');

console.log('Test 1 (sin locale):', formatName('jean-claude de la fontaine'));
console.log('Test 2 (fr):', formatName("marie d'aubigny", { locale: 'fr' }));
console.log('Test 3 (it):', formatName("giovanni d'amico", { locale: 'it' }));
console.log('Test 4 (es):', formatName("maría de la cruz"));
console.log('Test 5 (de):', formatName("hans von neumann"));