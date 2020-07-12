// 100 POSTS
function display2(post){
    return `

        <div class = "posts">
            <h4>ID: <span>${post.id}<span></h3>
            <h4>Title: <span>${post.title}</span></h3>
            <h4>Body: <span>${post.body}</span></h4>
        </div>
    `
}

var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(){
    var myreq = new XMLHttpRequest();
    myreq.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    myreq.onload = function(){
        var result = JSON.parse(myreq.responseText);
        var insert = document.getElementById('test2').innerHTML = 
        `
        <h3> Number of posts: <span>${result.length}</span> </h3>
            ${result.map(display2)}
        `
    }
    myreq.send();
    btn3.classList.add('btn-hide');
});