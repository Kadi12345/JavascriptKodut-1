//tühikute eemaldmiseks
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
  }
  
function checkPalindrome() {

    let s=document.getElementById("str").value;  

    let str = s.replace(/ /g, '').toLowerCase();
    let revStr = [...str].reverse().join``;
  
    if (str == revStr){
      alert("See on palindroom");
    } else {
      alert("See ei ole palindroom");
    }
  }