var buttons;
var switchDisplay = false;

function create(text) {
    buttons = document.createElement("BUTTON");
    buttons.innerHTML = text;
    buttons.className = "calcNumbers";
    document.getElementById("grid").appendChild(buttons); 
    buttons.onclick = function clickedButton(){
        var Display1 = document.getElementById("display1").innerHTML;
        var Display2 = document.getElementById("display2").innerHTML;
        var DisplayAction = document.getElementById("displayAction").innerHTML;
        console.log(text);
        if(text == "="){
            if (DisplayAction == "+"){
                document.getElementById("displayResult").innerHTML = Display1 + DisplayAction + Display2 + " = " + (parseInt(Display1) + parseInt(Display2));  
            }
            else if (DisplayAction == "-"){
                document.getElementById("displayResult").innerHTML = Display1 + DisplayAction + Display2 + " = " + (parseInt(Display1) - parseInt(Display2));  
            }
            else if (DisplayAction == "*"){
                document.getElementById("displayResult").innerHTML = Display1 + DisplayAction + Display2 + " = " + (parseInt(Display1) * parseInt(Display2));  
            }
            else if (DisplayAction == "/"){
                document.getElementById("displayResult").innerHTML = Display1 + DisplayAction + Display2 + " = " + (parseInt(Display1) / parseInt(Display2));  
            }
            switchDisplay = false;
            document.getElementById("display1").innerHTML = ""; 
            document.getElementById("display2").innerHTML = ""; 
            document.getElementById("displayAction").innerHTML = ""; 

        }
        else if(switchDisplay == false){
            if(text <= 9){
                document.getElementById("display1").innerHTML = Display1 + text;
            }
            else{
                document.getElementById("displayAction").innerHTML = text;
                switchDisplay = true;
            }
        }
        else{
            document.getElementById("display2").innerHTML = Display2 + text;
        }
    };
};

function createButtons(){
    for(i = 0; i <= 9; i++){
        create(i);
    }
    var actions = ["+", "-", "*", "/", "="]
    actions.forEach(element => create(element));
};



