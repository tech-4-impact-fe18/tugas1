let soal = [
    "Dalam sebulan terakhir, seberapa sering Anda merasa kesal karena sesuatu yang terjadi secara tidak terduga?",
    "Dalam sebulan terakhir, seberapa sering Anda merasa bahwa Anda tidak dapat mengendalikan hal-hal yang penting dalam hidup Anda?",
    "Dalam sebulan terakhir, seberapa sering Anda merasa marah karena hal-hal yang terjadi di luar kendali Anda?",
    "Dalam sebulan terakhir, seberapa sering Anda merasa yakin terhadap kemampuan Anda dalam menangani masalah pribadi?",
    "Dalam sebulan terakhir, seberapa sering Anda merasa gelisah dan stres?"
];
let indexSoal = 0
let skor = 0
let hasil = 0
function setSkor(angka){
    skor = angka

};

let last = document.getElementById('selesai');
function finish (){
    last.style.display = "block";
    selanjutnya.classList.toggle("selanjutnya");
}

function result() {
    
    if(hasil <=7) {
        window.location.href="result.html";
    }else if(hasil <=15){
        window.location.href="result2.html";
    }else {
        window.location.href="result3.html";
    }
}

let selesai = document.getElementById("next");
let selanjutnya = document.getElementById("next");
let tagSoal = document.getElementsByTagName("h5")[0];
selanjutnya.addEventListener("click", function(){
    hasil += skor; 
    indexSoal += 1
    tagSoal.innerText = soal[indexSoal];
    console.log(hasil);
    if(indexSoal == soal.length-1){
        return finish()
    }
});