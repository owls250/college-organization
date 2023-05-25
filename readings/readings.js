function showReadings() {
    const file = document.getElementById("reading_table");
    const array = localStorage.getItem("schedule");

    let contents = "";

    for (let row=0; row<array.length; row++) {
        if (array[row][2]!="N/A"&& array[row][2]!="") {// if not empty
            contents += '<tr>'+ '<td>'+ array[row][0] + '</td>' + '<td>'+ array[row][1] + '</td>' + '<td>' + array[row][2]+ '</td>' + '</tr>' // format and add to contents
        }
    }
    
    file_contents = "<table></tab<table id=reading_table><tr><th>Date</th><th>Class</th><th>Reading</th></tr>";
    file_contents += contents;
    file_contents += "</table>";

}