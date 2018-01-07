var url = "https://www.sefaria.org/api/texts/Psalms."
var chapter = "";
var engTextField = document.getElementById("english-text");
var hebTextField = document.getElementById("hebrew-text");
var eng = "";
var heb = "";

//AJAX call to Sefaria

function findTehellim() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            var data = JSON.parse(this.responseText);
            
            //Create English Text

            for(i=0;i<data.text.length;i++) {
               eng += "<div class='verse'>" + (i+1) + ". " + data.text[i] + "</div>"; 
            }

            //Create Hebrew Text

            for(i=0;i<data.he.length;i++) {
               heb += "<div class='verse'>" + (i+1) + ". " + data.he[i] + "</div>"; 
            }

            //Appending Generated Text To Page

            engTextField.innerHTML = (eng);
            hebTextField.innerHTML = (heb);
        }
    };
    xhttp.open("GET", url + chapter, true);
    xhttp.send();
}

document.getElementById("button").onclick = function () {
    eng = heb = "";
    chapter = document.getElementById("chapterInput").value;
    findTehellim();
};