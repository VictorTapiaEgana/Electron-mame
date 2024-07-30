/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */ 
/* eslint-disable padded-blocks */

const ObtenerConfig = require('./ObtenerConfig')

const { contextBridge } = require('electron')

const setup = async () => {

  const config = await ObtenerConfig()

  if (config) {

    contextBridge.exposeInMainWorld('config', { config })
        
    window.dispatchEvent(new Event('config-loaded'))

  } else {

    console.log('Sin Archivos')

  }
}

setup()