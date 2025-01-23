let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]
function init() {
    layout();
    showLibrary();
}
function layout() {
    for (let index = 0; index < books.length; index++) {
        document.getElementById('allBooks').innerHTML += //erstellt für jedes ausgelesene Buch einen formartierten Bereich
        `<div class="book" id="book${index}">
            <img src="/book-2022461_640.png">
            <div class="likes">
                <img onclick="toggleLike(${index})" class="like_button" src="/heart-2398770_640.png">
                <span class="current_likes"></span>
            </div>
            <div id="book${index}_details"></div>
        </div>`
    }
}

function showLibrary() {
    for (let index = 0; index < books.length; index++) {
        const bookObject = books[index];
        document.getElementById(`book${index}_details`).innerHTML = bookDetails(bookObject); //füllt details-div mit zugehörigem Inhalt, übergibt der Funktion ein komplettes Buch-Objekt zum Extrahieren der Infos
        if (bookObject.liked == true) {
            document.getElementsByClassName('like_button')[index].classList.add('liked'); //Prüft, ob das Buch zuvor bereits geliket wurde
        }
        document.getElementsByClassName('current_likes')[index].innerHTML = bookObject.likes; //schreibt die aktuelle Like-Zahl rein
    }
    
}

function bookDetails(bookObject) {
    let bookDetails = Object.entries(bookObject) //Objekt wird zum Array umgewandelt
    let result = ""; //leere Text-Variable, wird mit Infos gefüllt
    
    for (let index = 0; index < bookDetails.length; index++) { //for-Schleife zum Auslesen des Arrays
        const singleDetail = bookDetails[index];
        if (singleDetail[0] != "liked" && singleDetail[0] != "likes") { //überspringt das Weitergeben von "liked" & "likes" (wird durch den Like-Knopf dargestellt)
            result += `${singleDetail[0]}: ${singleDetail[1]}<br>`; //speichert formatierten HTML-Code in result
        }
    }
    return result;
}
function toggleLike(index) {
    document.getElementsByClassName('like_button')[index].classList.toggle('liked');
    let bookRef = books[index];
    if (bookRef.liked == true) {
        books[index].likes--;
        bookRef.liked = false;
    } else {
        books[index].likes++;
        bookRef.liked = true;
    }
    showLibrary();
}


function likeButton_pressed() {
    for (let index = 0; index < books.length; index++) {
        const bookObject = books[index];
        if (bookObject.liked == true) {
            document.getElementsByClassName('like_button')[index].classList.add('liked');
        } 
    }
}