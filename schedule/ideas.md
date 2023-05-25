# implementation schedule of virtual assistant

Ctrl+Shift+V to preview in Visual Studio Code

## feedback
Choose multiple files in one input
promises to return from onload 
- async function returns a promise
- await variable
submit buttons send data to a place on the server (make a post request) and just complicates things so make it a button
- make a bunch of promises for faster
- array of arrays instead of adding to array
- local storage


## guts
- search first row for dates, readings, assignments
- use first rows to confirm. Look for dates pattern m or mm, / or ., d or dd, yyyy or yy or different order or no year
- if inside cells say "due" with a date put that assignment there
- for each day list all of the assignments due then by class, type

## big questions
- how much to use NLP or ML?

## input
*in order from least to most difficult*
- csvs (variable numbers of classes)
- other spreadsheets
- pdf
- links to syllabus location (up to date)

other types
- user edits
- repeat assignments

## output
*in order from least to most difficult*
- html table
    - week, date, readings, assignments, **big assignments**
- stability -- local storage
- csv table/ website
- this week/tomorrow

### links
- preserve links
- by type of assignments in a class ex readings are here 
- search library for books

## Goals

### UI
- anyone can use
- for any class
- accessibility (easy to read if dyslexia, screen reader compatible, more?)
- open code for computer savy people to use

### Other
- privacy -- can all be done on your computer or your storage

## additional functionality
- what should I be doing?/ to-do
    - to-do updates each session (optional Cloud storage/ phone app)
    - time based on type of assignment: reading assignments 1-2 days ahead of time
    - weigh assignment by type ex exam more than reading (look at syllabus?)
- connect to [Google Calendar API](https://developers.google.com/calendar/api)
    - add tasks
    - upload schedule
    - download schedule