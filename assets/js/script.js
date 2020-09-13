// get DOM elements


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
    {day: "9th", expenseList: []},
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

// add modal functionality
$(document).ready(function() {
  $('.modal').modal();
});

$('.modal-day').click(function() {
  var modalDay=($(this).attr("id").replace("exp",""));
  $('.modalDay').text("Day: " + modalDay);
  $('#name, #desc, #amt').val("");
})



// functions
    // function to fetch and display quote


    // function to set pay frequency


    // function to set expenses
    $('#saveIco').click(function() {      
      var expDay = $('.modalDay').text().replace("Day: ","").trim();
      var savModal = "exp" + expDay;
      expIndex = (expDay.substring(0, expDay.length-2) - 1)
      var expName = $('#name').val().trim();
      var expDesc = $('#desc').val().trim();
      var expAmt = $('#amt').val().trim();
      expenses[expIndex].expenseList.push({
        name: expName,
        description: expDesc,
        amount: expAmt
      })

      $('#'+savModal).parent().parent().siblings().append( "<p class='expItem'>" + expName + "</p>")
      saveExp();      
      // set index so it can be recalled refer to taskmaster
    })
    
    // function to delete an expense
    $('#delIco').click(function() {
      var expDay = $('.modalDay').text().replace("Day: ","").trim();
      expIndex = (expDay.substring(0, expDay.length-2) - 1)
      // this is only a placeholder. currently clearing out entire array for this day.
      expenses[expIndex].expenseList = [];
      saveExp();
    })

    // function to recall an expense from local storage to edit
    $('.expItem').click(function() {


    })

    // function to fetch holidays 
    

    // function to generate and display calendar


    // function to calculate and display in calculator


    // function to save localStorage
    var saveExp = function () {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    }
    // function to get localStorage
    var getExp = function () {  
  recallExp = JSON.parse(localStorage.getItem("expenses"));
    // if array exists, replace empty array with it
  if (recallExp) {
    expenses = recallExp;
  } 
    
    }

// call functions
  // get localStorage
  getExp();

    // calendar generation/display


// event listeners
