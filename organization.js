function readingTextChange( ) {
    document.getElementById("readings").innerHTML = 
    '<div><p>reading to do</p><p>Class 1</p><a href="readings/readings.html">full page<a/></div>';
}

function readingTextBack() {
    document.getElementById("readings").innerHTML = "<h2>Readings</h2>";
}