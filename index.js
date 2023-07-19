const form = document.getElementById("form");

function isValid(){

    const d = new Date();
    const tday = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const dateOfBirth = year+"-"+month+"-"+day;

    if (dateOfBirth>tday){
        return false;
    }
    else if(dateOfBirth instanceof Date == false){
        return false;
    }
    return true;

}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const redLabels = document.querySelectorAll('.input-box label');
    const redBoxes = document.querySelectorAll('.input-box input');
    const errorMsgs = document.querySelectorAll('.input-box .error-msg');
    const button = document.querySelector("button");

    if(!isValid()){
        
        redLabels.forEach(redLabel => {
            redLabel.style.color = "hsl(0, 100%, 67%)";
        })
        redBoxes.forEach(redbox => {
            redbox.style.borderColor = "hsl(0, 100%, 67%)";
        })
        errorMsgs.forEach(errorMsg => {
            errorMsg.style.display = "block";
        })
        button.style.transform = "translate(-10px, 60px)";
    }

    else{
        console.log("hello");
        redLabels.forEach(redLabel => {
            redLabel.style.color = "black";
        })
        redBoxes.forEach(redbox => {
            redbox.style.borderColor = "black";
        })
        errorMsgs.forEach(errorMsg => {
            errorMsg.style.display = "none";
        })
        button.style.transform = "translate(-10px, 50px)";
    }
})