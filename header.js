//css
document.getElementById("mycss").innerHTML =
	"<link rel='stylesheet' href='/style.css'>"
	+"<link rel='icon' type='image/png' href='/webicon.png'>";
//header
document.getElementById("myHead").innerHTML =
	"<div><span class=header><img src='/logo.png' class=header> KKB通販</span></div>"
document.getElementById("myNav").innerHTML =
	"<ul id='navLinks'>"
	+ "<li><a href='/record/'>查單</a></li>"
	+ "<li><a href='https://www.kkbee.net/depo' target='_blank'>入訂填表</a>"
	+ "<li><a href='/yahooauc/'>日拍/販售App代購</a></li>"
	+ "<li><a href='/tsuuhan/'>一般通販代購</a>"
	+ "<li><a href='/time/'>交收時間表</a></li>"
	+ "</ul>";
document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " KKB TSUUHAN. All"
	+ " rights reserved. <a href='/terms/'>Terms & Conditions, Refund & return, Privacy Policy</a></p>"
	+ "<p id='contact'><a href='mailto:kkb.tsuuhan@gmail.com'>mail Us</a> / "
	+ "<a href='https://wa.me/85261431227'>Whatsapp us</a></p>";

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