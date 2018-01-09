
    var url = "https://www.sefaria.org/api/texts/Psalms."
    var chapter = "";
    var textField = document.getElementById("text");
    var outputText = "";
    var searchLanguage;

    //AJAX call to Sefaria

    function findTehellim() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                var data = JSON.parse(this.responseText);

                //Create English Text

                if (searchLanguage === "eng"){
                    for(i=0;i<data.text.length;i++) {
                        outputText += "<div class='verse'>" + (i+1) + ". " + data.text[i] + "</div>";
                    }
                }

                if (searchLanguage === "engHeb"){
                    for(i=0;i<data.text.length;i++) {
                        outputText += "<div class='verse'>" + (i+1) + ". " + data.he[i] + "</div>" + "<div class='verse'>" + (i+1) + ". " + data.text[i] + "</div>";
                    }
                }

                if (searchLanguage === "heb"){
                    for(i=0;i<data.text.length;i++) {
                        outputText += "<div class='verse'>" + (i+1) + ". " + data.he[i] + "</div>";
                    }
                }

                //Appending Generated Text To Page

                textField.innerHTML = (outputText);
            }
        };
        xhttp.open("GET", url + chapter, true);
        xhttp.send();
    }

    function setOutput() {
        outputText = "";
        chapter = document.getElementById("chapterInput").value;
        findTehellim();
    }

    document.getElementById('eng').onclick = function () {
        searchLanguage = this.id;
        console.log(searchLanguage);
        setOutput();
    };

    document.getElementById('engHeb').onclick = function () {
        searchLanguage = this.id;
        console.log(searchLanguage);
        setOutput();
    };

    document.getElementById('heb').onclick = function () {
        searchLanguage = this.id;
        console.log(searchLanguage);
        setOutput();
    };