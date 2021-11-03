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
let grayPalette = new Palette ("Grays", "monochrome", "basics", ['#111111', '#222222', '#333333', '#444444', '#555555','#666666', '#AAAAAA', '#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE', '#FFFFFF']);
palettes.push(grayPalette);

let swPalette = new Palette ("Southwest Airlines", "triadic", "brands", ['#141C6D','#FDB31F','#B60017']);
palettes.push(swPalette);

function renderPalette(palette) {

    let line = document.createElement("hr");
    line.style.border = "border: 1px dotted #e0c1c7";
    line.style.margin = "10px";
    document.body.appendChild(line);

    // create the div that contains the palette
    let outerDiv = document.createElement('div');
    document.body.appendChild(outerDiv);

    let paletteLabelDiv = document.createElement('div');
    paletteLabelDiv.style.marginLeft = "5px";
    outerDiv.appendChild(paletteLabelDiv);  

    let paletteName = document.createElement('div');
    paletteName.style.display = "inline-block";
    paletteLabelDiv.appendChild(paletteName);

    let paletteNameText = document.createElement("p");
    paletteNameText.innerHTML = palette.name;
    paletteNameText.style.textTransform = "uppercase";
    paletteNameText.style.fontSize = "18px";
    paletteNameText.style.marginLeft = "5px";
    paletteName.appendChild(paletteNameText);

    let paletteType = document.createElement("div");
    paletteType.style.display = "inline-block";
    paletteLabelDiv.appendChild(paletteType);  
    
    let paletteTypeText = document.createElement("p");
    paletteTypeText.innerHTML = palette.type;
    paletteTypeText.style.fontSize = "18px";
    paletteTypeText.style.marginLeft = "5px";
    paletteType.appendChild(paletteTypeText);

    let paletteCollection = document.createElement("div");
    paletteCollection.style.display = "inline-block";
    paletteLabelDiv.appendChild(paletteCollection);

    let paletteCollectionText = document.createElement("p");
    paletteCollectionText.innerHTML = palette.category;
    paletteCollectionText.style.fontSize = "18px";
    paletteCollectionText.style.marginLeft = "5px";
    paletteCollectionText.style.textDecoration = "italic";
    paletteCollection.appendChild(paletteCollectionText);
    
    let colorsDiv = document.createElement("div");
    //colorsDiv.style.overflow = "hidden";
    outerDiv.appendChild(colorsDiv);

    for (let paletteColor in palette.colors){

        let color = document.createElement("div");
        color.style.position = "relative";
        color.style.display = "inline-block";
        color.style.margin = "10px";
        colorsDiv.appendChild(color);

        let colorSwatch = document.createElement("div");
        colorSwatch.style.backgroundColor = palette.colors[paletteColor];
        colorSwatch.style.width = "100px";
        colorSwatch.style.height = "100px";
        color.appendChild(colorSwatch);

        let colorLabel = document.createElement("div");
        let colorLabelText = document.createElement("p");
        colorLabelText.innerHTML = palette.colors[paletteColor];
        colorLabelText.style.margin = "5px";
        colorLabelText.style.textAlign = "center";
        color.appendChild(colorLabel);
        colorLabel.appendChild(colorLabelText);
    }
}

for (let palette in palettes){
    renderPalette(palettes[palette]);
}