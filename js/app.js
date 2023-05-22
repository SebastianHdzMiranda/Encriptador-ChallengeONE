const textArea = document.querySelector('#textarea');
const botones = document.querySelector('#botones');
const contenidoVacio = document.querySelector('.resultado__vacio');
const contenidoEntrada = document.querySelector('.resultado__entrada');
const botonCopiar = document.querySelector('#btn-copiar');
console.log(botonCopiar);
/* Eventos 
---------------------------------------------------*/
botones.addEventListener('click', mostrarMensaje);



/* funciones 
---------------------------------------------------*/
function mostrarMensaje(e) {
    let texto = textArea.value;
    console.log(texto);
    e.preventDefault();
    if (e.target.classList.contains('btn') && texto !== '') {
        if (/^[a-z\s]+$/.test(texto)) {
            
            const contenedorTexto = document.querySelector('.resultado__transcription');
            
            if (e.target.classList.contains('btn--encriptar')) {
                let encriptado = texto.replace(/[aeiou]/g, function(match){
                    switch (match) {
                        case 'a':
                            return 'ai';
                        case 'e':
                            return 'enter'
                        case 'i':
                            return 'imes'
                        case 'o':
                            return 'ober'
                        case 'u':
                            return 'ufat'
                    
                        default:
                            return match;
                    }
                });
                contenedorTexto.innerHTML = `${encriptado}`;
            }
            if (e.target.classList.contains('btn--desencriptar')) {
                let desencriptado = texto.replace(/ai/g, 'a')
                                        .replace(/enter/g, 'e')
                                        .replace(/imes/g, 'i')
                                        .replace(/ober/g, 'o')
                                        .replace(/ufat/g, 'u');
                
                contenedorTexto.innerHTML = `${desencriptado}`;
            }
            mostrarContenido();
            copiarContenido(contenedorTexto);  
              
            // resetea el nombre del btn a copiar
            botonCopiar.textContent = 'Copiar'
        } else {
            alert('Solo letras minúsculas y sin acento');
        }
    }
}

function mostrarContenido() {
    contenidoEntrada.classList.add('resultado__entrada--activo');
    contenidoVacio.classList.add('resultado__vacio--desac');
}

function copiarContenido(contenido) {
    botonCopiar.addEventListener('click', e =>{
        e.preventDefault();
        console.log(contenido.textContent);
        navigator.clipboard.writeText(contenido.textContent);
        botonCopiar.textContent = 'Copiado';
    })
}






































