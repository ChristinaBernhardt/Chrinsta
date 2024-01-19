// Define Arrays
let posts = [
    {
        'authorImg': 'img/dog2.jpg',
        'authorName': 'Diddy Dackel',
        'image': 'img/dog.jpg',
        'comments': ['Karlheinz: Das war so ein schöner Tag<br>',],
        'like': 34,
        'isliked': false
    },
    {
        'authorImg': 'img/dog2.jpg',
        'authorName': 'Diddy Dackel',
        'image': 'img/horse.jpg',
        'comments': [],
        'like': 28,
        'isliked': false
    },
    {
        'authorImg': 'img/raccoon.jpg',
        'authorName': 'Willi Waschbär',
        'image': 'img/sea.jpg',
        'comments': [],
        'like': 237,
        'isliked': false
    },
    {
        'authorImg': 'img/owl.jpg',
        'authorName': 'Eule Beule',
        'image': 'img/job.jpg',
        'comments': [],
        'like': 3,
        'isliked': false
    },
];

// Function render 
function render() {
    loadFromLocalStorage()
    const content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        content.innerHTML += generatePostHTML(posts, i);
        showLike(i);
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
            <div id="like-container${i}" class="like-container">
      <img src="img/herzrot.png" class="likeicon-red display-none" onclick="removeLike(${i})" id="likeicon-red${i}">
      <img src="img/herz.png" class="likeicon display-none" onclick="addLike(${i})" id="likeicon${i}"><div id="like-number${i}">Gefällt ${array[i]['like']} Mal</div>
    </div>
        <div id="comments${i}">
        </div>
        <input class="input" id="input${i}"><button class="button" onclick="addComment(${i})">Senden</button>
    </div>
            `;
}

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

// Speichern im Local Storage, Hilsfunktion
function saveToLocalStorage() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}

// Laden aus Local Storage, Hilsfunktion
function loadFromLocalStorage() {
    const helper = JSON.parse(localStorage.getItem('posts'))
    if (helper === null) {
        return;
    }
    else {
        posts = JSON.parse(localStorage.getItem('posts'));
    }
}

function addLike(index) {
    if (posts[index]['isliked'] == true) {
        return;
    } else {
        posts[index]["like"]++;
        document.getElementById(
            `like-number${index}`
        ).innerHTML = `<div id="like-number${index}">Gefällt ${posts[index]['like']} Mal</div>`;
    }
    posts[index]['isliked'] = true;
    showLike(index);
    saveToLocalStorage();
    render()
}

function removeLike(index) {
    if (posts[index]['isliked'] == false) {
        return;
    } else {
        posts[index]["like"]--;
        document.getElementById(
            `like-number${index}`
        ).innerHTML = `<div id="like-number${index}">Gefällt ${posts[index]['like']} Mal</div>`;
    }
    posts[index]['isliked'] = false;
    showLike(index);
    saveToLocalStorage();
    render()

    // let likeCounter = document.getElementById(`like-number${index}`);
    // document.getElementById(`likeicon-red${index}`).classList.add("display-none");
    // document.getElementById(`likeicon${index}`).classList.remove("display-none");
    // posts[index]["like"]--;
    // likeCounter.innerHTML = `<div id="like-number${index}">Gefällt ${posts[index]["like"]} Mal</div>`;
    // saveToLocalStorage()
}

function showLike(index) {
    if (posts[index]['isliked'] == true) {
        document.getElementById(`likeicon-red${index}`).classList.remove("display-none");
        document.getElementById(`likeicon${index}`).classList.add("display-none");
    } else {
        document.getElementById(`likeicon-red${index}`).classList.add("display-none");
        document.getElementById(`likeicon${index}`).classList.remove("display-none");
    }
}
