document.addEventListener("DOMContentLoaded", () => {
const nameList = document.getElementById('name');
const usernameList = document.getElementById('username');
const emailList = document.getElementById('email');
const companyNameList = document.getElementById('company');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users =>{
    users.forEach(user => {
        const liName = document.createElement("li");
        liName.innerHTML = user.name;
        nameList.appendChild(liName);

        const liUsername = document.createElement("li");
        liUsername.innerHTML = user.username;
        usernameList.appendChild(liUsername);

        const liEmail = document.createElement("li");
        liEmail.innerHTML = user.email;
        emailList.appendChild(liEmail);

        const liCompanyName = document.createElement("li");
        liCompanyName.innerHTML = user.company.name;
        companyNameList.appendChild(liCompanyName);
    })
})
.catch(err => {
    console.log("Ha ocurrido un error: " + err);
})
})