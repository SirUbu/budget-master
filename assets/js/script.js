// get DOM elements
var calDatesEl = document.querySelector("#calGrid");
var cardContentEl = document.querySelector("#calBody");
var yearEl = document.querySelector("#year");
var monthEl = document.querySelector("#month");


// set global variable 
var todayDate = moment().format("MM/DD/YYYY");
//variables from set pay frequency function
var payFrequency = {};
$(document).ready(function () {
  $('.modal').modal();
  $('.datepicker').datepicker({
    container: 'body'
  })
  // {type: semi-monthly,
  //  day1: "5th",
  //  day2: "22nd"}
  // OR
  // {type: bi-weekly,
  // recent: "09/04/2020"}

    // {type: "semi-monthly",
    //  day1: "5th",
    //  day2: "22nd"}
    // OR
    // {type: "bi-weekly",
    // recent: "09/04/2020"}

  // variables from set expenses function 
});

function checkity() {
  var selectValue = $('#select').val();

  
  // if (selectValue === 'weekly') {
  //   console.log('hi im weekly')
  //   return {

  //   }
  // }
  if (selectValue === 'bi-weekly') {
    console.log('bw', {
      type: 'bi-weekly',
      recent: $('#date').val()
    });
    return {
      type: 'bi-weekly',
      recent: $('#date').val()
    }
  }
  else {
    console.log('bm', {
      type: 'bi-monthly',
      Day1: $('#month1').val(),
      Day2: $('#month2').val(),
    })
    return {
      type: 'bi-monthly',
      Day1: $('#month1').val(),
      Day2: $('#month2').val(),

    }
  }
}

function handleselectchange () {
  var selectValue = $('#select').val();
  var biweekly = $('#bi-weekly')
  var bimonthly = $('#bi-monthly')
  if (selectValue === 'bi-weekly') {
    biweekly.removeClass('hide')
    bimonthly.addClass('hide')
  }
  else if (selectValue === 'bi-monthly') {
    bimonthly.removeClass('hide')
    biweekly.addClass('hide')    
  }
}

$('#submit').on('click', checkity);
$("#select").on('change', handleselectchange)


var expenses = [
 
  // {day: "1st", expenseList: [{name: "", description: "",amount: "", status: false}]},
  { day: "1st", expenseList: [] },
  { day: "2nd", expenseList: [] },
  { day: "3rd", expenseList: [] },
  { day: "4th", expenseList: [] },
  { day: "5th", expenseList: [] },
  { day: "6th", expenseList: [] },
  { day: "7th", expenseList: [] },
  { day: "8th", expenseList: [] },
  { day: "9th", expenseList: [] },
  { day: "10th", expenseList: [] },
  { day: "11th", expenseList: [] },
  { day: "12th", expenseList: [] },
  { day: "13th", expenseList: [] },
  { day: "14th", expenseList: [] },
  { day: "15th", expenseList: [] },
  { day: "16th", expenseList: [] },
  { day: "17th", expenseList: [] },
  { day: "18th", expenseList: [] },
  { day: "19th", expenseList: [] },
  { day: "20th", expenseList: [] },
  { day: "21st", expenseList: [] },
  { day: "22nd", expenseList: [] },
  { day: "23rd", expenseList: [] },
  { day: "24th", expenseList: [] },
  { day: "25th", expenseList: [] },
  { day: "26th", expenseList: [] },
  { day: "27th", expenseList: [] },
  { day: "28th", expenseList: [] },
  { day: "29th", expenseList: [] },
  { day: "30th", expenseList: [] },
  { day: "31st", expenseList: [] },

    // {day: "1st", expenseList: [{name: "", description: "",amount: "", status: false}]},
    {day: "1st", expenseList: [], number: "1"},
    {day: "2nd", expenseList: [], number: "2"},
    {day: "3rd", expenseList: [], number: "3"},
    {day: "4th", expenseList: [], number: "4"},
    {day: "5th", expenseList: [], number: "5"},
    {day: "6th", expenseList: [], number: "6"},
    {day: "7th", expenseList: [], number: "7"},
    {day: "8th", expenseList: [], number: "8"},
    {day: "9th", expenseList: [], number: "9"},
    {day: "10th", expenseList: [], number: "10"},
    {day: "11th", expenseList: [], number: "11"},
    {day: "12th", expenseList: [], number: "12"},
    {day: "13th", expenseList: [], number: "13"},
    {day: "14th", expenseList: [], number: "14"},
    {day: "15th", expenseList: [], number: "15"},
    {day: "16th", expenseList: [], number: "16"},
    {day: "17th", expenseList: [], number: "17"},
    {day: "18th", expenseList: [], number: "18"},
    {day: "19th", expenseList: [], number: "19"},
    {day: "20th", expenseList: [], number: "20"},
    {day: "21st", expenseList: [], number: "21"},
    {day: "22nd", expenseList: [], number: "22"},
    {day: "23rd", expenseList: [], number: "23"},
    {day: "24th", expenseList: [], number: "24"},
    {day: "25th", expenseList: [], number: "25"},
    {day: "26th", expenseList: [], number: "26"},
    {day: "27th", expenseList: [], number: "27"},
    {day: "28th", expenseList: [], number: "28"},
    {day: "29th", expenseList: [], number: "29"},
    {day: "30th", expenseList: [], number: "30"},
    {day: "31st", expenseList: [], number: "31"},

];
// variable for pay period expenses
var payPeriodExpenses = [];

  // variable to store months holidays
