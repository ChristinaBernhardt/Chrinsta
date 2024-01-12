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
        content.innerHTML += /* html */`           
        
            <div class="card">
                <div class="author">
                 <img class="round" src="${post['authorImg']}">
                 <div class="name">${post['authorName']}</div>
                </div>
            <img class="imagePost" src="${post['image']}">
            <div>
    
            <img onclick="like(${i})" class="heart" id="heart${i}" src="/img/herz.png"> 
            </div>

            <div>${post['comments']}</div>
            <input class="input" id="input${i}"><button class="button" onclick="addComment(${i})">Senden</button>
            </div>
        `;

   
    }
}

function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);
    render();
    input.value = '';
}
function like(index){
    document.getElementById(`heart${index}`).src="/img/herzrot.png";

}
