const d = new Date();
const tday = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
const day = "26";
const month = "04";
const year = "2040";
const date = year+"-"+month+"-"+day;
console.log(tday);
console.log(date);
console.log(date>tday);