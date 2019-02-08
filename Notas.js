//Programa que determina el porcentaje de alumnos reprobados, promedio de aprobados, promedio de reprobados y notas cantidad de alumnos con nota mayor a 7
//Padece de un problema un poco mas abajo

var alumno1 = prompt("nota 1");
var alum1 = alumno1;
var alumno2 = prompt("nota 2");
var alum2 = alumno2;
var alumno3 = prompt("nota 3");
var alum3 = alumno3;

 var alumnos = [alum1,alum2,alum3];

//alumno1
 var alu1 = alumnos[0];
 if (alu1>6 && alu1<11){var mayor1 = 1;}
 if (alu1<7){var mayor1 = 0;}
 if (alu1<0 || alu1>10){ alert("error")}
 if (alu1>5 && alu1<11)
 {
 var aprobado1 = alu1;
 var estado1 = 0;
 }
 if (alu1<6)
 {
 var reprobado1 = alu1;
var estado1 = 1;
 }

//alumno2
  var alu2 = alumnos[1];
  if (alu2>6 && alu2<11){var mayor2 = 1;}
  if (alu2<7){var mayor2 = 0;}
   if (alu2<0 || alu2>10){ alert("error")}
   if (alu2>5 && alu2<11)
   {
   var aprobado2 = alu2;
   var estado2 = 0;
   }
   if (alu2<6)
   {
   var reprobado2 = alu2;
   var estado2 = 1;
   }

//alumno3
   var alu3 = alumnos[2];
   if (alu3>6 && alu3<11){var mayor3 = 1;}
   if (alu3<7){var mayor3 = 0;}
    if (alu3<0 || alu3>10){ alert("error")}
    if (alu1>3 && alu3<11)
    {
    var aprobado3 = alu3;
    var  estado3 = 0;
    }
    if (alu3<6)
    {
    var reprobado3 = alu3;
    var estado3 = 1;
    }

//porcentaje de reprobados
//Hay que arreglar esta parte :/
var reprobados = (estado1+ estado2+ estado3);
var porcentaje = reprobados *5;
var respuesta_reprobados = porcentaje;
alert("Hay que arreglar esta parte");
//promedio de aprobados
var aprobados = ((aprobado1+aprobado2+aprobado3)/3);
alert("el promedio de aprobados es" + aprobados);

//promedio de reprobados
var los_reprobados = ((reprobado1+reprobado2+reprobado3)/3);
alert("el promedio de reprobados es" + los_reprobados);


//mayores a 7
var mayores_a_7 = (mayor1+mayor2+mayor3);
alert("el total de notas mayores a 7 es:" + mayores_a_7);
