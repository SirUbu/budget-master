// get DOM elements
var calDates = document.querySelector("#calGrid");


// set global variable 
var todayDate = moment().format("MM/DD/YYYY");
  //variables from set pay frequency function
var payFrequency = {};
    // {type: semi-monthly,
    //  day1: "5th",
    //  day2: "22nd"}
    // OR
    // {type: bi-weekly,
    // recent: "09/04/2020"}
  // variables from set expenses function 
var expenses = [
    // {day: "1st", expenseList: [{name: "", description: "",amount: "", status: false}]},
    {day: "1st", expenseList: []},
    {day: "2nd", expenseList: []},
    {day: "3rd", expenseList: []},
    {day: "4th", expenseList: []},
    {day: "5th", expenseList: []},
    {day: "6th", expenseList: []},
    {day: "7th", expenseList: []},
    {day: "8th", expenseList: []},
    {day: "9th", expenseList: [{name: "Wells Fargo", description: "Credit Card", amount: "$25", status: false}]},
    {day: "10th", expenseList: []},
    {day: "11th", expenseList: []},
    {day: "12th", expenseList: []},
    {day: "13th", expenseList: []},
    {day: "14th", expenseList: []},
    {day: "15th", expenseList: []},
    {day: "16th", expenseList: []},
    {day: "17th", expenseList: []},
    {day: "18th", expenseList: []},
    {day: "19th", expenseList: []},
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
      // determine date with note ie 1st, 2nd, 3rd
      for(var i = 0; i < 31; i++) {
        var dateNote = "";
          if(i+1 === 1 || i+1 === 21 || i+1 === 31) {
            dateNote = "st";
          } else if(i+1 === 2 || i+1 == 22) {
            dateNote = "nd";
          } else if(i+1 === 3 || i+1 === 23) {
            dateNote = "rd";
          } else {
            dateNote = "th";
          };
        var date = `${i+1}${dateNote}`;
        // create card for date and content
        var dateEl = document.createElement("div");
        dateEl.classList = "card";
        // create and add date as card header
        var dateHeader = document.createElement("span");
        dateHeader.classList = "card-title left-align grey";
        dateHeader.textContent = date;
        dateEl.appendChild(dateHeader);
        // create and add card body
        var dateBody = document.createElement("span");
        dateBody.classList = "card-content";
          // add pay days to card-body
  
          // add expenses to card-body
        for(var d = 0; d < expenses.length; d++) {
          if(expenses[i] === "9th") {
            console.log(expenses[i]);
          }
        }
        dateEl.appendChild(dateBody);
        calDates.appendChild(dateEl);
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
