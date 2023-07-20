const d = new Date();
const tday = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
const day = "29";
const month = "07";
const year = "2025";
const date = year+"-"+month+"-"+day;
const ONE_DAY = 1000 * 60 * 60 * 24;

const sample = new Date(date);
console.log(sample);
const diffDays = Math.round(Math.abs((sample-d) / ONE_DAY));
const diffYear = Math.floor(diffDays/365);
const diffMonth = Math.floor(diffDays%365/30);
const diffDay = Math.floor(diffDays%365%30);
console.log(diffDays);




