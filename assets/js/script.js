// Quote

//app.js
const url = "https://api.quotable.io/random";
function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("author").innerHTML = "- " + data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}

setInterval(generateQuote(), 8.64e+7);


// get DOM elements
var calDatesEl = document.querySelector("#calGrid");
var cardContentEl = document.querySelector("#calBody");
var yearEl = document.querySelector("#year");
var monthEl = document.querySelector("#month");


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
$(document).ready(function () {
  $('.modal').modal();
  $('.datepicker').datepicker({
    container: 'body'
  })
});

function checkity() {
  var selectValue = $('#select').val();
  // if (selectValue === 'weekly') {
  //   console.log('hi im weekly')
  //   return {
  //   }
  // }
  if (selectValue === 'bi-weekly') {
    payFrequency = {
      type: 'bi-weekly',
      recent: $('#date').val()
    };
  } else if (selectValue === 'semi-monthly') {
    payFrequency = {
      type: 'semi-monthly',
      Day1: $('#month1').val(),
      Day2: $('#month2').val()
    };
  }
  savePayFreq();
};

function handleselectchange() {
  var selectValue = $('#select').val();
  var biweekly = $('#bi-weekly')
  var semimonthly = $('#semi-monthly')
  if (selectValue === 'bi-weekly') {
    biweekly.removeClass('hide')
    semimonthly.addClass('hide')
  }
  else if (selectValue === 'semi-monthly') {
    semimonthly.removeClass('hide')
    biweekly.addClass('hide')
  }
}

$('#submit').on('click', checkity);
$("#select").on('change', handleselectchange)


var expenses = [
  // {day: "1st", expenseList: [{name: "", description: "",amount: "", status: false}]},
  { day: "1st", expenseList: [], number: "1" },
  { day: "2nd", expenseList: [], number: "2" },
  { day: "3rd", expenseList: [], number: "3" },
  { day: "4th", expenseList: [], number: "4" },
  { day: "5th", expenseList: [], number: "5" },
  { day: "6th", expenseList: [], number: "6" },
  { day: "7th", expenseList: [], number: "7" },
  { day: "8th", expenseList: [], number: "8" },
  { day: "9th", expenseList: [], number: "9" },
  { day: "10th", expenseList: [], number: "10" },
  { day: "11th", expenseList: [], number: "11" },
  { day: "12th", expenseList: [], number: "12" },
  { day: "13th", expenseList: [], number: "13" },
  { day: "14th", expenseList: [], number: "14" },
  { day: "15th", expenseList: [], number: "15" },
  { day: "16th", expenseList: [], number: "16" },
  { day: "17th", expenseList: [], number: "17" },
  { day: "18th", expenseList: [], number: "18" },
  { day: "19th", expenseList: [], number: "19" },
  { day: "20th", expenseList: [], number: "20" },
  { day: "21st", expenseList: [], number: "21" },
  { day: "22nd", expenseList: [], number: "22" },
  { day: "23rd", expenseList: [], number: "23" },
  { day: "24th", expenseList: [], number: "24" },
  { day: "25th", expenseList: [], number: "25" },
  { day: "26th", expenseList: [], number: "26" },
  { day: "27th", expenseList: [], number: "27" },
  { day: "28th", expenseList: [], number: "28" },
  { day: "29th", expenseList: [], number: "29" },
  { day: "30th", expenseList: [], number: "30" },
  { day: "31st", expenseList: [], number: "31" },

];

// variable for pay period expenses
var payPeriodExpenses =[];
// variables for calculator
var calBalance = 150;
var calExpenses = payPeriodExpenses;
var calPaid = 40;
var calOutstanding = calExpenses - calPaid;
var calRemaining = calBalance - calOutstanding;

document.getElementById("balance").innerHTML = calBalance;
document.getElementById("payPeriodExpenses").innerHTML = calExpenses;
document.getElementById("outstandingExpenses").innerHTML = calOutstanding;
document.getElementById("paidExpenses").innerHTML = calPaid;
document.getElementById("balanceRemaining").innerHTML = calRemaining;

// variable to store months holidays
var holidays = [];

// functions

// initialize modal functionality
$(document).ready(function () {
  $('.modal').modal();

  $(document).click(function (e) {
    if ($(e.target).is('#expenses-sub, #expenses-sub *, .edit, .edit * .modal-day, .modal-day *, .name, .amount')) {
      return;
    }
    else {
      resetDelete();
    }
  });
  $(document).click(function (e) {
    if ($(e.target).is('.modal-content, .modal-content *')) {
      return;
    }
    else {
      getHolidays();
    }
  });
});

