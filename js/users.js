// AVATARS
function display(user){
    return `
        <div class = "user">
            <img src = "${user.avatar_url}"/>
            <div class = "user-details">
                <h4> User ID: <span>${user.id}</span> </h4>
                <h4> Login: <span>${user.login}</span></h4>
                <h4> User Type: <span>${user.type}</span> </h4>
                <h4>User URL: <a href = "${user.html_url}" target="_blank">Смотреть</a></h4>
            </div>
        </div>
    `
}
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    var reqest = new XMLHttpRequest();
    reqest.open('GET', 'https://api.github.com/users');
    reqest.onload = function(){
        var data = JSON.parse(reqest.responseText);
        var test = document.getElementById('test');
        test.innerHTML = `
            <h3> Number of users: <span>${data.length}</span> </h3>
            ${data.map(display).join('')}
        
        `
    }
    reqest.send();
    btn2.classList.add('btn-hide');
});