document.querySelector(".titulo").innerHTML = "Estadisticas Centro Médico Ñuñoa";

/*document.write('<button id="informeBtn">Generar informe de primera y ultima atencion por especialidad</button>');*/

let radiologia = [

    {
        especialidad: 'Radiologia',
        rut_paciente: '9878782 - 1',
        nombre_paciente: 'Francisca Rojas',
        prevision: 'Fonasa',
        especialista: 'Ignacio Schulz',
        hora: '11:00'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '15345241-3',
        nombre_paciente: 'Pamela Estrada',
        prevision: 'Isapre',
        especialista: 'Federico Subercaseaux',
        hora: '11:30'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '16445345-9',
        nombre_paciente: 'Armando Luna',
        prevision: 'Isapre',
        especialista: 'Fernando Wurthz',
        hora: '15:00'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '17666419-0',
        nombre_paciente: 'Manuel Godoy',
        prevision: 'Fonasa',
        especialista: 'Ana Maria Godoy',
        hora: '15:30'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '14989389-k',
        nombre_paciente: 'Ramon Ulloa',
        prevision: 'Fonasa',
        especialista: 'Patricia Suazo',
        hora: '16:00'
    },

];

var traumatologia = [
    {
        especialidad: 'Traumatologia',
        rut_paciente: '15554774-5',
        nombre_paciente: 'Paula Sanchez',
        prevision: 'Fonasa',
        especialista: 'Maria Paz Altuzarra',
        hora: '8:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '15444147-9',
        nombre_paciente: 'Angelica navas',
        prevision: 'Isapre',
        especialista: 'Rauls Araya',
        hora: '10:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '17879423-9',
        nombre_paciente: 'Ana Klapp',
        prevision: 'Isapre',
        especialista: 'Maria Arriagada',
        hora: '10:30'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '1547423-6',
        nombre_paciente: 'Felipe Mardones',
        prevision: 'Isapre',
        especialista: 'Alejandro Badilla',
        hora: '11:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '16554741-k',
        nombre_paciente: 'Diego Marre',
        prevision: 'Fonasa',
        especialista: 'Cecilia Budnik',
        hora: '11:30'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '9747535-8',
        nombre_paciente: 'Cecilia Mendez',
        prevision: 'Isapre',
        especialista: 'Arturo Cavagnaro',
        hora: '12:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '11254785-5',
        nombre_paciente: 'Marcial Suazo',
        prevision: 'Isapre',
        especialista: 'Andres Kanacri',
        hora: '12:30'
    }

];

var dental = [
    {
        especialidad: 'Dental',
        rut_paciente: '11123425-6',
        nombre_paciente: 'Marcela Retamal',
        prevision: 'Isapre',
        especialista: 'Andrea Zuñiga',
        hora: '8:30'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '9878789',
        nombre_paciente: 'Angel Muñoz',
        prevision: 'Isapre',
        especialista: 'Maria Pia Zañartu',
        hora: '11:00'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '7998789-5',
        nombre_paciente: 'Mario KART',
        prevision: 'Fonasa',
        especialista: 'Scarlett Witting',
        hora: '11:30'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '18887662-k',
        nombre_paciente: 'Karin Fernandez',
        prevision: 'Fonasa',
        especialista: 'Francisco Von Teuber',
        hora: '13:00'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '17665461-4',
        nombre_paciente: 'Hugo Sanchez',
        prevision: 'Fonasa',
        especialista: 'Eduardo Viñuela',
        hora: '13:30'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '14441281-0',
        nombre_paciente: 'Ana Sepulveda',
        prevision: 'Isapre',
        especialista: 'Raquel Villaseca',
        hora: '14:00'
    }

];




// AGREGA DATOS
traumatologia.push(
    {
        especialidad: 'Traumatologia',
        rut_paciente: '13123329-7',
        nombre_paciente: 'Ana Gellona',
        prevision: 'Isapre',
        especialista: 'René Poblete',
        hora: '09:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '12221451-k',
        nombre_paciente: 'Ramiro Andrade',
        prevision: 'Fonasa',
        especialista: 'Maria Solar',
        hora: '09:30'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '10112348-3',
        nombre_paciente: 'Carmen Isla',
        prevision: 'Isapre',
        especialista: 'Raul Loyola',
        hora: '10:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '13453234-1',
        nombre_paciente: 'Pablo Loayza',
        prevision: 'Isapre',
        especialista: 'Antonio Larenas',
        hora: '10:30'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '14345656-6',
        nombre_paciente: 'Susana Poblete',
        prevision: 'Fonasa',
        especialista: 'Matias Aravena',
        hora: '12:00'
    }
)


let arreglos = [radiologia, traumatologia, dental];

tabla(arreglos, "mi-tabla");

tabla([dental], "tabla-dental");

listaDental(dental);

// lista los nombres de todas las atenciones e imprime en en el html con forEach
var nombres = [];

