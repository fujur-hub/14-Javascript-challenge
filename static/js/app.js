// from data.js
var tableData = data;

//reference from index in order to construct table
var tbody = d3.select("tbody");


//cooper's hmwk totally different approach vs solution.

function createTable(data) { //basically, fill the table from "tbody"
    tbody.html(""); //clear data, if existing

    data.forEach(dataRow => {
        var row = tbody.append("tr"); //'tr' = table row
        
        Object.values(dataRow).forEach((val) => {//(q4 TJ or DK) "val" in this case is pre-determined as "value" from the function
            var cell = row.append("td");//"td" = table data in each cell
            cell.text(val); //(q4 TJ or DK) "val" in this case is pre-determined as "value" from the function
            }
        );
    });
}

console.log(tableData) //data appeared on console and page!!

function onclick() {

    var date = d3.select("#datetime").property("value"); //could be "name" or "value"
    let desiredDate = tableData; //filter the entire dataset to the desired data

    //conditional
    if (date) {
        desiredDate = desiredDate.filter(row => row.datetime === date);
        // (q4 TJ or DK) wtf, where does "datetime" come from 
    }
    createTable(desiredDate);
}

d3.selectAll("#filter-btn").on("click", onclick);

createTable(tableData);