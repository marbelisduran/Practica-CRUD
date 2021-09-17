//definición de variables
const url = "http://localhost:3000/api/articulos/"
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const descripcion = document.querySelector('descripcion')
const precio = document.querySelector('precio')
const stock = document.querySelector('stock')
let opcion = ''

btnCrear.addEventListener('click', ()=>{
    //descripcion.value = ''
    //precio.value = ''
    //stock.value = ''
    modalArticulo.show()
    opcion ='crear'
})


//funcion para mostrar resultados
const mostrar = (articulos) => {
    articulos.forEach(articulo => {
        resultados += `<td>
                            <td>${articulo.id}</td>
                            <td>${articulo.descripcion}</td>
                            <td>${articulo.precio}</td>
                            <td>${articulo.cantidad}</td>
                            <td class="test-center"><a class="btneditar btn btn-primary">Editar</a><a class="btnborrar btn btn-danger">Borrar</a></td>
        
        </td>
         `
        
    });
    contenedor.innerHTML = resultados
    
}

//procedimientos Mostrar
fetch(url)
.then( response => response.json() )
.then( data => mostrar())