// function to fetch holidays 
var getHolidays = function () {
  // set variables
  var apiKey = "421967198c7598b1318b049e342e0c87b3b59f3e";
  var apiYear = moment().format("YYYY");
  var apiMonth = moment().format("MM");
  // make request to url
  fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=US&year=${apiYear}&month=${apiMonth}&type=national`)
    .then(function (holidayResponse) {
      // if request was successful
      if (holidayResponse.ok) {
        holidayResponse.json().then(function (holidayData) {
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

$('.modal-day').click(function () {
  var modalDay = ($(this).attr("id").replace("exp", ""));
  $('.modalDay').text("Day: " + modalDay);
  $('#name, #desc, #amt').val("");
});

// function to fetch and display quote


// function to set pay frequency

// function to create elements
var createElem = function (index, day, name, description, amount) {
  var expId = "#exp" + day
  $(expId).parent().parent().siblings().append(`<div class="modal-trigger edit expItem dayIndex${index}" href="#expenses-sub"><p class="name">${name}</p><p class="amount">${amount}</p><p class="hide description">${description}</p></div>`)
};

// function to set expenses
$('.save').click(function () {
  var expDay = $('.modalDay').text().replace("Day: ", "").trim();
  var savModal = "#exp" + expDay;
  var expIndex = (expDay.substring(0, expDay.length - 2) - 1)
  var expName = $('#name').val().trim();
  var expDesc = $('#desc').val().trim();
  var expAmt = $('#amt').val().trim();
  if (expName == "" || expDesc == "" || expAmt == "") {
    alert("Please enter a value");
    return;
  }   
  var res = expAmt.match(/[0-9]/g);
  if (res == null) {
    alert("Please enter a number")
    return;
  }


  // needs to replace index of array instead
  // if edit, retrieve index and don't push
  if ($("#delIco").hasClass("hide")) {
    expenses[expIndex].expenseList.push({
      name: expName,
      description: expDesc,
      amount: expAmt,
      status: false
    });
    $(savModal).parent().parent().siblings().append(`<div class="modal-trigger edit expItem dayIndex${expIndex}" href="#expenses-sub"><p class="name">${expName}</p><p class="amount">${expAmt}</p><p class="hide description">${expDesc}</p></div>`);
  }
  else {
    var editIndex = $('#delIco').attr('class').split(' ')[4].replace('expIndex', '').trim();
    var dayIndex = $('#delIco').attr('class').split(' ')[3].replace('dayIndex', '').trim();
    expenses[dayIndex].expenseList[editIndex].name = expName;
    expenses[dayIndex].expenseList[editIndex].description = expDesc;
    expenses[dayIndex].expenseList[editIndex].amount = expAmt;
    var thisIndex = ".thisIndex" + editIndex
    $(thisIndex)[0].innerHTML = `<p class="name">${expName}</p><p class="amount">${expAmt}</p><p class="hide description">${expDesc}</p>`
    resetDelete();
  }
  saveExp();
});

// function to delete an expense
$('#delIco').click(function () {
  var dayIndex = $(this).attr('class').split(' ')[3].replace('dayIndex', '').trim();
  var expIndex = $(this).attr('class').split(' ')[4].replace('expIndex', '').trim();
  expenses[dayIndex].expenseList.splice(expIndex);
  var thisIndex = ".thisIndex" + expIndex;
  $(thisIndex).remove();

  resetDelete();
  saveExp();
});

var resetDelete = function () {
  var parts = $('#delIco').attr('class').split(' ');
  $('#delIco').removeClass(parts[3]);
  $('#delIco').removeClass(parts[4]);
  $('#delIco').addClass("hide");
};

// function to edit
$(document).on('click', '.edit', function () {
  var editIndex = $(this).index();
  var expIndex = "expIndex" + editIndex;
  var thisIndex = "thisIndex" + editIndex;
  ($(this).addClass(thisIndex))
  var someIndex = $(this).parent().siblings().children().children().attr("id");
  someIndex = someIndex.slice(3, someIndex.length - 2) - 1;
  var dayIndex = "dayIndex" + someIndex;
  var name = ($(this).children('.name').text());
  var desc = ($(this).children('.description').text());
  var amt = ($(this).children('.amount').text());
  $('#name').val(name);
  $('#desc').val(desc);
  $('#amt').val(amt);

  $("#delIco").removeClass("hide");
  $("#delIco").addClass(dayIndex);
  $("#delIco").addClass(expIndex);
});

// sortable operations
$(".expCol").sortable({
  connectWith: $(".expense-row *"),
  tolerance: "pointer",
  helper: "clone",
  activate: function (event) {
    $(this).addClass("dropover");
  },
  deactivate: function (event) {
    $(this).removeClass("dropover");
  },
  over: function (event) {
    $(event.target).addClass("dropover-active");
  },
  out: function (event) {
    $(event.target).removeClass("dropover-active");
  },
  update: function (event) {
    var tempArr = []
    $(this).children().each(function () {
      var name = $(this)
        .find(".name")
        .text()
        .trim();

      var amount = $(this)
        .find(".amount")
        .text()
        .trim();

      var description = $(this)
        .find(".description")
        .text()
        .trim();

      // add everything to temp arrays as objects
      tempArr.push({
        name: name,
        description: description,
        amount: amount,
        status: false
      });
    });
    var someIndex = $(this).siblings().children().children().attr("id");
    someIndex = someIndex.slice(3, someIndex.length - 2) - 1;
    // console.log(tempArr)
    // console.log(someIndex)
    expenses[someIndex].expenseList = tempArr;
    saveExp();

    // use logic of edit to get new indexes  
    // rewrite the arrays
  }
});

// function to calculate and display in calculator


// function to generate and display calendar
var createCalendar = function (data) {
  // use holidayData to update holidays array
  holidays = [];
  var holidayArr = data.response.holidays;
  for (var h = 0; h < holidayArr.length; h++) {
    var holidayObj = {
      date: holidayArr[h].date.iso,
      name: holidayArr[h].name,
    };
    holidays.push(holidayObj);
  }
  // clear payPeriodExpenses
  payPeriodExpenses = [];
  // update month and year with current month and year
  yearEl.textContent = moment().format("YYYY");
  monthEl.textContent = moment().format("MMMM");
  // clear current content in calendar
  calDatesEl.textContent = "";
  // add weekdays to calendar
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for (var w = 0; w < 7; w++) {
    var weekdayEl = document.createElement("div");
    weekdayEl.textContent = weekdays[w];
    calDatesEl.appendChild(weekdayEl);
  }
  // get the first day of the month
  var counter = parseInt(moment().format("D"));
  var firstOfMonth = moment().subtract(counter - 1, 'days').format("dddd");
  // if firstOfMonth not sunday, get number of days needed to get to sunday
  var additional = counter + 0;
  if (firstOfMonth === "Saturday") {
    additional = counter - 1 + 6;
  } else if (firstOfMonth === "Friday") {
    additional = counter - 1 + 5;
  } else if (firstOfMonth === "Thursday") {
    additional = counter - 1 + 4;
  } else if (firstOfMonth === "Wednesday") {
    additional = counter - 1 + 3;
  } else if (firstOfMonth === "Tuesday") {
    additional = counter - 1 + 2;
  } else if (firstOfMonth === "Monday") {
    additional = counter - 1 + 1;
  }
  // get the day that the calendar starts on
  var loopDay = moment().subtract(additional, 'days');
  // take current month and get end of current month
  var endOfMonth = moment().add(1, 'month').subtract(counter, 'days');
  // take current day and get end of previous month
  var previousMonthEnd = moment().subtract(counter, 'days');
  // if bi-weekly payFrequency, set recentPayMoment
  if (payFrequency.type === "bi-weekly") {
    // make recent pay a moment date
    var formatDate = "MMM Do, YYYY"
    var recentPayMoment = moment(payFrequency.recent, formatDate);
    // while recentPayMoment is not in the current month, add 14 days until in current month
    while (parseInt(recentPayMoment.format("MM")) !== parseInt(moment().format("MM"))) {
      recentPayMoment.add(14, 'days');
    };
    var nextPayDate = recentPayMoment.add(14, 'days');
    recentPayMoment = moment(payFrequency.recent, formatDate);
    while (parseInt(recentPayMoment.format("MM")) !== parseInt(moment().format("MM"))) {
      recentPayMoment.add(14, 'days');
    };
    var lastPayDate = recentPayMoment.add(28, 'days');
    recentPayMoment = moment(payFrequency.recent, formatDate);
    while (parseInt(recentPayMoment.format("MM")) !== parseInt(moment().format("MM"))) {
      recentPayMoment.add(14, 'days');
    };
  // if semi-monthly payFrequency, convert days to moments
  } else if (payFrequency.type === "semi-monthly") {
    var formatDate = "MMM Do, YYYY";
    var payDate1 = moment(payFrequency.Day1, formatDate);
    var payDate2 = moment(payFrequency.Day2, formatDate);
  }
  // iterate to create month
  for (var i = 0; i < 35; i++) {
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
    for (var y = 0; y < holidays.length; y++) {
      if (loopDay.format("YYYY-MM-DD") === holidays[y].date) {
        var holidayEl = document.createElement("p");
        holidayEl.classList = "purple";
        holidayEl.textContent = holidays[y].name;
        dateBody.appendChild(holidayEl);
      }
    }
    // add pay frequency
    // if semi-monthly and day of month add
    if (payFrequency.type === "semi-monthly") {
      if (loopDay.format("Do") === payDate1.format("Do") || loopDay.format("Do") === payDate2.format("Do")) {
        var payEl = document.createElement("p");
        payEl.classList = "green";
        payEl.textContent = "Pay Day";
        dateBody.appendChild(payEl);
      }
      // highlight if date is in pay period
      if ((parseInt(moment().format("DD")) >= parseInt(payDate1.format("DD")) && parseInt(moment().format("DD")) < parseInt(payDate2.format("DD")) && parseInt(loopDay.format("DD")) >= parseInt(payDate1.format("DD")) && parseInt(loopDay.format("DD")) < parseInt(payDate2.format("DD"))) || (parseInt(moment().format("DD")) >= parseInt(payDate2.format("DD")) && parseInt(moment().format("DD")) < parseInt(payDate1.format("DD")) && parseInt(loopDay.format("DD")) >= parseInt(payDate2.format("DD")) && parseInt(loopDay.format("DD")) < parseInt(payDate1.format("DD")))) {
        dateEl.classList = "card grey";
        // push expenses to payPeriodExpenses
        for (var c = 0; c < expenses.length; c++) {
          if (expenses[c].day === loopDay.format("Do")) {
            for (var p = 0; p < expenses[c].expenseList.length; p++) {
              payPeriodExpenses.push(expenses[c].expenseList[p]);
            }
          }
        }
      }
      // if bi-weekly and day of month add
    } else if (payFrequency.type === "bi-weekly") {
      if (loopDay.format("MM/DD") === recentPayMoment.format("MM/DD") || loopDay.format("MM/DD") === nextPayDate.format("MM/DD") || loopDay.format("MM/DD") === lastPayDate.format("MM/DD")) {
        var payEl = document.createElement("p");
        payEl.classList = "green";
        payEl.textContent = "Pay Day";
        dateBody.appendChild(payEl);
      }
      // highlight if date is in pay period
      if (moment().format("MM/DD") >= recentPayMoment.format("MM/DD") && moment().format("MM/DD") < nextPayDate.format("MM/DD") && loopDay.format("MM/DD") >= recentPayMoment.format("MM/DD") && loopDay.format("MM/DD") < nextPayDate.format("MM/DD") || moment().format("MM/DD") >= nextPayDate.format("MM/DD") && moment().format("MM/DD") < lastPayDate.format("MM/DD") && loopDay.format("MM/DD") >= nextPayDate.format("MM/DD") && loopDay.format("MM/DD") < lastPayDate.format("MM/DD")) {
        dateEl.classList = "card grey";
        // push expenses to payPeriodExpenses
        for (var c = 0; c < expenses.length; c++) {
          if (expenses[c].day === loopDay.format("Do")) {
            for (var p = 0; p < expenses[c].expenseList.length; p++) {
              payPeriodExpenses.push(expenses[c].expenseList[p]);
            }
          }
        }
      }
    }
    // add expenses based on day due
    for (var d = 0; d < expenses.length; d++) {
      if (loopDay.format("Do") === expenses[d].day) {
        for (var e = 0; e < expenses[d].expenseList.length; e++) {
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
    if (endOfMonthInt < 31) {
      // use last day of month to add expenses of dates to 31st
      if (loopDay.format("MM/DD") === endOfMonth.format("MM/DD")) {
        for (var f = 0; f < expenses[endOfMonthInt - 1 + dateDiff].expenseList.length; f++) {
          var expenseEl = document.createElement("p");
          expenseEl.textContent = expenses[endOfMonthInt - 1 + dateDiff].expenseList[f].name;
          expenseEl.classList = "red";
          dateBody.appendChild(expenseEl);
        }
      }
    }
    // highlight current day of month
    if (loopDay.format("MM/DD/YYYY") === todayDate) {
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
var saveExp = function () {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};
var savePayFreq = function () {
  localStorage.setItem("payFreq", JSON.stringify(payFrequency));
};

// function to get localStorage
var getLocal = function () {
  recallExp = JSON.parse(localStorage.getItem("expenses"));
  // if array exists, replace empty array with it
  if (recallExp) {
    expenses = recallExp;
  }
  $.each(expenses, function (day) {
    $.each(expenses[day].expenseList, function (skip, elem) {
      createElem(day, expenses[day].day, elem.name, elem.description, elem.amount, elem.status);
    })
  })
  recallPayFreq = JSON.parse(localStorage.getItem("payFreq"));
  if (recallPayFreq) {
    payFrequency = recallPayFreq;
  }
};

// call functions
// get localStorage
getLocal();

// calendar generation/display
getHolidays();
setInterval(getHolidays(), ((60 * 1000) * 60) * 6);

// event listeners
