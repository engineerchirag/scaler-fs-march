const path = require('path');

console.log('filepath', __filename);
console.log('dirname', __dirname);

console.log('isAbsolute', path.isAbsolute(__filename));

console.log('sep', path.sep);
console.log('delimiter', path.delimiter);

console.log('path', process.env.PATH);

console.log('extension', path.extname(__filename));
console.log('relative path', path.relative(__filename, '/Users/engineerchirag/workspace/Scaler-fs-March/Backend/Class1/.Readme'));