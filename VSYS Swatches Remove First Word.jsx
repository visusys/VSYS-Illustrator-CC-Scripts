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
            selectedSwatches[i].name = removeFirstWordFromString(selectedSwatches[i].name);
        }
    }
    
}

function removeFirstWordFromString(str){
    const indexOfSpace = str.indexOf(' ');
    return str.substring(indexOfSpace + 1);
}

