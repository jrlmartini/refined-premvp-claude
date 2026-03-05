import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const files = execSync("find src -type f \\( -name '*.ts' -o -name '*.tsx' -o -name '*.css' \\)", {
  encoding: 'utf8',
})
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)

const rawColorRegex = /#[0-9a-fA-F]{3,8}\b/g
const offScaleRegex = /\b(?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap)-(?:1|3|5|7|9|10|11|13|14|15|17|18|19|21|22|23|25)\b/g
const hardcodedTextRegex = /\btext-\[\d+px\]/g

const issues = []

for (const file of files) {
  const content = readFileSync(file, 'utf8')

  if (!file.endsWith('tokens.css')) {
    for (const match of content.matchAll(rawColorRegex)) {
      issues.push(`${file}: raw hex color ${match[0]}`)
    }
  }

  for (const match of content.matchAll(offScaleRegex)) {
    issues.push(`${file}: off-scale spacing token ${match[0]}`)
  }

  if (!file.endsWith('tokens.css') && !file.endsWith('.css')) {
    for (const match of content.matchAll(hardcodedTextRegex)) {
      issues.push(`${file}: hardcoded text size ${match[0]} — use typography tokens (--text-display, --text-h1, --text-h2, --text-body)`)
    }
  }
}

if (issues.length > 0) {
  console.error('UI token guard found violations:')
  for (const issue of issues) console.error(`- ${issue}`)
  process.exit(1)
}

console.log(`UI token guard passed for ${files.length} files.`)
