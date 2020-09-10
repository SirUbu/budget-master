// get DOM elements


// set global variable 
var todayDate = moment().format("MM/DD/YYYY");
  //variables from set pay frequency function
var payFrequency = {};
    // {type: semi-monthly,
    //  day1: "5",
    //  day2: "22"}
    // OR
    // {type: bi-weekly,
    // recent: "09/04/2020"}
  // variables from set expenses function 
var expenses = [
    // {1: [
        // {name: "",
        // description: "",
        // amount: "",
        // status: false}
    // ]}
    {"1st": []},
    {"2nd": []},
    {"3rd": []},
    {"4th": []},
    {"5th": []},
    {"6th": []},
    {"7th": []},
    {"8th": []},
    {"9th": [{name: "Wells Fargo",
    description: "Credit Card",
    amount: "$25",
    status: false}]},
    {"10th": []},
    {"11th": []},
    {"12th": []},
    {"13th": []},
    {"14th": []},
    {"15th": []},
    {"16th": []},
    {"17th": []},
    {"18th": []},
    {"19th": []},
    {"20th": []},
    {"21st": []},
    {"22nd": []},
    {"23rd": []},
    {"24th": []},
    {"25th": []},
    {"26th": []},
    {"27th": []},
    {"28th": []},
    {"29th": []},
    {"30th": []},
    {"31st": []},
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
