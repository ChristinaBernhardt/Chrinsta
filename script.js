let posts = [ 
    {
        'authorImg': '/img/dog2.jpg',
        "authorName": 'Diddy Dackel',
        "image": '/img/dog.jpg',
        "comments": []
    },
    {
        'authorImg': '/img/dog2.jpg',
        "authorName": 'Diddy Dackel',
        "image": '/img/horse.jpg',
        "comments": []
    },
    {
        'authorImg': '/img/raccoon.jpg',
        "authorName": 'Willi Waschbär',
        "image": '/img/sea.jpg',
        "comments": []
    },    {
        'authorImg': '/img/owl.jpg',
        "authorName": 'Eule Beule',
        "image": '/img/job.jpg',
        "comments": []
    },
   ];

function render(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        content.innerHTML += `           
        
            <div class="card">
                <div class="author">
                 <img class="round" src="${post['authorImg']}">
                 <div class="name">${post['authorName']}</div>
                </div>
            <img class="imagePost" src="${post['image']}">
            <div>
    
            <img onclick="like()" class="heart" id="heart" src="/img/herz.png"> 
            </div>

            <div>${post['comments']}</div>
            <input class="input" id="input${i}"><button class="button" onclick="addComment(${i})">Senden</button>
            </div>
        `;

        // let authorName = document.getElementById(`authorName${i}`);
        
        // for (let j = 0; j < author['comments'].length; j++) {
        //     const comment = author['comments'][j];
        //     authorName.innerHTML += `<div>${comment}</div>`;
        // }
        // <img class="like" src="/img/heart.jpg>
        // <div><img class="like" src="/img/heart.jpg></div>
    
    }
}

function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);
    render();
    input.value = '';
}
function like(){
    getElementById('heart').innerHTML=`src="/img/herzrot.png"`;
}

// function render(){
//     let content = document.getElementById('content');
//     content.innerHTML = '';

//     for (let i = 0; i < bundeslaender.length; i++) {
//         const land = bundeslaender[i];
//         content.innerHTML += `
//             <div class="card">
//                 <h2>${land['name']}</h2>

//                 <div id="landcontent${i}"></div>
//                 <input id="input${i}"><button onclick="addComment(${i})">OK</button>
//             </div>
//         `;

//         let landcontent = document.getElementById(`landcontent${i}`);
        
//         for (let j = 0; j < land['comments'].length; j++) {
//             const comment = land['comments'][j];
//             landcontent.innerHTML += `<div>${comment}</div>`;
//         }
    
//     }
// }


// function addComment(index) {
//     let input = document.getElementById(`input${index}`);
//     bundeslaender[index]['comments'].push(input.value);
//     render();
//     input.value = '';
// }