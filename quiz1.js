 function change() {
 var header = document.getElementById("CGU123");
 header.innerHTML = "CSIE@CGU";
 var para = document.getElementById("CGU456");
 para.innerHTML = "��򨺻�ΡI�I.";
 }
 function myFunction() {
 var btn = document.createElement("BUTTON");
 btn.innerHTML = "CLICK ME";
document.body.appendChild(btn).addEventListener("click",change);
 }