main();
function main() {

    var doc = app.activeDocument;
    var selectedSwatches = doc.swatches.getSelected();

    if(selectedSwatches.length == 0){
        alert("Error: No swatches are selected.");
        return;
    }

    var swatchBasename = prompt ('Enter the base name for the selected swatches (with spaces)', " ","Enter Base");
    if (swatchBasename) {
        if (selectedSwatches.length > 0) {
            for (i=0; i < selectedSwatches.length; i++){  
                selectedSwatches[i].name = swatchBasename + (i+1)
            }
        }
    }else{
        alert("Error: No base name was supplied.");
        return;
    }
}