﻿//css
document.getElementById("mycss").innerHTML =
	"<link rel='stylesheet' href='/style.css'>"
	+"<link rel='icon' type='image/png' href='/webicon.png'>";
//header
document.getElementById("myHead").innerHTML =
	"<div><span class=header><img src='/logo.png' class=header> KKB通販</span></div>";

document.getElementById("myNav").innerHTML =
"<div style='height:35px; background-color: #FFFFCC; border: 3px solid #FFCC33; width:340px; display: inline-block;'><b><span style='font-size: 20px; vertical-align:middle'><a href='/oct.html'><center>23年2月1日起停收八達通</center></a></span></b></div>　<div style='height:35px; background-color: #FFFFCC; border: 3px solid #FFCC33; width:470px; display: inline-block;'><b><span style='font-size: 20px; vertical-align:middle'><a href='/done.html'><center>結業通知（落單、面交及郵寄、退款安排）</center></a></span></b></div><br><br>"
	+ "<ul id='navLinks'>"
	+ "<li><a href='/record/'>查單</a></li>"
	+ "</ul>";


document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " KKB TSUUHAN. All"
	+ " rights reserved.</p>";

//orderlist
var coll = document.getElementsByClassName("collap");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collaplist = this.nextElementSibling;
    if (collaplist.style.display === "block") {
      collaplist.style.display = "none";
    } else {
      collaplist.style.display = "block";
    }
  });
};
