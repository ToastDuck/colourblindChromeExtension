if(document.querySelector(".popup"))
{
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");
    
    let buttonOn = false;

    $('div.button').on('click', function(){
        // alert($(this).attr("id"));
        var buttonId = $(this).attr("id");
        // alert(buttonId);

        if (buttonId == "button1") {
            // button.addEventListener("click", ()=> {
            if(!buttonOn){
                buttonOn = true;
                circle.style.animation = "moveCircleRight 1s forwards";
                button.style.animation = "backgroundYellow 1s forwards";
                chrome.tabs.executeScript({
                    file: "appOn.js"
                })
        
            }
            else {
                buttonOn = false;
                circle.style.animation = "moveCircleLeft 1s forwards";
                button.style.animation = "backgroundBlue 1s forwards";
                chrome.tabs.executeScript({
                    file: "appOff.js"
                })
            }
            // }) 
        } else {
            alert("aaaa");
        }
    });

    // if (buttonId == "button1") {
    //     alert("button 1");
    // } else {
    //     alert("AAAAAA");
    // }


    



    
    
}
