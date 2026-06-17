

const partidos = [

{
numero:1,
fase:"Fase de grupos",
grupo:"Grupo A",
fecha:"11 Junio 2026",
hora:"13:00",
local:"México",
visitante:"Sudáfrica",
estadio:"Estadio Azteca",
ciudad:"Ciudad de México"
},


{
numero:2,
fase:"Fase de grupos",
grupo:"Grupo A",
fecha:"12 Junio 2026",
hora:"16:00",
local:"Corea del Sur",
visitante:"Equipo clasificado",
estadio:"Estadio oficial",
ciudad:"Canadá"
},


{
numero:3,
fase:"Fase de grupos",
grupo:"Grupo B",
fecha:"12 Junio 2026",
hora:"19:00",
local:"Canadá",
visitante:"Equipo clasificado",
estadio:"BMO Field",
ciudad:"Toronto"
},


{
numero:4,
fase:"Fase de grupos",
grupo:"Grupo C",
fecha:"13 Junio 2026",
hora:"14:00",
local:"Estados Unidos",
visitante:"Equipo clasificado",
estadio:"MetLife Stadium",
ciudad:"Nueva York/Nueva Jersey"
}


];




// Mostrar partidos en la página

function cargarPartidos(){


let contenedor =
document.getElementById("listaPartidos");


if(!contenedor){
return;
}



partidos.forEach(partido=>{


contenedor.innerHTML += `


<div class="match">


<h3>
🏆 Partido ${partido.numero}
</h3>


<h4>
${partido.local}
 VS 
${partido.visitante}
</h4>


<p>
🌎 ${partido.grupo}
</p>


<p>
📅 ${partido.fecha}
</p>


<p>
⏰ ${partido.hora}
</p>


<p>
🏟️ ${partido.estadio}
</p>


<p>
📍 ${partido.ciudad}
</p>


</div>


`;


});


}



document.addEventListener(
"DOMContentLoaded",
cargarPartidos
);
