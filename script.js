var nowYear = moment().format('YYYY');
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var selectedYear = "";
var month = "";
var selectedMonth = "";

getMonth();
getYear();

function getMonth() {
    for (i = 0; i < monthNames.length; i++) {
        month += "<option value=" + [i + 1] + ">" + monthNames[i] + "</option>";
        // console.log(selectedMonth);
    }
    document.getElementById("month").innerHTML = month;
}

function getYear() {
    var start = nowYear;
    var end = '1900';
    var myYear = "";
    for (var year = start; year >= end; year--) {
        myYear += "<option value=" + year + ">" + year + "</option>";
    }
    document.getElementById("year").innerHTML = myYear;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function GetDay() {
    selectedYear = document.getElementById("year").value;
    selectedMonth = document.getElementById("month").value;
    var days = daysInMonth(selectedMonth, selectedYear);
    var foo = new Array(days);//create a day element array
    var somex = "";
    for (var i = 0; i < foo.length; i++) {
        // console.log( (i+1) );
        somex += "<option>" + (i + 1) + "</option>";
        document.getElementById("day").innerHTML = somex;
    }
}
