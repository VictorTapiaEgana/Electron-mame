/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */ 
/* eslint-disable padded-blocks */

// const exeName = document.getElementById('exe')
const litadoArchivos = document.getElementById('listadoArchivos')

window.addEventListener('config-loaded', () => {

  if (window.config && window.config.config) {
    
    let lista = ''    

    // eslint-disable-next-line array-callback-return
    window.config.config.Archivos.map(file => {        
      lista += `<li> ${file} </li>`
    })

    litadoArchivos.innerHTML = `<ul> ${lista} </ul>`
    
  } else {

    // asignar valores en blanco y mensaje de error

  }

})

const LanzarMame = (ArchivoZip) => { 
  
  const executablePath = window.config.config.exe_path

  const parameters = [ArchivoZip]

  execFile(executablePath, parameters, (err, data) => {

    if (err) {
      console.error(err)
      return
    }

    console.log(data.toString())
  })

}
