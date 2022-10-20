let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword'); 
const loginButton = document.getElementById('loginButton');
const loginGoogle = document.getElementById('loginGoogle');


loginButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    // console.log(inputEmail.value);
    // console.log(inputPassword.value);
    fetch('https://6350b1d078563c1d82c627f2.mockapi.io/persons')
        .then(response => response.json())
        .then(response => {
            for (let i in response) {
                // console.log(response[i].email);
                // console.log(response[i].password);
                if(inputEmail.value == "" || inputPassword.value == "") {
                    console.log('lengkapi email dan password kamu');
                    break
                } else {
                    if(inputEmail.value == response[i].email && inputPassword.value == response[i].password) {
                        console.log('okee');
                        alert('login berhasil');
                        // location.reload()
                        break;
                    } 
                    // else {
                    //     console.log('noo');
                    //     // alert('salah')
                    // }
                }
            }
            // console.log('akun tidak ada');

        })
})


