const cifrado = [['i','imes'],['e','enter'],['a','ai'],['o','ober'],['u','ufat']]
const resultado = document.getElementById('resultado')
const containerInicial = document.getElementById('containerInicial')
const containerResult = document.getElementById('containerResult')
const btnEncriptar = document.getElementById('btnEncriptar')
const btnDesencriptar = document.getElementById('btnDesencriptar')
const btnCopiar = document.getElementById('btnCopiar')
const fecha = document.getElementById('fecha')

fecha.innerHTML = new Date().getFullYear()

function auto_grow(element){
    element.style.height = '5px'
    element.style.height = (element.scrollHeight) + 'px';
}

const copiar = async ()=>{
    await navigator.clipboard.writeText(resultado.value);
    resultado.value = ''
    resultado.style.height = '50px'
}

const ocultarPaneles = (contenido=false)=>{
    containerInicial.style.display = contenido ? 'none' : 'flex'
    containerResult.style.display = contenido ? 'flex' : 'none'
}

const accion = (string,desencriptar)=>{
    string = string.toLowerCase()
    for(let x=0;x<cifrado.length;x++){
        if(!desencriptar){
            if(string.includes(cifrado[x][0])){
                string = string.replaceAll(cifrado[x][0],cifrado[x][1])
            }
        }
        else{
            if(string.includes(cifrado[x][1])){
                string = string.replaceAll(cifrado[x][1],cifrado[x][0])
            }
        }
    }
    return string;
}

const preAccion = (desencriptar=false)=>{
    const inputPrincipal = document.getElementById('inputPrincipal')
    if(inputPrincipal.value != ''){
        resultado.value = accion(inputPrincipal.value,desencriptar)
        auto_grow(resultado)
        ocultarPaneles(true)
    }
    else{
        ocultarPaneles()
    }
    inputPrincipal.value = ''
    inputPrincipal.style.height = '150px'
}

btnEncriptar.addEventListener('click', ()=>{
    preAccion();
})

btnDesencriptar.addEventListener('click', ()=>{
    preAccion(true);
})

btnCopiar.addEventListener('click', ()=>{
    copiar()
})