arreglos.forEach(function (arr) {
    arr.forEach(function (atencion) {
        nombres.push(atencion.nombre_paciente);
        ///
        //creamos el elemento p
        var parrafo = document.createElement('p');
        //creamos un "nodo de texto" que sera donde voy a dejar el texto/datos con el formato que necesito
        var texto = document.createTextNode(`${atencion.nombre_paciente}`);
        //agrego el texto a mi elemento creado
        parrafo.appendChild(texto);
        //agrego mi elelemento "p" creado en js con los datos al html 
        document.querySelector('.lista-nombres').appendChild(parrafo);
    });
});

console.log(nombres);

/*
//lista los nombres de todas las atenciones e imprime en en el html con funcion y ciclos tradicionales
listaDeNombres(arreglos);
*/

informeBtn.addEventListener('click', function () {
    firstLast(radiologia);
});

previsionBtn1.addEventListener('click', function () {
    limpiarPrevision();
    filtraPrevision(dental, "Isapre");
});

previsionBtn2.addEventListener('click', function () {
    limpiarPrevision();
    filtraPrevision(traumatologia, "Fonasa");

});



function limpiarPrevision() {
    document.querySelector('.prevision').innerHTML = "";
}



function filtraPrevision(arreglo, filtro) {

    console.log(filtro);

    arreglo.forEach(function (atencion) {
        if (atencion.prevision == filtro) {
            nombres.push(atencion.prevision);
            //creamos el elemento p
            var parrafo = document.createElement('p');
            //creamos un "nodo de texto" que sera donde voy a dejar el texto/datos con el formato que necesito
            var texto = document.createTextNode(`${atencion.especialidad} - ${atencion.hora} - ${atencion.especialista} - ${atencion.nombre_paciente} - ${atencion.rut_paciente} - ${atencion.prevision}`);
            //agrego el texto a mi elemento creado
            parrafo.appendChild(texto);
            //agrego mi elelemento "p" creado en js con los datos al html 
            document.querySelector('.prevision').appendChild(parrafo);
        }
    });
};



// Elimina primera y ultima atencion 

function firstLast(arreglo) {

    var first = arreglo[0];
    var last = arreglo[arreglo.length - 1];

    first = arreglo.shift();
    last = arreglo.pop();

    console.log(`Primer eliminado :  ${JSON.stringify(first)}`);
    console.log(`Ultimo eliminado: ${JSON.stringify(last)}`);

    alert(`----- Eliminado primer y ultimo elemento de Traumatologia ----- \n\n ${JSON.stringify(first)} \n\n ${JSON.stringify(last)}`);

    tabla(arreglos, "mi-tabla");
}


// Imprime arreglos en tabla de mi pagina html
function tabla(arreglos, tabla) {

    /*console.log(arreglos, tabla);*/

    var texto = "<tr><th>Epecialidad</th><th>Especialista</th><th>Hora</th><th>Nombre paciente</th><th>Rut paciente</th><th>Prevision</th></tr> ";

    for (var i = 0; i < arreglos.length; i++) {

        for (var j = 0; j < arreglos[i].length; j++) {
            texto += `<tr>
                <td>${arreglos[i][j].especialidad}</td> 
                <td>${arreglos[i][j].especialista}</td>
                <td>${arreglos[i][j].hora}</td>
                <td>${arreglos[i][j].nombre_paciente}</td>
                <td>${arreglos[i][j].rut_paciente}</td>
                <td>${arreglos[i][j].prevision}</td>
             </tr>`;
        }
        document.getElementById(tabla).innerHTML = texto;
    }
}

// imprime directo en pagina con el formato solcitado en el ejercicio
function listaDental(datos) {
    // seleccionamos el elemento del html donde quedara el resultado
    var p = document.querySelector('.lista-dental');

    //iteramos el arreglo para obtener todos los registros
    for (var i = 0; i < datos.length; i++) {

        //creamos el elemento p
        var parrafo = document.createElement('p');
        //creamos un "nodo de texto" que sera donde voy a dejar el texto/datos con el formato que necesito
        var texto = document.createTextNode(`${datos[i].hora} - ${datos[i].especialista} - ${datos[i].nombre_paciente} - ${datos[i].rut_paciente} - ${datos[i].prevision}`);
        //agrego el texto a mi elemento creado
        parrafo.appendChild(texto);
        //agrego mi elelemento "p" creado en js con los datos al html 
        p.appendChild(parrafo);
    }
}



function listaDeNombres(datos) {
    // seleccionamos el elemento del html donde quedara el resultado
    var p = document.querySelector('.lista-nombres');

    //iteramos el arreglo para obtener todos los registros


    for (var i = 0; i < arreglos.length; i++) {

        for (var j = 0; j < arreglos[i].length; j++) {
            //creamos el elemento p
            var parrafo = document.createElement('p');
            //creamos un "nodo de texto" que sera donde voy a dejar el texto/datos con el formato que necesito
            var texto = document.createTextNode(`${datos[i][j].nombre_paciente}`);
            //agrego el texto a mi elemento creado
            parrafo.appendChild(texto);
            //agrego mi elelemento "p" creado en js con los datos al html 
            p.appendChild(parrafo);
        }
    }
}
