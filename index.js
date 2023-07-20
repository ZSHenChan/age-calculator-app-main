const form = document.getElementById("form");

function isValid(dateOfBirth,tday){

    if (dateOfBirth>tday){
        return false;
    }
    // else if(dateOfBirth instanceof Date == false){
    //     return false;
    // }
    return true;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const redLabels = document.querySelectorAll('.input-box label');
    const redBoxes = document.querySelectorAll('.input-box input');
    const errorMsgs = document.querySelectorAll('.input-box .error-msg');
    const button = document.querySelector("button");

    let d = new Date();
    const tday = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const dateOfBirth = year+"-"+month+"-"+day;

    if(!isValid(dateOfBirth,tday)){
        
        redLabels.forEach(redLabel => {
            redLabel.style.color = "hsl(0, 100%, 67%)";
        })
        redBoxes.forEach(redbox => {
            redbox.style.borderColor = "hsl(0, 100%, 67%)";
        })
        errorMsgs.forEach(errorMsg => {
            errorMsg.style.display = "block";
        })
        button.style.transform = "translate(-10px, 70px)";
    }

    else{
        // redLabels.forEach(redLabel => {
        //     redLabel.style.color = "black";
        // })
        // redBoxes.forEach(redbox => {
        //     redbox.style.borderColor = "black";
        // })
        // errorMsgs.forEach(errorMsg => {
        //     errorMsg.style.display = "none";
        // })
        // button.style.transform = "translate(-10px, 50px)";

        // calculate age
        const newDay = document.getElementById("new-day");
        const newMonth = document.getElementById("new-month");
        const newYear = document.getElementById("new-year");

        const ONE_DAY = 1000 * 60 * 60 * 24;
        console.log(dateOfBirth);
        date = new Date(dateOfBirth);
        const diffDays = Math.round(Math.abs((d-date) / ONE_DAY));
        const diffYear = Math.floor(diffDays/365);
        const diffMonth = Math.floor(diffDays%365/30);
        const diffDay = Math.floor(diffDays%365%30);
        

        newDay.innerHTML = diffDay;
        newMonth.innerHTML = diffMonth;
        newYear.innerHTML = diffYear;
    }
})