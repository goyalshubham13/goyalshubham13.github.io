/**
 * Created by Shubham Goyal on 23-12-2015.
 */
var app = angular.module("dayFinder", ["services"]);
app.controller("dayFinderCtrl", function($scope, Calender, Util, $timeout) {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = Calender.getMonthByIndex(today.getMonth());
    var todayYear = today.getFullYear();
    $scope.monthsName = Calender.getMonths();

    $scope.date = {
        selectedMonth : todayMonth.toString(),
        selectedDate : todayDate.toString(),
        selectedYear : todayYear.toString()
    };

    $scope.dates = Calender.getNumberOfDays($scope.date.selectedMonth, $scope.date.selectedYear);

    $scope.range = function (min, max, step) {
        return Util.range(min, max, step);
    };

    $scope.onMonthYearChange = function () {
        $scope.dates = Calender.getNumberOfDays($scope.date.selectedMonth, $scope.date.selectedYear);
        $scope.find ();
    };

    $scope.find = function () {
        $scope.foundedDay = Calender.dummy($scope.date.selectedDate, $scope.date.selectedMonth, $scope.date.selectedYear);
    };

    $scope.foundedDay = Calender.dummy($scope.date.selectedDate, $scope.date.selectedMonth, $scope.date.selectedYear);
});