/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */

const fs = require('fs').promises

const ObtenerConfig = async () => {

  try {
 
    const data = await fs.readFile('./files/config.json', 'utf8')
    const { config } = JSON.parse(data)
    const Archivos = await LeerArchvos(config)

    return ({ ...config, Archivos })
  
  } catch (error) {
    //   crear el archivo vacio
    // console.error('Error reading config.json:', error)
    return null
  
  }
    
}

const LeerArchvos = async (config) => {  

  const Archivos = await fs.readdir(config.rom_path)
  return Archivos

}

module.exports = ObtenerConfig