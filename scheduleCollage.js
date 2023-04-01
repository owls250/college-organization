// when the first form is changed
//const form  = document.querySelector('#scheduleInput');
const form = document.getElementById('scheduleInput')
form.addEventListener('submit', (event) => {
    // validation

    // not valid: 
    event.preventDefault();

    form.submit();
    handleFiles();

}); // https://www.javascripttutorial.net/javascript-dom/javascript-form/
//const inputElement = document.getElementById("schedule1csv");
//inputElement.addEventListener("change", handleFiles, false);

form.addEventListener('reset', (ev) => {
  form.reset()
});

function handleFiles() {
  console.log('start handle files');
  //const fileList = this.files; /* now you can work with the file list */

  const allEvents = [];
  console.log(form.elements);
  for (el in form.elements.length) {
    console.log("file ", el)
    allEvents.push( csvtoarray( form.elements[el]));
  
  }
  //for (file in fileList) {
  //  allEvents.push( csvtoarray( file));
  //}
  
  // sort
  //alert("Hi2")
  if (allEvents == null) {
    console.log( "null array");
    } else { displayarray( allEvents); }

  //alert('done');
  
}

function csvtoarray( csvfile) {
    console.log('csv reader');
    alert('read');
    let reader = new FileReader(); 
    console.log( "the type of the csv file: ", typeof(csvfile));
    console.log( "the file: ", csvfile);
    //var array;
    reader.onload = function( event) {
        console.log('onload');
        var array = reader.result;
        console.log( "array: ", array); // https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext
        return array
    };
    form.onchange = function (event) {
        console.log('onchange');
        reader.readAsText(csvfile);
    
    };

}

function displayarray( data) {
    console.log("begin display array function");

    //let data = csvtoarray( document.getElementById(schedule1csv))
    let table = '';
    //let data = schedule;

    //let row = '';
    //row = '<tr>';
    //for (col in range( length (data[0]))) {
    //    row = row + '<th>';
    //    let text = data[0][col];
    //    row = row + '</th>';
    //}
    //row = row + '</tr>'

    let row = '';

    for (i=0; i<data.length; i++) {
        console.log( "row: ", i);
        row = '<tr>';

        for (cell=0; cell<data[i].length; cell++) {
            cl = '<td>' + str(data[i]) + '<td>';
            row = row + cl;
        }
        row = row + '</tr>'
        table = table + row;
        console.log( row);
    }
    console.log(row);
    console.log("Did it");
    //console.log(document.getElementByID("all-class-schedule").innerhtml)
    //document.getElementByID("all-class-schedule").innerhtml = table;

}


//const submit_button = document.getElementById('Submit')
//submit_button.addEventListener('click', displayarray());
/*
const $input = document.querySelector('#file');
  $input.addEventListener('change', event => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    fetch('/upload', {
      method: 'post',
      body: data
    }).then(res => res.text()).then(res => {
      const log = document.createElement('p');
      log.innerHTML = res;
      document.body.appendChild(log);
    })
  }) //https://javascript.plainenglish.io/how-to-upload-file-from-a-webpage-e3e9fa727d73
*/
/* function csvtoarray( csvfile) {
    let reader = new FileReader();
    reader.readAsText(csvfile);
    let array = reader.result;
    return array
}

function displayarray( ) {
    alert("begin display array function");

    let data = csvtoarray( document.getElementById(schedule1csv))
    let table = '';
    //let data = schedule;

    //let row = '';
    //row = '<tr>';
    //for (col in range( length (data[0]))) {
    //    row = row + '<th>';
    //    let text = data[0][col];
    //    row = row + '</th>';
    //}
    //row = row + '</tr>'

    let row = '';

    for (i=0; i<data.length; i++) {
        row = '<tr>';

        for (cell=0; cell<data[i].length; cell++) {
            cl = '<td>' + str(data[i]) + '<td>';
            row = row + cl;
        }
        row = row + '</tr>'
    }

    document.getElementByID('assignments').innerHTML = table;

}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
const submit_button = document.getElementById('Submit')
submit_button.addEventListener('click', displayarray());

//function arraytocsv( array, csvoutputname) {
    
//}

function concatSchedule( arrays) {
    const schedule = [];
    function myconcat( array) {
        schedule.concat( array.shift());
    }
    arrays.forEach( myconcat);
    schedule.sort();
    return schedule
}

function initialSchedule() {
    console.log('main function entered')
    let classschedule1 = document.getElementById('schedule1csv').files[0];
    let classschedule2 = document.getElementById('schedule2csv').files[0];
    
    console.log('got items')

    const schedule1 = csvtoarray( classschedule1);
    const schedule2 = csvtoarray( classschedule2);
    console.log( 'converred csv to arrays');
    const schedules = [schedule1, schedule2];
    const schedule = concatSchedule( schedules, "overallSchedule.csv");
    console.log('sorted events')
    displayarray( schedule);
}

function overdue( schedule) {
// use dates
}

function thisWeek( schedule) {

} */