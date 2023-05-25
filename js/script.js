function hitungLuas() {
  var sisi = parseFloat(document.getElementById("sisi-luas").value);
  var luas = sisi * sisi;
  document.getElementById("output-luas").innerText = "L = " + luas;
  document.getElementById("perhitungan-luas").innerText =
    "L = " + sisi + " x " + sisi;
  document.getElementById("rumus-luas").style.visibility = "visible";
  document.getElementById("perhitungan-luas").style.visibility = "visible";
  document.getElementById("output-luas").style.visibility = "visible";
}

function hitungKeliling() {
  var sisi = parseFloat(document.getElementById("sisi-keliling").value);
  var keliling = 4 * sisi;
  document.getElementById("output-keliling").innerText = "K = " + keliling;
  document.getElementById("perhitungan-keliling").innerText = "K = 4 x " + sisi;
  document.getElementById("rumus-keliling").style.visibility = "visible";
  document.getElementById("perhitungan-keliling").style.visibility = "visible";
  document.getElementById("output-keliling").style.visibility = "visible";
}

function resetForm() {
  document.getElementById("sisi-luas").value = "";
  document.getElementById("output-luas").innerText = "";
  document.getElementById("perhitungan-luas").innerText = "";
  document.getElementById("sisi-keliling").value = "";
  document.getElementById("output-keliling").innerText = "";
  document.getElementById("perhitungan-keliling").innerText = "";
}
