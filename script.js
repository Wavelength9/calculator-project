var numberButtons = document.querySelectorAll("[data-num]");
var operationButtons = document.querySelectorAll("[data-op]");
var equalsButton = document.querySelector("[data-eq]");
var cButton = document.querySelector("[data-c]");
var acButton = document.querySelector("[data-ac]");
var prevopTextElement = document.querySelector("[data-prevop]");
var curopTextElement = document.querySelector("[data-curop]");

var answer = undefined;

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (curopTextElement.innerHTML == "0") {
            curopTextElement.innerHTML = this.innerHTML;
        }
        else if (curopTextElement.innerHTML != "0") {
            curopTextElement.innerHTML += this.innerHTML;
        }
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", function() {
        switch(this.innerHTML) {
            case "+":
                prevopTextElement.innerHTML = curopTextElement.innerHTML + " +";
                curopTextElement.innerHTML = "0";
                operationstatus = "+"
                break;
            case "-":
                prevopTextElement.innerHTML = curopTextElement.innerHTML + " -";
                curopTextElement.innerHTML = "0";
                operationstatus = "-"
                break;
            case "*":
                prevopTextElement.innerHTML = curopTextElement.innerHTML + " *";
                curopTextElement.innerHTML = "0";
                operationstatus = "*"
                break;
            case "/":
                prevopTextElement.innerHTML = curopTextElement.innerHTML + " /";
                curopTextElement.innerHTML = "0";
                operationstatus = "/"
                break;
            default:
                break;
        }
    })
})


acButton.addEventListener("click", function() {
    curopTextElement.innerHTML = "0";
    prevopTextElement.innerHTML = "0";
})

cButton.addEventListener("click", function() {
    var newcurop = curopTextElement.innerHTML.slice(0, -1);
    curopTextElement.innerHTML = newcurop;
})

equalsButton.addEventListener("click", function() {
    if (prevopTextElement.innerHTML == "0" && curopTextElement.innerHTML == "0") {
        alert("Need 2 numbers");
        } 
    else {
        if (prevopTextElement.innerHTML.includes("+")) {
            var newp = prevopTextElement.innerHTML.replace(" +", "");
            prevopTextElement.innerHTML = newp;
            var answer = parseInt(prevopTextElement.innerHTML) + parseInt(curopTextElement.innerHTML);
            prevopTextElement.innerHTML = answer;
            curopTextElement.innerHTML = "0";
            
        }
        else if (prevopTextElement.innerHTML.includes("-")) {
            var newp = prevopTextElement.innerHTML.replace(" -", "");
            prevopTextElement.innerHTML = newp;
            var answer = parseInt(prevopTextElement.innerHTML) - parseInt(curopTextElement.innerHTML);
            prevopTextElement.innerHTML = answer;
            curopTextElement.innerHTML = "0";
        }
        else if (prevopTextElement.innerHTML.includes("*")) {
            var newp = prevopTextElement.innerHTML.replace(" *", "");
            prevopTextElement.innerHTML = newp;
            var answer = parseInt(prevopTextElement.innerHTML) * parseInt(curopTextElement.innerHTML);
            prevopTextElement.innerHTML = answer;
            curopTextElement.innerHTML = "0";
        }
        else if (prevopTextElement.innerHTML.includes("/")) {
            var newp = prevopTextElement.innerHTML.replace(" /", "");
            prevopTextElement.innerHTML = newp;
            var answer = parseInt(prevopTextElement.innerHTML) / parseInt(curopTextElement.innerHTML);
            prevopTextElement.innerHTML = answer;
            curopTextElement.innerHTML = "0";
        }
        else {
            
        }
    }
})

