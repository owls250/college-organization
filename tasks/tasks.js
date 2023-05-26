// edit table inspired by https://talkerscode.com/webtricks/add-edit-and-delete-rows-from-table-dynamically-using-javascript.php

// add a new row to the table
function addTask() {
    let table = document.getElementById("task_table").innerHTML;
    document.getElementById("task_counter").innerHTML = '<p>Tasks: ' + document.getElementById("task_table").rows.length + '</p>';

    // get rid of table end to move it later
    table.replace("</table>", "");
    // blank table row
    table += "<tr>" + "<td></td>".repeat(6) + "<td><input type='button' value='Edit' onclick='editRow("+ document.getElementById("task_table").rows.length +")'> <input type='button' value='Delete' onclick='deleteRow()'></td></tr>";
    table += "</table>"; // end table

    // change the table
    document.getElementById("task_table").innerHTML = table; 
}

function editRow( row) {
    
}

// deletes the row at given index
function deleteRow( row) {
    // does this delete the right row?
    document.getElementById("task_counter").innerHTML = '<p>Tasks: ' + document.getElementById("task_table").rows.length + '</p>';
}