/*global console*/

//change the content of tag-line:
var msg = "";
var head = document.getElementById("tag-line");
var tag1 = document.getElementById("tag-line-1").innerHTML;
var tag2 = document.getElementById("tag-line-2").innerHTML;
var tag3 = document.getElementById("tag-line-3").innerHTML;
var tag4 = document.getElementById("tag-line-4").innerHTML;
var tag5 = document.getElementById("tag-line-5").innerHTML;
var tag6 = document.getElementById("tag-line-6").innerHTML;
var tag7 = document.getElementById("tag-line-7").innerHTML;
var tag8 = document.getElementById("tag-line-8").innerHTML;
var tag9 = document.getElementById("tag-line-9").innerHTML;
var tag10 = document.getElementById("tag-line-10").innerHTML;
var tag11 = document.getElementById("tag-line-11").innerHTML;
var tag12 = document.getElementById("tag-line-12").innerHTML;
var tag13 = document.getElementById("tag-line-13").innerHTML;
//console.log(head);

//access <header>
var headerElement = document.querySelector(".bg-main-content");
console.log(headerElement);

//access <ul> that belongs to <header>
var ulElement = headerElement.getElementsByTagName("h2");
//console.log(ulElement);

//ACCESS all <li> tags from <ul> that belongs to <header>



//loop through <li> elements and access the content of each link
//that is nested inside <li> tags:

//scnoping array elements inside string:

var collect = head.innerHTML;
msg += collect+"\n"+"--------------------------------------------"+"\n";
msg += tag1+"\n";
msg += tag2+"\n";
msg += tag3+"\n";
msg += tag4+"\n";
msg += tag5+"\n";
msg += tag6+"\n";
msg += tag7+"\n";
msg += tag8+"\n";
msg += tag9+"\n";
msg += tag10+"\n";
msg += tag11+"\n";
msg += tag12+"\n";
msg += tag13+"\n";
alert(msg);