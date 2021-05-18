const profileImg = document.querySelectorAll('.profiles img');
const profileName = document.querySelectorAll('.profiles p');
const profileEmail = document.querySelectorAll('.profiles small')

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(user => {
        for(let i = 0; i < user.data.length; i++) {
            profileImg.getAttribute = 'src';
            profileImg[i].src = user.data[i].avatar;
            profileName[i].textContent = `${user.data[i].first_name} ${user.data[i].last_name}`;
            profileEmail[i].textContent = user.data[i].email;
        }
    })
    .catch(error => {console.log('error', error)}); 
