main();
function main() {

    var doc = app.activeDocument;
    var selectedSwatches = doc.swatches.getSelected();

    if(selectedSwatches.length == 0){
        alert("Error: No swatches are selected.");
        return;
    }

    if (selectedSwatches.length > 0) {
        for (i=0; i < selectedSwatches.length; i++){   
            selectedSwatches[i].name = removeLastWordFromString(selectedSwatches[i].name);
        }
    }
}

function removeLastWordFromString(str){
    const lastIndexOfSpace = str.lastIndexOf(' ');
    if (lastIndexOfSpace === -1) {
        return str;
    }
    return str.substring(0, lastIndexOfSpace);
}

