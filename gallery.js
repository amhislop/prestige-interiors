const fs = require('fs');

(async () => {
  const dirPath = '/gallery';
  const exclude = ['.DS_Store', undefined, null];
  const files = await fs.readdirSync(`.${dirPath}`);

  const filePaths = files
    .map((file) => {
      if (!exclude.includes(file)) {
        // console.log(file);
        return `${dirPath}/${file}`;
      }
    })
    .filter((file) => !!file);

  const data = `const data = ${JSON.stringify(
    filePaths
  )}; module.exports = data;`;

  await fs.writeFileSync('./data.js', data);

  console.log('Gallery data saved');

  return filePaths;
})();
