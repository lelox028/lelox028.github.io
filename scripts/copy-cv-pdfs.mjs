import { access, copyFile, mkdir } from 'node:fs/promises'
import { constants } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const files = [
  'cv_giuliano_pascarelli_es.pdf',
  'cv_giuliano_pascarelli_en.pdf',
]

await mkdir(resolve(root, 'public'), { recursive: true })

for (const file of files) {
  const source = resolve(root, 'cv', file)
  const destination = resolve(root, 'public', file)

  try {
    await access(source, constants.R_OK)
  } catch {
    throw new Error(`Missing compiled CV PDF: ${source}. Compile both PDFs inside cv/ before building.`)
  }

  await copyFile(source, destination)
}
