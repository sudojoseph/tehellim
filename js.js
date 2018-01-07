var url = "https://www.sefaria.org/api/texts/Psalms."
var chapter = "";
var textField = document.getElementById("text");
var eng = "";
var heb = "";

function findTehellim() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            eng += data.text;
            heb += data.he;
            textField.innerHTML = (eng + "<br>" + heb);
        }
    };
    xhttp.open("GET", url + chapter, true);
    xhttp.send();
}

document.getElementById("button").onclick = function () {
    eng = heb = "";
    console.log(textField.innerHTML);
    chapter = document.getElementById("chapterInput").value;
    console.log(chapter);
    findTehellim();
};