var today = new Date();
var curDay = Number(today.getDate());
var curMonth = Number(today.getMonth());
var curYear = Number(today.getFullYear());
today.setDate(1);

//Current Month and Year
var monthName = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.querySelector(".monthName").innerHTML = monthName[curMonth] + " " + curYear;

const lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0).getDate();
console.log(lastDay);

//last date of the previous month
  const prevLastDay = new Date( today.getFullYear(),today.getMonth(),0).getDate();
  console.log(prevLastDay)

//first day of the current month
  const firstDayIndex = today.getDay();
console.log(firstDayIndex);
  
//last day of the week
  const lastDayIndex = new Date(today.getFullYear(),today.getMonth() + 1,0).getDay();
console.log(lastDayIndex);

//Current Day
function currentDay() {
  var Today = curDay + firstDayIndex;
  for (let i = 0; i < 43; i++) {
      if (Today == i) {
          document.querySelector(".c" + i).style.backgroundColor = "blue";
      }
  }
  }
  currentDay();

for (let t = 0; t < firstDayIndex; t++) {
    document.querySelector (".c" + t)
}

for (let l = lastDayIndex; l < 43; l++) { 
    var k = l - lastDayIndex + 1;
    document.querySelector(".c" + l).innerHTML = k;
    if (k > lastDay) {
        var p = k - 30
        document.querySelector(".c" + l).innerHTML = p;
    }
}

for (let m = lastDay + lastDayIndex; m < 43; m++) {
    document.querySelector(".c" + m).style.color = "grey"
}

for (let h = firstDayIndex; h > 0; h--) {
  var r = h + 26;
  console.log(h);
    document.querySelector(".c" + h).innerHTML = r;
    document.querySelector(".c" + h).style.color = "grey"
}