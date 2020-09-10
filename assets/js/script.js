// get DOM elements
var calDatesEl = document.querySelector("#calGrid");
var cardContentEl = document.querySelector("#calBody");
var yearEl = document.querySelector("#year");
var monthEl = document.querySelector("#month");


// set global variable 
var todayDate = moment().format("MM/DD/YYYY");
  //variables from set pay frequency function
var payFrequency = {};
    // {type: "semi-monthly",
    //  day1: "5th",
    //  day2: "22nd"}
    // OR
    // {type: "bi-weekly",
    // recent: "09/04/2020"}
  // variables from set expenses function 
var expenses = [
    // {day: "1st", expenseList: [{name: "", description: "",amount: "", status: false}]},
    {day: "1st", expenseList: []},
    {day: "2nd", expenseList: []},
    {day: "3rd", expenseList: []},
    {day: "4th", expenseList: []},
    {day: "5th", expenseList: [{name: "Verizon", description: "Phone Bill", amount: "$80", status: false}]},
    {day: "6th", expenseList: []},
    {day: "7th", expenseList: []},
    {day: "8th", expenseList: []},
    {day: "9th", expenseList: [{name: "Wells Fargo", description: "Credit Card", amount: "$25", status: false},{name: "Rent", description: "Rent", amount: "$500", status: false}]},
    {day: "10th", expenseList: []},
    {day: "11th", expenseList: []},
    {day: "12th", expenseList: []},
    {day: "13th", expenseList: []},
    {day: "14th", expenseList: []},
    {day: "15th", expenseList: []},
    {day: "16th", expenseList: []},
    {day: "17th", expenseList: []},
    {day: "18th", expenseList: []},
    {day: "19th", expenseList: [{name: "Car Loan", description: "Mountain America", amount: "$250", status: false},]},
    {day: "20th", expenseList: []},
    {day: "21st", expenseList: []},
    {day: "22nd", expenseList: []},
    {day: "23rd", expenseList: []},
    {day: "24th", expenseList: []},
    {day: "25th", expenseList: []},
    {day: "26th", expenseList: []},
    {day: "27th", expenseList: []},
    {day: "28th", expenseList: []},
    {day: "29th", expenseList: []},
    {day: "30th", expenseList: []},
    {day: "31st", expenseList: []},
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
      // update month and year with current month and year
      yearEl.textContent = moment().format("YYYY");
      monthEl.textContent = moment().format("MMMM");
      for(var i = 0; i < expenses.length; i++) {
        // create card for date and content
        var dateEl = document.createElement("div");
        dateEl.classList = "card";
        // create and add date as card header
        var dateHeader = document.createElement("div");
        dateHeader.classList = "card-title left-align grey";
        dateHeader.textContent = expenses[i].day;
        dateEl.appendChild(dateHeader);
        // create and add card body
        var dateBody = document.createElement("div");
        dateBody.classList = "card-body";
          // add pay days to card-body
        if(payFrequency.type === "semi-monthly") {
          if(expenses[i].day === payFrequency.day1 || expenses[i].day === payFrequency.day2) {
            var payEl = document.createElement("p");
            payEl.classList = "green";
            payEl.textContent = "Pay Day";
            dateBody.appendChild(payEl);
          }
        } else if(payFrequency.type === "bi-weekly") {
          var nextPay = payFrequency.recent
          if(expenses[i].day === payFrequency.recent) {
            var payEl = document.createElement("p");
            payEl.classList = "green";
            payEl.textContent = "Pay Day";
            dateBody.appendChild(payEl);
          }
        }
          // add expenses to card-body
        for(var e = 0; e < expenses[i].expenseList.length; e++) {
          var expenseEl = document.createElement("p");
          expenseEl.textContent = expenses[i].expenseList[e].name;
          expenseEl.classList = "red";
          dateBody.appendChild(expenseEl);
        }
        dateEl.appendChild(dateBody);
        calDatesEl.appendChild(dateEl);
      }
    };

    // function to calculate and display in calculator


    // function to save localStorage


    // function to get localStorage


// call functions
    // get localStorage


  // calendar generation/display
createCalendar();


// event listeners