var holidays = [];
  // variables for calculator

var calBalance = "";
var calExpenses = "";
var calPaid = "";
var calOutstanding = "";
var calRemaining = "";


// functions
    // function to fetch and display quote


    // function to set pay frequency


    // function to set expenses


    // function to fetch holidays 

    var getHolidays = function() {
      // set variables
      var apiKey = "421967198c7598b1318b049e342e0c87b3b59f3e";
      var apiYear = moment().format("YYYY");
      var apiMonth = moment().format("MM");
      // make request to url
      fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=US&year=${apiYear}&month=${apiMonth}&type=national`)
      .then(function(holidayResponse) {
        // if request was successful
        if(holidayResponse.ok) {
          holidayResponse.json().then(function(holidayData) {
          // pass json data to createCalendar function
          createCalendar(holidayData);
          });
        // if request was unsuccessful
        } else {
          // call createCalendar function without holidays
          createCalendar();
        }
      })
      // if unable to connect to calendarific, still generate calendar
      .catch(createCalendar);
    };



    // function to generate and display calendar
    var createCalendar = function (data) {
      // use holidayData to update holidays array
      holidays = [];
      var holidayArr = data.response.holidays;
      for(var h = 0; h < holidayArr.length; h++) {
        var holidayObj = {
          date: holidayArr[h].date.iso,
          name: holidayArr[h].name,
        };
        holidays.push(holidayObj);
      }
      // update month and year with current month and year
      yearEl.textContent = moment().format("YYYY");
      monthEl.textContent = moment().format("MMMM");
      // clear current content in calendar
      calDatesEl.textContent = "";
      // add weekdays to calendar
      var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for(var w = 0; w < 7; w ++) {
        var weekdayEl = document.createElement("div");
        weekdayEl.textContent = weekdays[w];
        calDatesEl.appendChild(weekdayEl);
      }
      // get the first day of the month
      var counter = parseInt(moment().format("D"));
      var firstOfMonth = moment().subtract(counter-1, 'days').format("dddd");
      // if firstOfMonth not sunday, get number of days needed to get to sunday
      var additional = counter + 0;
      if(firstOfMonth === "Saturday") {
        additional = counter - 1 + 6;
      } else if(firstOfMonth === "Friday") {
        additional = counter - 1 + 5;
      } else if(firstOfMonth === "Thursday") {
        additional = counter- 1 + 4;
      } else if(firstOfMonth === "Wednesday") {
        additional = counter - 1 + 3;
      } else if(firstOfMonth === "Tuesday") {
        additional = counter - 1 + 2;
      } else if(firstOfMonth === "Monday") {
        additional = counter - 1 + 1;
      }
      // get the day that the calendar starts on
      var loopDay = moment().subtract(additional, 'days');
      // take current month and get end of current month
      var endOfMonth = moment().add(1, 'month').subtract(counter, 'days');
      // take current day and get end of previous month
      var previousMonthEnd = moment().subtract(counter, 'days');
      // if bi-weekly payFrequency, set recentPayMoment
      if(payFrequency.type === "bi-weekly") {
        // make recent pay a moment date
        var formatDate = "MM/DD/YYYY"
        var recentPayMoment = moment(payFrequency.recent, formatDate);
        // while recentPayMoment is not in the current month, add 14 days until in current month
        while(parseInt(recentPayMoment.format("MM")) !== parseInt(moment().format("MM"))) {
          recentPayMoment.add(14, 'days');
        };
        var nextPayDate = recentPayMoment.add(14, 'days');
        recentPayMoment = moment(payFrequency.recent, formatDate);
        while(parseInt(recentPayMoment.format("MM")) !== parseInt(moment().format("MM"))) {
          recentPayMoment.add(14, 'days');
        };
        var lastPayDate = recentPayMoment.add(28, 'days');
        recentPayMoment = moment(payFrequency.recent, formatDate);
        while(parseInt(recentPayMoment.format("MM")) !== parseInt(moment().format("MM"))) {
          recentPayMoment.add(14, 'days');
        };
      }
      // iterate to create month
      for(var i = 0; i < 35; i++) {
        var dateAtt = loopDay.add(i, 'days').format("MM/DD/YYYY");
        var dateEl = document.createElement("div");
        dateEl.classList = "card";
        dateEl.setAttribute("id", "dateCard");
        dateEl.setAttribute("date", dateAtt);
        var dateHeader = document.createElement("div");
        dateHeader.classList = "card-title left-align blue-grey darken-2 white-text";
        dateHeader.textContent = loopDay.format("Do");
        dateEl.appendChild(dateHeader);
        var dateBody = document.createElement("div"); dateBody.classList = "card-body";
        // loop through holidays array and create holiday display on calendar
        for(var y = 0; y < holidays.length; y++) {
          if(loopDay.format("YYYY-MM-DD") === holidays[y].date) {
            var holidayEl = document.createElement("p");
            holidayEl.classList = "purple";
            holidayEl.textContent = holidays[y].name;
            dateBody.appendChild(holidayEl);
          }
        }
        // add pay frequency
          // if semi-monthly and day of month add
        if(payFrequency.type === "semi-monthly") {
          if(loopDay.format("Do") === payFrequency.day1 || loopDay.format("Do") === payFrequency.day2) {
            var payEl = document.createElement("p");
            payEl.classList = "green";
            payEl.textContent = "Pay Day";
            dateBody.appendChild(payEl);
          }
          // highlight if date is in pay period
          if(parseInt(loopDay.format("Do")) >= parseInt(payFrequency.day1) && parseInt(loopDay.format("Do")) < parseInt(payFrequency.day2)) {
            dateEl.classList = "card grey";
            // push expenses to payPeriodExpenses
            for(var c = 0; c < expenses.length; c ++) {
              if(expenses[c].day === loopDay.format("Do")) {
                for(var p = 0; p < expenses[c].expenseList.length; p++) {
                  payPeriodExpenses.push(expenses[c].expenseList[p]);
                }
              }
            }
          }
          // if bi-weekly and day of month add
        } else if(payFrequency.type === "bi-weekly") {
          if(loopDay.format("MM/DD") === recentPayMoment.format("MM/DD") || loopDay.format("MM/DD") === nextPayDate.format("MM/DD") || loopDay.format("MM/DD") === lastPayDate.format("MM/DD")) {
            var payEl = document.createElement("p");
            payEl.classList = "green";
            payEl.textContent = "Pay Day";
            dateBody.appendChild(payEl);
          }
          // highlight if date is in pay period
          if(parseInt(loopDay.format("Do")) >= parseInt(recentPayMoment.format("Do")) && parseInt(loopDay.format("Do")) < parseInt(nextPayDate.format("Do")) || parseInt(loopDay.format("Do")) >= parseInt(nextPayDate.format("Do")) && parseInt(loopDay.format("Do")) < parseInt(lastPayDate.format("Do")) ) {
            dateEl.classList = "card grey";
            // push expenses to payPeriodExpenses
            for(var c = 0; c < expenses.length; c ++) {
              if(expenses[c].day === loopDay.format("Do")) {
                for(var p = 0; p < expenses[c].expenseList.length; p++) {
                  payPeriodExpenses.push(expenses[c].expenseList[p]);
                }
              }
            }
          }
        }
        // add expenses based on day due
        for(var d = 0; d < expenses.length; d++) {
          if(loopDay.format("Do") === expenses[d].day) {
            for(var e = 0; e < expenses[d].expenseList.length; e++) {
              var expenseEl = document.createElement("p");
              expenseEl.textContent = expenses[d].expenseList[e].name;
              expenseEl.classList = "red";
              dateBody.appendChild(expenseEl);
            }
          }
        }
        // if due on day not in month, add to last day of month
        var endOfMonthInt = parseInt(endOfMonth.format("D"));
        var dateDiff = 31 - endOfMonthInt;
        if(endOfMonthInt < 31) {
          // use last day of month to add expenses of dates to 31st
          if(loopDay.format("MM/DD") === endOfMonth.format("MM/DD")) {
            for(var f = 0; f < expenses[endOfMonthInt - 1 + dateDiff].expenseList.length; f++) {
              var expenseEl = document.createElement("p");
              expenseEl.textContent = expenses[endOfMonthInt - 1 + dateDiff].expenseList[f].name;
              expenseEl.classList = "red";
              dateBody.appendChild(expenseEl);
            }
          }
        }
        // highlight current day of month
        if(loopDay.format("MM/DD/YYYY") === todayDate) {
          dateEl.classList = "card blue";
          dateHeader.classList = "card-title left-align orange";
        }
        dateEl.appendChild(dateBody);
        calDatesEl.appendChild(dateEl);
        // reset loopDay date
        var loopDay = moment().subtract(additional, 'days');
      }
    };

    // function to calculate and display in calculator


    // function to save localStorage


    // function to get localStorage


// call functions
    // get localStorage


  // calendar generation/display
getHolidays();
setInterval(getHolidays, ((60*1000)*60)*6);

// event listeners
