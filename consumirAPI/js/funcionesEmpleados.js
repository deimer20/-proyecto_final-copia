const url = 'http://localhost:8082/api/empleados' //url de la api. Al desplegarla en el servidor local colocar la api del servi
const listarDatos = async() => {
    let respuesta = ''
    let body = document.getElementById('contenido')
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) // Obtener la respuesta y convertirla a json
    .then(function(data){
        let listaEmpleados = data.empleados
        listaEmpleados.map(function(empleado){
            respuesta += `<tr><td>${empleado.cedula}</td>`+
                        `<td>${empleado.nombre_Empleado}</td>`+
                        `<td>${empleado.correo}</td>`+
                        `<td>${empleado.direccion}</td>`+
                        `<td>${empleado.telefono}</td>`+
                        `<td>${empleado.estado_Empleado}</td>`+
                        `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(empleado)})'>Editar</a>
                        <a class="waves-effect waves-light btn modal-denger red" href="http://localhost:3000/consumirAPI206/listarDatos.html" onclick='eliminar(${JSON.stringify(empleado)})'>Eliminar</a></td></tr>`  
                        body.innerHTML = respuesta

        })
    })
    //alert('En desarrollo...')
}

const registrar = async()=>{

    let _cedula = document.getElementById('cedula').value
    let _nombre_Empleado = document.getElementById('nombre_Empleado').value
    let _correo = document.getElementById('correo').value
    let _direccion = document.getElementById('direccion').value
    let _telefono = document.getElementById('telefono').value
    let _estado_Empleado = document.getElementById('estado_Empleado').value
    //alert(_pass.length+' '+_confirmaPass.length)

    if((_cedula.length>0 && _nombre_Empleado.length>0) && (_cedula == _confirmaPass)){
        let _empleado = {
            cedula: _cedula,
            nombre_Empleado:_nombre_Empleado,
            correo:_correo ,
            direccion: _direccion,
            telefono: _telefono,
            estado_Empleado: _estado_Empleado
        }
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(_empleado), //Convertir el objeto usuario a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp) => resp.json()) // Obtener la respuesta y convertirla a JSON
        .then(json   =>{
           // alert(json.msg)
           Swal.fire(
            json.msg,
            '',
            'success'
          )

        })


    } else {
     //alert('El Password y la Confirmar de Password no coinciden. Por favor corregir')
     Swal.fire(
        'El Password y la Confirmar de Password no coinciden. Por favor corregir',
        '',
        'error'
      )
}
}

const editar= (empleado) =>{

    document.getElementById('cedula').value = ''
    document.getElementById('nombre_Empleado').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('direccion').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('estado_Empleado').value = ''


    document.getElementById('cedula').value
    document.getElementById('nombre_Empleado').value
    document.getElementById('correo').value
    document.getElementById('direccion').value
    document.getElementById('telefono').value
    document.getElementById('estado_Empleado').value


}

// ACTUALIZAR DATOS
const actualizar = async()=>{
    let _cedula = document.getElementById('cedula').value
    let _nombre_Empleado = document.getElementById('nombre_Empleado').value
    let _correo = document.getElementById('correo').value
    let _direccion = document.getElementById('direccion').value
    let _telefono = document.getElementById('telefono').value
    let _estado_Empleado = document.getElementById('estado_Empleado').value

    //alert(_pass.length+' '+_confirmaPass.length)

    if((_cedula.length>0 && _nombre_Empleado.length>0) && (_cedula == _confirmaPass)){
        let _empleado = {
            cedula: _cedula,
            nombre_Empleado:_nombre_Empleado,
            correo:_correo ,
            direccion: _direccion,
            telefono: _telefono,
            estado_Empleado: _estado_Empleado
        }
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(_empleado), //Convertir el objeto usuario a un JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((resp) => resp.json()) // Obtener la respuesta y convertirla a JSON
        .then(json   =>{
           // alert(json.msg)
           Swal.fire(
            json.msg,
            '',
            'success'
          )

        })


    } else {
     //alert('El Password y la Confirmar de Password no coinciden. Por favor corregir')
     Swal.fire(
        'El Password y la Confirmar de Password no coinciden. Por favor corregir',
        '',
        'error'
      )
}
}

const eliminar = (id) =>{
    if(confirm('¿Está seguro de relizar la eliminación?') == true){
        
            let empleado = {
                _id: id
                
            }
            fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(empleado), //Convertir el objeto usuario a un JSON
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then((resp) => resp.json()) // Obtener la respuesta y convertirla a JSON
            .then(json   =>{
                alert(json.msg)
            })

    }
}

if(document.querySelector('#btnRegistrar')){
    document.querySelector('#btnRegistrar')
    .addEventListener('click', registrar)
}
if(document.querySelector('#btnActualizar')){
    document.querySelector('#btnActualizar')
    .addEventListener('click', actualizar)
}
/* // ELIMINAR DATOS
const eliminar = async()=>{
    let _id = document.getElementById('id').value
    if(_id.length > 0){ */
