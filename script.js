var nowYear = moment().format('YYYY');
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var selectedYear = "";
var month = "";
var selectedMonth = "";

getMonth();
getYear();
GetDay();

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
    console.log(selectedYear);
    selectedMonth = document.getElementById("month").value;
    console.log(selectedMonth);
    var days = daysInMonth(selectedMonth, selectedYear);
    console.log(days);
    var foo = new Array(days);//create a day element array
    console.log(foo);
    var somex = "";

    for (var i = 0; i < foo.length; i++) {
        // console.log( (i+1) );
        somex += "<option>" + (i + 1) + "</option>";
        document.getElementById("day").innerHTML = somex;
    }
}


// to get my date

// var selectedYear = document.getElementById("year").value;
// var selectedMonth = document.getElementById("month").value;
// console.log(getDaysInMonth(4, 2012));

// var a = moment('2013-01-01');
// var b = moment('2013-06-01');

// // If you want an exclusive end date (half-open interval)
//     for (var m = moment(a); m.isBefore(b); m.add(1, 'days')) {
//         console.log(m.format('YYYY-MM-DD'));
//     }
//
// // If you want an inclusive end date (fully-closed interval)
//     for (var m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
//         console.log(m.format('YYYY-MM-DD'));
//     }

//
// // moment().format('MMMM Do YYYY, h:mm:ss a'); // August 24th 2017, 1:47:58 pm
// var nowMonth = moment().format('MMMM');