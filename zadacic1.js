function ispis() {
    document.getElementById("tag").innerHTML = "";
    document.getElementById("tag2").innerHTML = "";
    document.getElementById("tag3").innerHTML = "";
    document.getElementById("tag4").innerHTML = "";
    var a = document.getElementById("prvi");
    if (a.checked) {
        document.getElementById("tag").innerHTML = screen.height;
    }
    var b = document.getElementById("drugi");
    if (b.checked) {
        document.getElementById("tag2").innerHTML = screen.width;
    }
    var c = document.getElementById("treci");
    if(c.checked){
        document.getElementById("tag3").innerHTML = screen.availHeight;
    }
    var d = document.getElementById("cetvrti");
    if(d.checked){
        document.getElementById("tag4").innerHTML = screen.availWidth;
    }


}
var prozorcic;
function otvori() {
     prozorcic=window.open("prozorcic","width:100","height:100");
}
function zatvori(){
        prozorcic.close("prozorcic")
}
var ara;
var ar=[];
var joinaj;
function ispisi(){
    joinaj=ar.push(window.location.href, window.location.protocol, window.location.hostname, window.location.pathname);
    ara=document.getElementById("tagcina").innerHTML;
    ara=joinaj;


}





