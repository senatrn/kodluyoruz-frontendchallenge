
// Yeni element ekleme
function newElement(){
   var li=document.createElement("li");
   var inputValue = document.getElementById("task").value;
   var textnode = document.createTextNode(inputValue); 
   li.appendChild(textnode);

   if(inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0){
       $(".error").toast("show");
   }else{
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
}
}

// Close buton ekleme
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

