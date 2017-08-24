(function () {
    var nowYear = moment().format('YYYY');
    // moment().format('MMMM Do YYYY, h:mm:ss a'); // August 24th 2017, 1:47:58 pm
    var nowMonth = moment().format('MMMM');
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var text = "";

    getMonth();
    getYear();
    getDays();

    function getMonth() {
        for (i = 0; i < monthNames.length; i++) {
            text += "<option>" + monthNames[i] + "</option>";
        }
        document.getElementById("month").innerHTML = text;
    }

    function getYear() {
        var start = nowYear;
        var end = '1900';
        var options = "";
        for (var year = start; year >= end; year--) {
            options += "<option>" + year + "</option>";
        }
        document.getElementById("year").innerHTML = options;

    }

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }


    console.log(daysInMonth(10, 2013));
    var days = daysInMonth(10, 2013);

    var somex = "";

    function getDays() {
        for (i = 1; i < days; i++) {
            somex += "<option>" + days[i] + "</option>";
            // text +=  monthNames[i];
        }
        document.getElementById("day").innerHTML = somex;

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
})();


