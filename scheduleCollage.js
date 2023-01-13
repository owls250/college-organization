const inputElement = document.getElementById("schedule1csv");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  console.log("Hi!")
  alert('start handle files');
  const fileList = this.files; /* now you can work with the file list */

  const allEvents = [];
  allEvents.push( csvtoarray( fileList));
  //for (file in fileList) {
  //  allEvents.push( csvtoarray( file));
  //}

  displayarray( allEvents);

  alert('done');
  
}

function csvtoarray( csvfile) {
    alert('csv reader');
    let reader = new FileReader();
    reader.readAsText(csvfile);
    let array = reader.result;
    return array
}

function displayarray( data) {
    alert("begin display array function");

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
        row = '<tr>';

        for (cell=0; cell<data[i].length; cell++) {
            cl = '<td>' + str(data[i]) + '<td>';
            row = row + cl;
        }
        row = row + '</tr>'
    }

    document.getElementByID('all-class-schedule').innerHTML = table;

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