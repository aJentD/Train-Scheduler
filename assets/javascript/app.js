//Vars and arrays
//=========================================



//Functions
//===========================================
//do the following on click of submit button:
//add train name to current train table
//add destination to current train table
//add frequency to current train table

function addTrain(){
    console.log("tree");
    var name = $('#train-name').val().trim();
    var destination = $('#destination').val().trim();
    var frequency = $('#frequency').val().trim();
    var addRow = "<tr><td>"
        + name + "</td><td>"+ destination + "</td><td>"+ frequency + "</td><td>"
        +nextArrival+ "</td><td></td><td><input type='checkbox' name='record'</td>"
    $("#current-list tr:last").after(addRow);
    console.log("tree");
}

function tripLength(){

}

//use first train time to calculate next arrivals...add to current train table
function minAway(){
    var firstTime = $('#first-time').val().trim();
}

// show real time mins to next arrival 
function nextArrival(){

}

//send info to firebase database
function fireBase(){
    
}





//Calls
//=============================================

$(document).on('click', '.submit-button', function(e){
    e.preventDefault();
    addTrain();
    
})