const fs = require('fs');

// Read input.txt file
const inputFile = 'input.txt';
const airports = fs.readFileSync(inputFile, 'utf-8').split('\n').filter(Boolean);

// Write output.txt file with the array in a single line
const outputFile = 'output.txt';
fs.writeFileSync(outputFile, `const airportOptions = [${airports.map(airport => `"${airport.trim()}"`).join(', ')}];\n`);

console.log(`Output has been written to ${outputFile}`);
