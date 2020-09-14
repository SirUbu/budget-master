// get DOM elements


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


    // function to calculate and display in calculator


    // function to save localStorage


    // function to get localStorage


// call functions
    // get localStorage


    // calendar generation/display


// event listeners
