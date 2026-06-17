function mostrar(id){


document.querySelectorAll(".pagina")
.forEach(p=>{
p.classList.remove("activa");
});


document.getElementById(id)
.classList.add("activa");


}




let partidos=[

{
numero:1,
fase:"Grupo A",
local:"México",
visitante:"Sudáfrica",
estadio:"Estadio Azteca",
fecha:"11 Junio 2026"
},


{
numero:2,
fase:"Grupo A",
local:"Corea del Sur",
visitante:"Equipo clasificado",
estadio:"Sede oficial",
fecha:"Junio 2026"
}

];



let contenedor=
document.getElementById("listaPartidos");



partidos.forEach(p=>{


contenedor.innerHTML+=`

<div class="match">

<h4>
Partido ${p.numero}
</h4>

<p>
<b>${p.local}</b>
 VS 
<b>${p.visitante}</b>
</p>


<p>
📍 ${p.estadio}
</p>


<p>
📅 ${p.fecha}
</p>


</div>

`;

});





document.getElementById("goles").innerHTML="0";

document.getElementById("tarjetas").innerHTML="0";

document.getElementById("porteros").innerHTML="0";
