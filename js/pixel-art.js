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

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual


  })
);

//Variable que guarda el elemento con id -> paleta
var paleta = document.getElementById('paleta');

//Variable que guarda el elemento con id -> grilla-pixeles
var grilla = document.getElementById('grilla-pixeles');

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

//LISTA DE LISTENERS
// // // // // // // // //
//Listener clic del mouse sobre un div de la paleta de colores
paleta.addEventListener('click', cambiaColorIndicador);

//Listener clic pixel
grilla.addEventListener('click', pintaPixel);

//Funcion que cambia el color de fondo del indicador de color
function cambiaColorIndicador(e){
  document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
}

//Funcion que pinta pixel
function pintaPixel(e){
  e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}


