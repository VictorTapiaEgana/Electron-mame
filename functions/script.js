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
     
      const NombreSibExtencion = file.slice(0, file.length - 4)
      // console.log(NombreSibExtencion)
      
      lista += `<li> ${NombreSibExtencion}</li>`

      // lista += `<div class="container">
      //               <span> ${file}</span>
      //               <img src="${window.config.config.snap_path}/${NombreSibExtencion}.png" alt="imagen de ${file}" />
      //           </div>`
    })

    litadoArchivos.innerHTML = `<ul id="listaDeJuegos"> ${lista} </ul>`
    
  } else {

    // asignar valores en blanco y mensaje de error

  }

  // evento de finalizacion de carga
  window.dispatchEvent(new Event('carga-completa'))

})

window.addEventListener('carga-completa', () => {
  const list = document.getElementById('listaDeJuegos')
  const items = list.getElementsByTagName('li')
  let selectedIndex = 0

  // Inicialmente resaltar el primer elemento
  items[selectedIndex].classList.add('selected')
  CargarImagen(items[selectedIndex].textContent)
  // Manejar eventos de teclado
  document.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowDown') {
      
      if (selectedIndex < items.length - 1) {
        items[selectedIndex].classList.remove('selected')
        selectedIndex++
        items[selectedIndex].classList.add('selected')
      }

    } else if (event.key === 'ArrowUp') {
      
      if (selectedIndex > 0) {
        items[selectedIndex].classList.remove('selected')
        selectedIndex--
        items[selectedIndex].classList.add('selected')
      }
    }

    CargarImagen(items[selectedIndex].textContent)

  })
})

// TODO: Cargar imagen por default en caso de que alguna ROM no tenga snap
const CargarImagen = (RomName) => {

  const romImg = document.getElementById('romImg')

  romImg.setAttribute('src', `${window.config.config.snap_path}/${RomName.trim()}.png`)
  romImg.setAttribute('alt', `imagen de ${RomName.trim()}`)

}

// const LanzarMame = (ArchivoZip) => { 
  
//   const executablePath = window.config.config.exe_path

//   const parameters = [ArchivoZip]

//   execFile(executablePath, parameters, (err, data) => {

//     if (err) {
//       console.error(err)
//       return
//     }

//     console.log(data.toString())
//   })

// }
