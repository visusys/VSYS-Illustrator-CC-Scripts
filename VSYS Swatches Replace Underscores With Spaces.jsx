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
            selectedSwatches[i].name = replaceUnderscores(selectedSwatches[i].name);
        }
    }
}

function replaceUnderscores(str){
    const newName = str.replace(/_/g, ' ');
    return newName;
}

