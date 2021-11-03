// define a palette
class Palette {

    constructor(name, type, category, colors){
        this.name = name;
        this.type = type;
        this.category = category;
        this.colors = colors;
    }


}

// create an empty array of palletes
let palettes = [];

// create one palette
let palette1 = new Palette ("Basics", "Monochrome", "basics", ['#DDDDDD','#EEEEEE','#FFFFFF']);


// create the div that contains the palette
let outerDiv = document.createElement('div');
outerDiv.id = "set3";
document.body.appendChild(outerDiv);

// create the palette label div
let paletteLabelDiv = document.createElement('div');
paletteLabelDiv.class = "palettelabel";
paletteLabelDiv.id = "palette3";
paletteLabelDiv.style.marginLeft = "5px";
outerDiv.appendChild(paletteLabelDiv);

// create the three elements inside the palette label
let paletteName = document.createElement('div');
//paletteName.class = "palettetitle";
paletteName.style.display = "inline-block";
//paletteName.style.margin = "10px";
paletteLabelDiv.appendChild(paletteName);

let paletteNameText = document.createElement("p");
paletteNameText.innerHTML = "Basic Colors";
paletteNameText.style.textTransform = "uppercase";
paletteNameText.style.fontSize = "18px";
paletteNameText.style.marginLeft = "5px";
paletteName.appendChild(paletteNameText);


let paletteType = document.createElement("div");
//paletteType.class = "palettetype";
paletteType.style.display = "inline-block";
paletteLabelDiv.appendChild(paletteType);

let paletteTypeText = document.createElement("p");
paletteTypeText.innerHTML = "monochrome";
paletteTypeText.style.fontSize = "18px";
paletteTypeText.style.marginLeft = "5px";
paletteType.appendChild(paletteTypeText);

let paletteCollection = document.createElement("div");
//paletteCollection.class = "palettecollection";
paletteCollection.style.display = "inline-block";
paletteLabelDiv.appendChild(paletteCollection);

let paletteCollectionText = document.createElement("p");
paletteCollectionText.innerHTML = "basics";
paletteCollectionText.style.fontSize = "18px";
paletteCollectionText.style.marginLeft = "5px";
paletteCollection.appendChild(paletteCollectionText);

let colorsDiv = document.createElement("div");
colorsDiv.class = "colors";
outerDiv.appendChild(colorsDiv);

let color1 = document.createElement("div");
color1.style.position = "relative";
color1.style.display = "inline-block";
color1.style.margin = "10px";
colorsDiv.appendChild(color1);

let color1swatch = document.createElement("div");
color1swatch.style.backgroundColor = "#DDDDDD";
color1swatch.style.width = "100px";
color1swatch.style.height = "100px";
color1.appendChild(color1swatch);

let color1label = document.createElement("div");
let color1labelText = document.createElement("p");
color1labelText.innerHTML = "#DDDDDD";
color1labelText.style.margin = "5px";
color1labelText.style.textAlign = "center";
color1.appendChild(color1label);
color1label.appendChild(color1labelText);

let color2 = document.createElement("div");
color2.style.position = "relative";
color2.style.display = "inline-block";
color2.style.margin = "10px";
colorsDiv.appendChild(color2);

let color2swatch = document.createElement("div");
color2swatch.style.backgroundColor = "#EEEEEE";
color2swatch.style.width = "100px";
color2swatch.style.height = "100px";
color2.appendChild(color2swatch);

let color2label = document.createElement("div");
let color2labelText = document.createElement("p");
color2labelText.innerHTML = "#EEEEEE";
color2labelText.style.margin = "5px";
color2labelText.style.textAlign = "center";
color2.appendChild(color2label);
color2label.appendChild(color2labelText);

let color3 = document.createElement("div");
color3.style.position = "relative";
color3.style.display = "inline-block";
color3.style.margin = "10px";
colorsDiv.appendChild(color3);

let color3swatch = document.createElement("div");
color3swatch.style.backgroundColor = "#FFFFFF";
color3swatch.style.width = "100px";
color3swatch.style.height = "100px";
color3.appendChild(color3swatch);

let color3label = document.createElement("div");
let color3labelText = document.createElement("p");
color3labelText.innerHTML = "#FFFFFF";
color3labelText.style.margin = "5px";
color3labelText.style.textAlign = "center";
color3.appendChild(color3label);
color3label.appendChild(color3labelText);






