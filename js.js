
    var url = "https://www.sefaria.org/api/texts/Psalms."
    var chapter = "";
    var textField = document.getElementById("text");
    var outputText = "";
    var searchLanguage;

    //AJAX call to Sefaria

    function findTehellim() {
        let data = '';

        fetch(url + chapter)
        .then(result => result.json())
        .then(jsonData => data = jsonData)
        .then(function() {
            
            //Create English Text

            if (searchLanguage === "eng"){
                for(i=0;i<data.text.length;i++) {
                    outputText += "<div class='verse'>" + (i+1) + ". " + data.text[i] + "</div>";
                }
            }

            //Create English and Hebrew Text

            if (searchLanguage === "engHeb"){
                for(i=0;i<data.text.length;i++) {
                    outputText += "<div class='verse'>" + (i+1) + ". " + data.he[i] + "</div>" + "<div class='verse'>" + (i+1) + ". " + data.text[i] + "</div>";
                }
            }

            //Create Hebrew Text

            if (searchLanguage === "heb"){
                for(i=0;i<data.text.length;i++) {
                    outputText += "<div class='verse'>" + (i+1) + ". " + data.he[i] + "</div>";
                }
            }

            //Appending Generated Text To Page

            textField.innerHTML = (outputText);
        });
    }

    //set output text

    function setOutput() {
        outputText = "";
        chapter = document.getElementById("chapterInput").value;
        findTehellim();
    }

    //buttons
    
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