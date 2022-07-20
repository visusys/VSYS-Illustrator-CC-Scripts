main();
function main() {

    var doc = app.activeDocument;
    var selectedSwatches = doc.swatches.getSelected();

    if(selectedSwatches.length == 0){
        alert("Error: No swatches are selected.");
        return;

    }

    var wordToRemove = prompt ('Enter the word to remove (Including Spaces).', " ","Word to Remove");
    
    if (selectedSwatches.length > 0) {
        for (i=0; i < selectedSwatches.length; i++){   
            selectedSwatches[i].name = removeWordFromString(selectedSwatches[i].name, wordToRemove);
        }
    }
    
}

function removeWordFromString(str, wordToRemove){
    return str.replace(wordToRemove, "");
}

