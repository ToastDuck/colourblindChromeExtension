if(document.querySelector(".popup"))
{
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");
    
    let buttonOn = false;

    // button animation
    var button1 = document.querySelector("#button1"),
        button2 = document.querySelector("#button2"),
        button3 = document.querySelector("#button3");

function changeColor() {
  this.style.color = '#49A4FF';
  return false;
}

button1.addEventListener("click", changeColor, false);
button2.addEventListener("click", changeColor, false);
button3.addEventListener("click", changeColor, false);

    $('div.button').on('click', function(){
        // alert($(this).attr("id"));
        var buttonId = $(this).attr("id");
        // alert(buttonId);

        // Protanopia
        // Red colorblindness
        if (buttonId == "button1") {
            // button.addEventListener("click", ()=> {
            if(!buttonOn){
                buttonOn = true;
                chrome.tabs.executeScript({
                    file: "protanopiaOn.js"
                })
        
            }
            else {
                buttonOn = false;
                chrome.tabs.executeScript({
                    file: "protanopiaOff.js"
                })
            }
        }
            // }) 
        // Deutanopia
        // Red-green color blindness
        if (buttonId == "button2") {
            if(!buttonOn){
                buttonOn = true;
                
                chrome.tabs.executeScript({
                    file: "deutanopiaOn.js"
                })
        
            }
            else {
                buttonOn = false;
                
                chrome.tabs.executeScript({
                    file: "deutanopiaOff.js"
                })
            }
        }
        // Tritanopia
        // Blue-Yellow color blindness
        if (buttonId == "button3") {
            if(!buttonOn){
                buttonOn = true;
                
                chrome.tabs.executeScript({
                    file: "tritanopiaOn.js"
                })
        
            }
            else {
                buttonOn = false;
                
                chrome.tabs.executeScript({
                    file: "tritanopiaOff.js"
                })
            }
        }
    });

    // if (buttonId == "button1") {
    //     alert("button 1");
    // } else {
    //     alert("AAAAAA");
    // }


    



    
    
}
