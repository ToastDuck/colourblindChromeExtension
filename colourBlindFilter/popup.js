if(document.querySelector(".popup"))
{
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");
    
    let buttonOn = false;

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
                circle.style.animation = "moveCircleRight 1s forwards";
                button.style.animation = "backgroundYellow 1s forwards";
                chrome.tabs.executeScript({
                    file: "protanopiaOn.js"
                })
        
            }
            else {
                buttonOn = false;
                circle.style.animation = "moveCircleLeft 1s forwards";
                button.style.animation = "backgroundBlue 1s forwards";
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
                // circle.style.animation = "moveCircleRight 1s forwards";
                // button.style.animation = "backgroundYellow 1s forwards";
                chrome.tabs.executeScript({
                    file: "deutanopiaOn.js"
                })
        
            }
            else {
                buttonOn = false;
                // circle.style.animation = "moveCircleLeft 1s forwards";
                // button.style.animation = "backgroundBlue 1s forwards";
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
                // circle.style.animation = "moveCircleRight 1s forwards";
                // button.style.animation = "backgroundYellow 1s forwards";
                chrome.tabs.executeScript({
                    file: "tritanopiaOn.js"
                })
        
            }
            else {
                buttonOn = false;
                // circle.style.animation = "moveCircleLeft 1s forwards";
                // button.style.animation = "backgroundBlue 1s forwards";
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
