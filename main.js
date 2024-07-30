/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */ 
/* eslint-disable padded-blocks */

const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {

  const mainWindow = new BrowserWindow({

    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '/functions/preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
      sandbox: false
    }

  })

  mainWindow.loadFile('index.html')

}

app.whenReady().then(() => {

  createWindow()
  
})
