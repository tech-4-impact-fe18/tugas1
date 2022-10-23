let container = document.getElementsByClassName('container') [0];
let nama = document.getElementById('nama');
let email = document.getElementById('email');
let password = document.getElementById('password'); 
let confirm_pass = document.getElementById('konfirmasi');
let register = document.getElementById("register")

async function daftar(data) {
    try {
        let result = await fetch("https://634f638adf22c2af7b502de8.mockapi.io/users", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              },
            
        })
        alert("Anda Berhasil Registrasi", result);
        window.location.href="landing-page.html"
    } catch (error) {
        alert("gagal register");
    }
}

register.addEventListener("click", (event) => {
    
    event.preventDefault()

    let user_regis = {
        nama : nama.value,
        email : email.value,
        password : password.value 
    };
    if(nama.value && email.value && password.value){
        return daftar(user_regis)
    }
    return alert("Form Harus Diisi")

//     let register = user_regis.nama_user == user.nama &&
//                     user_regis.email_user == user.email &&
//                     user_regis.password_user == user.password;
    
//     if (register){
//         console.log("Selamat Anda Berhasil Daftar");
//     }else{
//         console.log("Maaf anda gagal Daftar");
//     }
})