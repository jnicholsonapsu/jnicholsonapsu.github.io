function sayHi() {
    let message = "Hello again.";
    document.getElementById('output').innerText = message;
    
}

function loadQuote() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('output2').innerText = this.responseText;
      }
    xhttp.onerror = function() {
        document.getElementById('output2').innerText = "Problem"
    }
    xhttp.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes", true);
    xhttp.send();
    
  }