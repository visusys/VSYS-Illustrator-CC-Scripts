main();
function main() {

    var doc = app.activeDocument;
    var selectedSwatches = doc.swatches.getSelected();

    if(selectedSwatches.length == 0){
        alert("Error: No swatches are selected.");
        return;
    }

    var newName = prompt ('Enter the base name for the selected swatches (with spaces)', " ","Enter Base");
    if (newName) {
        if (selectedSwatches.length > 0) {
            for (i=0; i < selectedSwatches.length; i++){ 
                selectedSwatches[i].name = addZerofilledIndexToString(newName, i + 1);
            }
        }
    }else{
        alert("Error: No base name was supplied.");
        return;
    }
}

function addZerofilledIndexToString(str, index){
    var zerofilled = ('00'+index).slice(-2);
    return str + zerofilled;
}

