// same as schedule
// takes a csvfile and turns it into an array
async function csvToArray( csvfile) {
    // console.log('csv reader');
    

    // TODO read xlsx files
    
    var array;
    const fileReaderPromise = new Promise(( resolve, reject) => {
      
      const reader = new FileReader(); // instantiate new Filereader

      reader.onload = e => {
        resolve(process(reader.result, csvfile.name.replace(".csv", "")));
        // https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsText( csvfile); // read file
    });  
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText

    
    return await fileReaderPromise;
}

// split into array
function process( csvin, name) {
    let rows = csvin.split( "\n");
    const array = [];
  
    // for every row
    for (let r = 0; r < rows.length; r++) { 
      if (rows[r] === "") { // skip if no data
        continue;
      }
  
      // separate into date, class, readings, assignments
      let words = rows[r].replace(",\r",""); // get rid of extra characters
      words = words.replace("\r", "");
      words = words.split( ","); // split the row
      wordZero = words[0]; // get the first word
      words.shift(); // everything but the first word
  
      array.push([wordZero, name, ...words]); // add to the new array
    }
  
    // TODO rearrange columns as necessary
  
    // remove label row (first row)
    array.shift();
  
    return array;
  }

  

async function showReadings() {
    //const tab = document.getElementById("reading_table");
    //const array = localStorage.getItem("schedule");
    const array = await csvToArray( document.getElementById("reading_input").files[0]);
    let contents = "";
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

    console.log(array);


    for (let row=0; row<array.length; row++) {
        if (array[row][2]!="N/A"&& array[row][2]!="") {// if not empty
            contents += '<tr>'+ '<td>'+ new Date(array[row][0]).toLocaleString() + '</td>' + '<td>'+ array[row][2] + '</td>' + '<td>' + array[row][3]+ '</td>' + '</tr>' // format and add to contents
        }
    }
    
    file_contents = "<table></tab<table id=reading_table><tr><th>Date</th><th>Class</th><th>Reading</th></tr>";
    file_contents += contents;
    file_contents += "</table>";

    document.getElementById("reading_table").innerHTML = file_contents;

}