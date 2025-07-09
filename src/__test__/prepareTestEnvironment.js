import { readFileSync } from 'fs'
import { join } from 'path'

const mainJsContent = readFileSync(join(__dirname, '../main.js'), 'utf8')
const modifiedContent = mainJsContent
  .replace(/\b(var|let|const)\b/g, 'global.') // Заміна var, let, const на global.
  .replace(/console\.log\(/g, '// console.log(')

export { modifiedContent as code }
