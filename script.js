let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');
const loginButton = document.getElementById('loginButton');
const loginGoogle = document.getElementById('loginGoogle');
const bLogin = document.getElementById('b-login');
const bRegister = document.getElementById('b-register');
const dUser = document.getElementById('d-user');
let userName = document.getElementById('userName');


// akses API
// tangkap API jika sukses menggunakan .then
// tangkap API jika error menggunkan .catch
// cek apakah input kosong atau tidak
// cek akun persons apakah ada di APi
// validasi login sukses
// login sukses, button masuk dan daftarnya hilang digantikan nama user
// gunakan classList.toggle

fetch('https://6350b1d078563c1d82c627f2.mockapi.io/persons')
    .then(response => response.json())
    .then((persons) => {

        // console.log(persons);
        loginButton.addEventListener('click', () => {
            let email = inputEmail.value;
            let password = inputPassword.value;

            if (email !== "" && password !== "") {
                for (let i = 0; i < persons.length; i++) {
                    // login berhasil
                    if(email == persons[i].email && password == persons[i].password) {
                        return loginSuccess(persons[i].name)
                    }
                }

            } else {
                return alert('Lengkapi email dan password kamu')
            }
        });

        const loginSuccess = (user) => {
            alert('login berhasil');
            bLogin.classList.toggle('b-none')
            bRegister.classList.toggle('b-none')
            dUser.classList.toggle('d-user')
            userName.innerHTML = user
            // window.location.href = "index.html";
            return;
        }

    })
    .catch((err) => {
        console.error(err);
    });






















// loginButton.addEventListener('click', (ev) => {
//     ev.preventDefault()
//     // console.log(inputEmail.value);
//     // console.log(inputPassword.value);
//     fetch('https://6350b1d078563c1d82c627f2.mockapi.io/persons')
//         .then(response => response.json())
//         .then(response => {

//             // console.log(response);
//             // for (let i in response) {
//             //     // console.log(response[i].email);
//             //     // console.log(response[i].password);
//             //     if(inputEmail.value == "" || inputPassword.value == "") {
//             //         console.log('lengkapi email dan password kamu');
//             //         break
//             //     } else {
//             //         if(inputEmail.value == response[i].email && inputPassword.value == response[i].password) {
//             //             console.log('okee');
//             //             alert('login berhasil');
//             //             // location.reload()
//             //             break;
//             //         }
//             //         else {
//             //             console.log('noo');
//             //             // alert('salah')
//             //         }
//             //     }
//             // }
//             // console.log('akun tidak ada');

//         })
// })


