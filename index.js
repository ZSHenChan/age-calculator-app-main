const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dateOfBirth = day+'/'+month+'/'+year;
const currentDate = Date.now();

function checkValidity{
    if (year>currentDate){
        return false;
    }
    return true;
}

function dateReturn(){
    if(!checkValidity){
        const redLabels = document.querySelector('.input-box label')
    }
}