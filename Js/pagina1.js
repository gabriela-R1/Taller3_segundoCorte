let estudiantes = [];
let indiceActual = -1;

function guardarEstudiante() {
    const idEstudiante = document.getElementById('idEstudiante').value;
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    if (indiceActual === -1) {
        const estudiante = { idEstudiante, nombreCompleto, fechaNacimiento, correo, telefono };
        estudiantes.push(estudiante);
    } else {
        estudiantes[indiceActual] = { idEstudiante, nombreCompleto, fechaNacimiento, correo, telefono };
        indiceActual = -1; 
    }

    document.getElementById('formularioEstudiante').reset();
    mostrarEstudiantes();
}

function mostrarEstudiantes() {
    const listaEstudiantes = document.getElementById('listaEstudiantes');
    listaEstudiantes.innerHTML = '';

    estudiantes.forEach((estudiante, index) => {
        const li = document.createElement('li');
        li.textContent = `${estudiante.idEstudiante} - ${estudiante.nombreCompleto} - ${estudiante.fechaNacimiento} - ${estudiante.correo} - ${estudiante.telefono}`;
        li.onclick = () => seleccionarEstudiante(index);
        listaEstudiantes.appendChild(li);
    });
}

function seleccionarEstudiante(index) {
    indiceActual = index;
    const estudiante = estudiantes[index];
    document.getElementById('idEstudiante').value = estudiante.idEstudiante;
    document.getElementById('nombreCompleto').value = estudiante.nombreCompleto;
    document.getElementById('fechaNacimiento').value = estudiante.fechaNacimiento;
    document.getElementById('correo').value = estudiante.correo;
    document.getElementById('telefono').value = estudiante.telefono;
}

function editarEstudiante() {
    if (indiceActual === -1) {
        alert("Por favor, selecciona un estudiante para editar.");
    } else {
        guardarEstudiante(); 
    }
}

function eliminarEstudiante() {
    if (indiceActual === -1) {
        alert("Por favor, selecciona un estudiante para eliminar.");
    } else {
        estudiantes.splice(indiceActual, 1); 
        document.getElementById('formularioEstudiante').reset();
        mostrarEstudiantes();
    }
}