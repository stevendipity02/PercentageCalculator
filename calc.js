//Grabbing eleent from the html file
var numfield1 = document.getElementById("numfield1");
var numfield2 = document.getElementById("numfield2");
var resultField = document.getElementById("resultField");

var form = document.getElementById("xIsWhatPercentOfY");

//event when 

form.addEventListener('submit', function(event) {


            //IF NULL ON EITHER 
    if(!numfield1.value || !numfield2.value)
    {

        alert("Please enter two numerical values");

    }
            //IF USER INPUT LETTERS
    else if(isNaN(numfield1.value || numfield2.value))
    {
        alert("Please input numbers only");

    }
    else{

    //numfieldvalue that are numbers without the parsefloat are strings
    var x = parseFloat(numfield1.value);
    var y = parseFloat(numfield2.value);

        var result = x / y;
        var percent = result * 100;

        //innerText pag outside ng form
        resultField.innerText = "Result: " + percent + "%";
        
        //To stop the default submission mode of form
        event.preventDefault();


    }
    
});