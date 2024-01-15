// Define Arrays
let posts = [
    {
        'authorImg': 'img/dog2.jpg',
        'authorName': 'Diddy Dackel',
        'image': 'img/dog.jpg',
        'comments': [],
        // 'liked': 'true'
        // likes: 
    },
    {
        'authorImg': 'img/dog2.jpg',
        'authorName': 'Diddy Dackel',
        'image': 'img/horse.jpg',
        'comments': [],
        // 'like': 'false'
    },
    {
        'authorImg': 'img/raccoon.jpg',
        'authorName': 'Willi Waschbär',
        'image': 'img/sea.jpg',
        'comments': [],
        // 'like': 'false'
    },
    {
        'authorImg': 'img/owl.jpg',
        'authorName': 'Eule Beule',
        'image': 'img/job.jpg',
        'comments': [],
        // 'like': 'false'
    },
];

// Function render  (deutsch: machen, leisten, wiedergeben)
function render() {
    // Aufruf der Funktion "laden aus dem Local Storage"
    // loadFromLocalStorage();
    // Definiert eine Variable (const=nicht änderbar) und nimmt aus dem html die ID content
    const content = document.getElementById('content');
    // leeren des HTML mit der id content
    content.innerHTML = '';
    // for-Schleife wird solange ausgeführt bis Länge der Posts leer, hier als i definiert
    for (let i = 0; i < posts.length; i++) {
        // For-Schleife ändert HTML von ID content in neues HTML - hier ausgelagert in neue 
        // Funktion generatePostHTM
        // Der Funktion wird posts und i mitgegeben.
        // ??? Warum muss ich post hier mitgeben? Könnte ich auch unten statt Array den Wert
        // Posts eintragen? ist doch eine globale Variable
        content.innerHTML += generatePostHTML(posts, i);
        loadFromLocalStorage();
        // for-Schleife wird solange ausgeführt bis Länge der Kommentare leer,
        //  Posts bekommt außerdem den Wert i mitgliefert damit der einzelne Post unterschieden werden kann
        // post0, post1, ...
        for (let j = 0; j < posts[i].comments.length; j++) {
            // nicht änderbare Variable comments wird definiert 
            // und auf den Wert aus dem Array zugegriffen
            const comments = document.getElementById(`comments${i}`);
            // Funktion renderPost wird ergänzt 
            // ??? und aufgerufen?, Es werden die Werte posts, i und j mitgegeben
            comments.innerHTML += renderPost(posts, i, j)
        }
    }
}
// Funktion renderPost wird aufgerufen, die mitgegebenen Werte werden nun umbenannt
// ??? Warum lässt man sie nicht gleich???
function renderPost(array, index, index2) {
    // was macht eigentlich dieses return? 
    return  /*html*/`
    <!-- neuer Container wird im HTML definiert -->
    <span>
        <!-- Es wird zugegriffen auf die Variable Array, 
        befüllt mit der ID des posts (post0, post1)
        dem ersten (zweiten, dritten) Wert des array Kommentar und dem ersten(zweiten, dritten)
        kommentar-->
        ${array[index]['comments'][index2]}
    </span>  
    `
}
// Hier wird nun die Funktion aufgerufen, mit der das ausgelagerte HTMl erstellt wird
function generatePostHTML(array, i) {
    // wieder dieses return????
    return  /*html*/`  
    <!-- Der nachfolgende Teil erstellt den Post -->
    <div class="card">
        <div class="author">
            <img class="round" src="${array[i]['authorImg']}">
                <div class="name">${array[i]['authorName']}</div>
        </div>
            <img class="imagePost" src="${array[i]['image']}">
        <div>
            <!-- wenn auf das Herz gedrückt wird, wird die Funktion like aufgerufeb -->
            <img onclick="like(${i})" class="heart" id="heart${i}" src="img/herz.png">
        </div>
        <div id="comments${i}">
        </div>
        <!-- wenn in das inputfeld eingetragen wird, wird nach drücken des Button die Funktion
    addComment aufgerufen, es wird der Wert post0, post 1 etc. mitgegeben -->
        <input class="input" id="input${i}"><button class="button" onclick="addComment(${i})">Senden</button>
    </div>
            `;
}

// Hinzufügen neuer Kommentare
function addComment(index) {
    // änderbare Variable input wird definiert und mit dem wert aus dem inputfeld befüllt
    // es wird außerdem die ID des Posts mitgegebene
    let input = document.getElementById(`input${index}`);
    // Wenn leer, wieder dieses return
    if (document.getElementById(`input${index}`).value === '') {
        return
        // ansonten wir der Wert des inputfeldes in das array gepushed
    } else {
        posts[index]['comments'].push(`Du: ${input.value} <br>`);
    }
    // inputfeld wird geleert
    input.value = '';
    // nachfolgende Funktionen werden aufgerufen
    saveToLocalStorage();
    render();
}

// Speichern im Local Storage, Hilsfunktion
function saveToLocalStorage() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}

// Laden aus Local Storage, Hilsfunktion
function loadFromLocalStorage() {
    posts = JSON.parse(localStorage.getItem('posts'));
}

// Funktion like funzt no goar ned - auskommentiert
//     function like(index) {
//         let like = document.getElementById(`posts${array[index],'like'}`);
//         if (like = true) {
//             document.getElementById(`heart${index}`).src = "img/herz.png";
//     }
//     else { document.getElementById(`heart${index}`).src = "img/herzrot.png";
// } 
//      saveToLocalStorage();
//      render();
//  }
//  function addLike(index) {
//     document
//       .getElementById(`likeicon-red${index}`)
//       .classList.remove("display-none");
//     document.getElementById(`likeicon${index}`).classList.add("display-none");
  
//     posts[index]["like"]++;
  
//     document.getElementById(
//       `like-number${index}`
//     ).innerHTML = `<div id="like-number${index}">GefÃ¤llt ${posts[index]["like"]} Mal</div>`;
//   }
  
//   function removeLike(index) {
//     let likeCounter = document.getElementById(`like-number${index}`);
  
//     document.getElementById(`likeicon-red${index}`).classList.add("display-none");
//     document.getElementById(`likeicon${index}`).classList.remove("display-none");
  
//     posts[index]["like"]--;
  
//     likeCounter.innerHTML = `<div id="like-number${index}">GefÃ¤llt ${posts[index]["like"]} Mal</div>`;
//   }
