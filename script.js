// Arrays definieren
let posts = [
    {
        'authorImg': 'img/dog2.jpg',
        'authorName': 'Diddy Dackel',
        'image': 'img/dog.jpg',
        'comments': []
    },
    {
        'authorImg': 'img/dog2.jpg',
        'authorName': 'Diddy Dackel',
        'image': 'img/horse.jpg',
        'comments': []
    },
    {
        'authorImg': 'img/raccoon.jpg',
        'authorName': 'Willi Waschbär',
        'image': 'img/sea.jpg',
        'comments': []
    },
    {
        'authorImg': 'img/owl.jpg',
        'authorName': 'Eule Beule',
        'image': 'img/job.jpg',
        'comments': []
    },
];

function render() {
    loadFromLocalStorage();
    const content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        content.innerHTML += generatePostHTML(posts, i);
        for (let j = 0; j < posts[i].comments.length; j++) {
            const comments = document.getElementById(`comments${i}`);
            comments.innerHTML += renderPost(posts, i, j)
        }
    }
}

function renderPost(array, index, index2) {
    return  /*html*/`
    <span>
        ${array[index]['comments'][index2]}
    </span>  
    `
}

function generatePostHTML(array, i) {
    return  /*html*/`  
    <div class="card">
        <div class="author">
            <img class="round" src="${array[i]['authorImg']}">
                <div class="name">${array[i]['authorName']}</div>
        </div>
            <img class="imagePost" src="${array[i]['image']}">
        <div>
            <img onclick="like(${i})" class="heart" id="heart${i}" src="img/herz.png">
        </div>
        <div id="comments${i}">
        </div>
        <input class="input" id="input${i}"><button class="button" onclick="addComment(${i})">Senden</button>
    </div>
            `;
}

// Hinzufügen neuer Kommentare
function addComment(index) {
    let input = document.getElementById(`input${index}`);
    if (document.getElementById(`input${index}`).value === '') {
        return
    } else {
        posts[index]['comments'].push(`Du: ${input.value} <br>`);
    }
    input.value = '';
    saveToLocalStorage();
    render();
}

// Speichern im Local Storage
function saveToLocalStorage() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}

// Laden aus Local Storage
function loadFromLocalStorage() {
    posts = JSON.parse(localStorage.getItem('posts'));
}

// Funktion like
function like(index) {
    document.getElementById(`heart${index}`).src = "img/herzrot.png";
}
