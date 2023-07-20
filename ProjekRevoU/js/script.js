var umur = document.getElementById("umur");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var pria = document.getElementById("p");
var wanita = document.getElementById("w");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function hitung(){
 
  if(umur.value=='' || tinggi.value=='' || berat.value=='' || (pria.checked==false && wanita.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `"Semua kolom harus diisi!"`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [umur.value, tinggi.value, berat.value];
  if(pria.checked){
    p.push("male");
  }else if(wanita.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan Berat Badan, Jika BMI kamu berada dalam kategori ini maka kamu dianjurkan untuk menambah berat badan hingga batas normal.';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Sehat!, Jika BMI kamu berada dalam kategori ini maka kamu memiliki berat badan yang sehat.';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan Berat Badan, Jika BMI kamu berada dalam kategori ini maka kamu dianjurkan untuk menurunkan berat badan hingga batas normal.';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obesitas, Jika BMI kamu berada dalam kategori ini maka kamu dianjurkan untuk mengurangi berat badan hingga batas normal.';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `<span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
document.querySelector(".result").scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {
  // Scroll the window to the top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  scrollToTop();
});


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
