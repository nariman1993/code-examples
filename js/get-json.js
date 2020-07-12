var pageCounter = 1;
var content = document.getElementById("add-content");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        addHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-btn");
    }
});

function addHTML(data){
    var htmlString = "";
    for (let i = 0; i < data.length; i++) {
        htmlString += "<h3>" + data[i].name + "is a " + data[i].species + ".</h3>";
    }
    content.insertAdjacentHTML('beforeend', htmlString);
}