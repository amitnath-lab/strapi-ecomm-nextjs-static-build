const path = require('path')
const fsp = require('fs/promises')
const download = require('download')
const walk = require('walk')

// usage :
// node fetchImages.js nextjsOutDirectory imagesPrefix1 imagesPrefix2 imagesPrefix3

// example :
// node fetchImages.js ./out http://localhost:1337

// What I did :
// - Put the file at the root of my project
// - Edit my "export" npm script and added "&& npm run fetch-images" after "next build && next export"

let startPath = process.argv[2]
let urls = process.argv.slice(3)

async function fetchImages() {
  let walker = walk.walk(startPath)
  walker.on('file', async (root, fileStats, next) => {
    if (fileStats.name.indexOf('.html') > 0) {
      const filePath = path.join(root, fileStats.name)
      const file = await fsp.readFile(filePath, { encoding: 'utf-8' })
      await handlePage(file, filePath)
    }
    next()
  })
  walker.on('errors', console.log)
  walker.on('end', function () {
    console.log('all done');
  });
}

async function handlePage(data, filePath) {
    while ((startIndex = data.indexOf("http://")) > -1) {
        const endIndex = data.indexOf("\"", startIndex)
        const urlToReplace = data.substring(startIndex,endIndex)
        console.log("URL to replace ", urlToReplace)
        const urlTrimmed = urlToReplace.split('?')[0]
        const fileName = urlTrimmed.split('/').pop().split('\\').pop()
        console.log("Downloading ... ", fileName)
        await download(urlToReplace, path.join(startPath, '/assets'))
        data = data.replace(urlToReplace, `/assets/${fileName}`)
    }
    fsp.writeFile(filePath, data, { encoding: 'utf8' })
    console.log('updated ', filePath)
}

fetchImages()