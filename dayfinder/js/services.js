/**
 * Created by Shubham Goyal on 23-12-2015.
 */
angular.module("services", [])
    .factory("Util", function () {
        return {
            isLeapYear : function (year) {
                if (year % 4 == 0) {
                    if (year % 100 == 0) {
                        if (year % 400 == 0) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                }
                return false;
            },
            range : function(min, max, step) {
                step = step || 1;
                var input = [];
                for (var i = min; i <= max; i += step) {
                    input.push(i);
                }
                return input;
            }
        }
    })
    .factory("Calender", function (Util) {
    var months = {
        "Jan": 31,
        "Feb": 28,
        "Mar": 31,
        "Apr": 30,
        "May": 31,
        "Jun": 30,
        "Jul": 31,
        "Aug": 31,
        "Sep": 30,
        "Oct": 31,
        "Nov": 30,
        "Dec": 31
    };
    var monthNo = {
        "Jan": 3,
        "Feb": 0,
        "Mar": 3,
        "Apr": 2,
        "May": 3,
        "Jun": 2,
        "Jul": 3,
        "Aug": 3,
        "Sep": 2,
        "Oct": 3,
        "Nov": 2,
        "Dec": 3
    };
    var days = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"
    };
    return {
        getNumberOfDays : function (month, year) {
            if (Util.isLeapYear(year) && month == 'Feb')
                return months[month] + 1;
            return months[month];
        },
        getMonths : function () {
            var monthsName = [];
            angular.forEach(months, function(value, key) {
                monthsName.push (key);
            });
            return monthsName;
        },
        getMonthByIndex : function (index) {
            return Object.keys(months)[index];
        },
        dummy : function (d, month, y) {
            var m = Object.keys(months).indexOf(month);
            var yearBase;

            if (y < 2000)
                yearBase = 1900;
            else
                yearBase = 2000;

            var yearNo;
            if (y < 2000)
                yearNo  = 1;
            else
                yearNo = 0;
            var yearOffset = (Math.floor(((y-1) - yearBase)/4) + ((y-1) - yearBase))%7;

            var sum = 0;
            for (var i = 0; i < m; i++) {

                if (Util.isLeapYear(y) && i == 1) {
                    sum += parseInt(monthNo[Object.keys(monthNo)[i]]) + 1;
                }
                else {
                    sum += parseInt(monthNo[Object.keys(monthNo)[i]]);
                }
            }
            sum += parseInt(d);
            var total = yearNo + yearOffset + sum;
            return days[total%7];
        }
    }
});