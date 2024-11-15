document.getElementById('matriculaForm').addEventListener('submit', function(event) {
    event.preventDefault();

document.getElementById('editar').addEventListener('click', function () { 
    editarPrograma(); 
    }); 
    
document.getElementById('eliminar').addEventListener('click', function () { 
    eliminarPrograma(); 
    });
    
    const idMatricula = document.getElementById('idMatricula').value.trim();
    const idEstudiante = document.getElementById('idEstudiante').value.trim();
    const codigoPrograma = document.getElementById('codigoPrograma').value.trim();
    const fechaMatricula = document.getElementById('fechaMatricula').value;
    const estadoMatricula = document.getElementById('estadoMatricula').value;

    const matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];

    if (matriculas.some(matricula => matricula.idMatricula === idMatricula)) {
        document.getElementById('mensaje').innerText = 'La identificación de matrícula ya existe.';
        return;
    }

    const fechaActual = new Date();
    if (new Date(fechaMatricula) < fechaActual) {
        document.getElementById('mensaje').innerText = 'La fecha de matrícula debe ser actual o futura.';
        return;
    }

    const nuevaMatricula = {
        idMatricula,
        idEstudiante,
        codigoPrograma,
        fechaMatricula,
        estadoMatricula
    };

    matriculas.push(nuevaMatricula); 
    localStorage.setItem('matriculas', JSON.stringify(matriculas)); 
    
    document.getElementById('mensaje').innerText = 'Matrícula agregada exitosamente.'; 
    document.getElementById('matriculaForm').reset(); 

    function editarPrograma() { 
        document.getElementById('mensaje').textContent = "Función de edición no implementada."; 
    } 
    
    function eliminarPrograma() { 
        document.getElementById('mensaje').textContent = "Función de eliminación no implementada."; 
    }
});