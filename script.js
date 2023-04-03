let string = "";
let buttons  = document.querySelectorAll(".button");

// An array is made of all button as element.
// Now for each button or element we have an eventListener.
Array.from(buttons).forEach((element)=>{
    element.addEventListener("click", (e)=>{

        if (e.target.innerHTML == "CLEAR"){
            string = "";
            document.querySelector("input").value = "";
        }

        // For multiplication button since we have button of X and not of *
        else if(e.target.innerHTML == "X"){
            string += " * ";
            document.querySelector("input").value =string; 
        }

        // when button clicked is not equal to and multiplication
        else if(e.target.innerHTML != "=" && e.target.innerHTML != "X"){

            // If button click is not = * but + - / then add space.
            if(e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "/"){
                string = string + " " + e.target.innerHTML + " ";
                document.querySelector("input").value = string;
            }

            // agar button click is not = * + - /
            else{
                string = string + e.target.innerHTML;
                document.querySelector("input").value = string;  
            }
        }

        // if button clicked is = then just evaluate the result.
        else if (e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string; 
        }
    })
})
