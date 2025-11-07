// Test the built module
const { formatName, getSupportedNamePatterns } = require('./dist/index.js');

// Test formatName
console.log('Testing formatName:');
console.log('j.r.r. tolkien ->', formatName('j.r.r. tolkien'));
console.log('maría de la cruz ->', formatName('maría de la cruz'));

// Test getSupportedNamePatterns (now from utils)
console.log('\nTesting getSupportedNamePatterns:');
const patterns = getSupportedNamePatterns();
console.log('Available patterns:', Object.keys(patterns).length);
console.log('English example:', patterns['English names']);
console.log('Initials example:', patterns['Initials']);