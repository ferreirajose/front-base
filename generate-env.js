const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const environmentFilePath = './src/environments/environment.prod.ts';

let environmentFileContent = fs.readFileSync(environmentFilePath, 'utf8');

function replacePlaceholdersWithEnvVars(content) {
  return content.replace(/\$\{(.*?)\}/g, (match, envVar) => {
    return process.env[envVar] ? process.env[envVar] : match;
  });
}

environmentFileContent = replacePlaceholdersWithEnvVars(environmentFileContent);

const remainingPlaceholders = environmentFileContent.match(/\$\{(.*?)\}/g);
if (remainingPlaceholders) {
  const missingVars = remainingPlaceholders.map(placeholder => placeholder.slice(2, -1));
  throw new Error(`As seguintes variáveis de ambiente não foram definidas: ${missingVars.join(', ')}`);
}

fs.writeFileSync(environmentFilePath, environmentFileContent, 'utf8');

console.log('Arquivo environment.prod.ts atualizado com sucesso!');
