import path from 'path'
import fs from 'fs'
export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event) 
  files?.forEach(file=>{
    const filepath = path.join(process.cwd(),'public/images',file.filename as string)
    fs.writeFileSync(filepath,file.data)
  })
  return 200
})
