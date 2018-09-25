var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//INICIO DECLARACION DE VARIABLES//
/*-------------------------------------------------------------*/
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//Variable clickMouse -> true cuando esta apretado sobre la grilla, false en caso contrario
var clickMouse = false;

//Variable que guarda el elemento con id -> paleta
var paleta = document.getElementById('paleta');

//Variable que guarda el elemento con id -> grilla-pixeles
var grilla = document.getElementById('grilla-pixeles');

//Variable boolena que determina si la goma de borrar esta activa o no
var activa_goma_borrar = false;
/*-------------------------------------------------------------*/
//FIN DECLARACION DE VARIABLES//

//INICIO LISTA DE LISTENERS//
/*-------------------------------------------------------------*/
//Listener clic del mouse sobre un div de la paleta de colores
paleta.addEventListener('click', cambiaColorIndicador);

//Listener clic pixel
grilla.addEventListener('click', pintaPixel);

//Listener que detecta click del mouse en grilla
grilla.addEventListener('mousedown', presionaClick);

//Listener que detecta cuando se suelta click del mouse en grilla
grilla.addEventListener('mouseup', sueltaClick);

//Listener que detecta movimiento del mouse sobre la grilla
grilla.addEventListener('mouseover', deslizaMouse);

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    document.getElementById('indicador-de-color').style.backgroundColor = colorActual;
  })
);

/*-------------------------------------------------------------*/
//FIN LISTA DE LISTENERS//


//Funcion que genera la paleta de colores
function generaPaleta() {
  for(var i = 0; i<nombreColores.length; i++){
    var color = document.createElement('div');
    color.style.backgroundColor = nombreColores[i];
    color.className = 'color-paleta';
    paleta.appendChild(color);
  }
}

//Llama a la funcion generaPaleta
generaPaleta();

//Funcuion que genera la grilla de pixeles
function generaGrillaPixeles(){
  for(var i = 0; i< 1750; i++){
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  }
}

//Llama a la funcion generaGrillaPixeles
generaGrillaPixeles();

//Funcion que cambia el color de fondo del indicador de color
function cambiaColorIndicador(e){
  document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
}

//Funcion que pinta pixel
function pintaPixel(e){
  e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}

//Funcion que asigna valor true a la variable clickMouse cuando se hace clic en la grilla
function presionaClick(){
  console.log('hace click');
  clickMouse = true;
}

//Funcion que asigna valor false a la variable clickMouse cuando se suelta clic en la grilla
function sueltaClick(){
  console.log('suelta click');
  clickMouse = false;
}

/*Funcion que valida si el click del click del mouse esta presionado
(es decir que la variable clickMouse = true). En caso afirmativo
llama a la funcion pinta pixel*/
function deslizaMouse(e){
  if(clickMouse == true){
    pintaPixel(e);
  }
}

//Funcion que borra dibujo
$("#borrar").click(function(){
  $pixeles = $("#grilla-pixeles div");
  $pixeles.animate({"background-color": "white"}, 1500);
});

//Funcion que carga super heroe en la grilla
$(".imgs li img").click(function(){
  var $superHeroe = $(this).attr("id");
  switch($superHeroe){
    case "batman": 
      cargarSuperheroe(batman); 
      break;
    case "flash": 
      cargarSuperheroe(flash); 
      break;
    case "invisible": 
      cargarSuperheroe(invisible); 
      break;
    case "wonder": 
      cargarSuperheroe(wonder); 
      break;
  }
});

//Funcion que permite guardar la imagen coloreada
$("#guardar").click(guardarPixelArt);

//Funcion goma de borrar
$("#goma_borrar").click(function(){
  if(activa_goma_borrar == false){
    $("#goma_borrar").html("Finaliza borrado");
    $(".cursor-personalizado").css("cursor", "url(img/goma_borrar.png), auto");
    activa_goma_borrar = true;
  }else{
    $("#goma_borrar").html("Goma de borrar");
    $(".cursor-personalizado").css("cursor", "url(img/cursor.png), auto");
    activa_goma_borrar = false;
  }
  
});
