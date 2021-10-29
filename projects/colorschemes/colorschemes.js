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
outerDiv.appendChild(paletteLabelDiv);

// create the three elements inside the palette label
let paletteName = document.createElement('div');
paletteName.class = "palettetitle";
paletteLabelDiv.appendChild(paletteName);

let paletteNameText = document.createElement("p");
paletteNameText.innerHTML = "Basic Colors";
paletteName.appendChild(paletteNameText);


let paletteType = document.createElement("div");
paletteType.class = "palettetype";
paletteLabelDiv.appendChild(paletteType);

paletteTypeText = document.createElement("p");
paletteTypeText.innerHTML = "Monochrome";
paletteType.appendChild(paletteTypeText);

let paletteCollection = document.createElement("div");



