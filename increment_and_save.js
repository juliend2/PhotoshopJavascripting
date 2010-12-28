function sfwPNG24(saveFile){
  var pngOpts = new ExportOptionsSaveForWeb; 
  pngOpts.format = SaveDocumentType.PNG
  pngOpts.PNG8 = false; 
  pngOpts.transparency = true; 
  pngOpts.interlaced = false; 
  pngOpts.quality = 100;
  activeDocument.exportDocument(new File(saveFile),ExportType.SAVEFORWEB,pngOpts); 
}

/*
Incrementing a number inside a text layer then Saving it in PNG
*/

var layer = activeDocument.layers[0];

if (layer.kind == 'LayerKind.TEXT') {
  for (var i=1; i < 51; i++) {
    layer.textItem.contents = i.toString();
    sfwPNG24( '/Applications/MAMP/htdocs/remax/images/img_ui/mapMarkers/mapMarker_'+ i +'.png');
  };
};