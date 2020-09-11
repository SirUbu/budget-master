// get DOM elements
var calDatesEl = document.querySelector("#calGrid");
var cardContentEl = document.querySelector("#calBody");
var yearEl = document.querySelector("#year");
var monthEl = document.querySelector("#month");


// set global variable 
var todayDate = moment().format("MM/DD/YYYY");
  //variables from set pay frequency function
var payFrequency = {type: "bi-weekly", recent: "09/04/2020"};
    // {type: "semi-monthly",
    //  day1: "5th",
    //  day2: "22nd"}
    // OR
    // {type: "bi-weekly",
    // recent: "09/04/2020"}
  // variables from set expenses function 
var expenses = [
    // {day: "1st", expenseList: [{name: "", description: "",amount: "", status: false}]},
    {day: "1st", expenseList: [], number: "1"},
    {day: "2nd", expenseList: [], number: "2"},
    {day: "3rd", expenseList: [], number: "3"},
    {day: "4th", expenseList: [], number: "4"},
    {day: "5th", expenseList: [{name: "Verizon", description: "Phone Bill", amount: "$80", status: false}], number: "5"},
    {day: "6th", expenseList: [], number: "6"},
    {day: "7th", expenseList: [], number: "7"},
    {day: "8th", expenseList: [], number: "8"},
    {day: "9th", expenseList: [{name: "Wells Fargo", description: "Credit Card", amount: "$25", status: false},{name: "Rent", description: "Rent", amount: "$500", status: false}], number: "9"},
    {day: "10th", expenseList: [], number: "10"},
    {day: "11th", expenseList: [], number: "11"},
    {day: "12th", expenseList: [], number: "12"},
    {day: "13th", expenseList: [], number: "13"},
    {day: "14th", expenseList: [], number: "14"},
    {day: "15th", expenseList: [], number: "15"},
    {day: "16th", expenseList: [], number: "16"},
    {day: "17th", expenseList: [], number: "17"},
    {day: "18th", expenseList: [], number: "18"},
    {day: "19th", expenseList: [{name: "Car Loan", description: "Mountain America", amount: "$250", status: false},], number: "19"},
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
    {day: "31st", expenseList: [{name: "Utilities", description: "Power", amount: "$100", status: false}], number: "31"},
];
  // variable for pay period expenses
var payPeriodExpenses = [];
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
    

    // function to generate and display calendar
    var createCalendar = function () {
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
      var firstSunday = moment().subtract(additional, 'days');
      // take current month and get end of current month
      var endOfMonth = moment().add(1, 'month').subtract(counter, 'days');
      // take current day and get end of previous month
      var previousMonthEnd = moment().subtract(counter, 'days');
      // iterate to create month
      for(var i = 0; i < 35; i++) {
        var dateAtt = firstSunday.add(i, 'days').format("MM/DD/YYYY");
        var dateEl = document.createElement("div");
        dateEl.classList = "card";
        dateEl.setAttribute("id", "dateCard");
        dateEl.setAttribute("date", dateAtt);
        var dateHeader = document.createElement("div");
        dateHeader.classList = "card-title left-align grey";
        dateHeader.textContent = firstSunday.format("Do");
        dateEl.appendChild(dateHeader);
        var dateBody = document.createElement("div"); dateBody.classList = "card-body";
        // add pay frequency
          // if semi-monthly and day of month add
          // if bi-weekly and date id = recent add
            // add 14 to recent date for that month
        // add expenses based on day due
        for(var d = 0; d < expenses.length; d++) {
          if(firstSunday.format("Do") === expenses[d].day) {
            for(var e = 0; e < expenses[d].expenseList.length; e++) {
            var expenseEl = document.createElement("p");
            expenseEl.textContent = expenses[d].expenseList[e].name;
            expenseEl.classList = "red";
            dateBody.appendChild(expenseEl);
            }
          }
        }
          // if due on day not in month, add to last day of month
        dateEl.appendChild(dateBody);
        calDatesEl.appendChild(dateEl);
        // reset firstSunday date
        var firstSunday = moment().subtract(additional, 'days');
      }
      // update month and year with current month and year
      yearEl.textContent = moment().format("YYYY");
      monthEl.textContent = moment().format("MMMM");
      //     // add pay days to card-body
      //   if(payFrequency.type === "semi-monthly") {
      //     if(expenses[i].day === payFrequency.day1 || expenses[i].day === payFrequency.day2) {
      //       var payEl = document.createElement("p");
      //       payEl.classList = "green";
      //       payEl.textContent = "Pay Day";
      //       dateBody.appendChild(payEl);
      //     }
      //   } else if(payFrequency.type === "bi-weekly") {
      //     var nextPay = payFrequency.recent
      //     if(expenses[i].day === payFrequency.recent) {
      //       var payEl = document.createElement("p");
      //       payEl.classList = "green";
      //       payEl.textContent = "Pay Day";
      //       dateBody.appendChild(payEl);
      //     }
      //   }
      //   dateEl.appendChild(dateBody);
      //   calDatesEl.appendChild(dateEl);
      // }
    };

    // function to calculate and display in calculator


    // function to save localStorage


    // function to get localStorage


// call functions
    // get localStorage


  // calendar generation/display
createCalendar();


// event listeners
