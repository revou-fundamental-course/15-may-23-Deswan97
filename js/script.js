function hitungluas() {
  var sisiluas = document.getElementById("sisi-luas").value;

  document.getElementsByClassName("result-luas").style.visibility = "visible";
  console.log(sisiluas);
  document.getElementById("output-luas").innerHTML =
    "<span>" + sisiluas + "</span>";
}
