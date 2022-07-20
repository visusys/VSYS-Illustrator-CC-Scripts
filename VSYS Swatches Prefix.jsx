main();
function main() {

    var doc = app.activeDocument;
    var selectedSwatches = doc.swatches.getSelected();

    if(selectedSwatches.length == 0){
        alert("Error: No swatches are selected.");
        return;
    }

    var swatchPrefix = prompt ('Enter the preix for selected swatches (with spaces)', " ","Enter Prefix");
    if (swatchPrefix) {
        if (selectedSwatches.length > 0) {
            for (i=0; i < selectedSwatches.length; i++){   
                selectedSwatches[i].name = swatchPrefix + selectedSwatches[i].name;
            }
        }
    }else{
        alert("Error: No prefix was supplied.");
        return;
    }
}

