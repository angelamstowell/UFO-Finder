var tableData = data;
console.log(tableData);


var tbody = d3.select("tbody");


data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});


var submit = d3.select("#submit");

// function to take input and recreate table
submit.on("click", function() {
    // stops page from refreshing
    d3.event.preventDefault();

    d3.select(".summary").html("");

    // user input as variable
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");


    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);


    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

// dateInput.on("change", clickSelect);