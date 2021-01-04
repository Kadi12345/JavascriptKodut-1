1. Mis on mitmedimensiooniline massiiv? Too näide kasutades Javascripti.
- Vihje: http://www.javascripttutorial.net/javascript-multidimensional-array/
Mitmedimensiooniline massiiv tähendab, et üks massiiv sisaldab teiste/teisi massiive. Massiiv massiivi sees.
Näitleteks: const users = [['Kadi', 33], ['Sven', 40]];
 
2. Kuidas püüda ja töödelda vigu Javascripti poolel?  Too näide kasutades Javascripti. 
- Vihje: https://www.w3schools.com/jsref/jsref_try_catch.asp


Kõigepealt kasutame ´try´ avaldist, mis määrab valitud koodiplokki testimiseks, samal ajal, kui seda käivitatakse.
Siis kasutame ´catch´ avaldist, et defineerida milline koodiploki osa käivitatakse, kui ´try´ plokis tekib error.
Lõpuks kasutame ´finally´ avaldist, mis laseb käivitada koodiploki, olenemata try ja catch plokid tulemusest.
Catch ja finally avaldised on valikulised, kuid try avaldist kasutades, peab kas mõlemaid neid või vähemalt ühte neist kasutama.
Lisaks saab kasutada avaldist ´throw´. Selle puhul kuvatakse kasutajale kohandatud veateade, kui kasutame try ja catch avaldist.
 <p id="demo"></p>
<script>
try {adddlert("Welcome guest!");}
catch(err) {document.getElementById("demo").innerHTML = err.message;}
</script>
 
 
 
3. Kuidas tekitada erindeid (exceptions) Javascriptis. Too näide.
- Vihje: https://www.w3schools.com/jsref/jsref_throw.asp


Erandeid tekitatakse siis, kui sisestatud väärtus on vale. Error püütakse kinni ´catch´avaldisega ja väljastatakse errori sõnum. 
catch(err) {message.innerHTML = "Input " + err;}
Teine variant on kasutada avaldist ´throw´. See lubab väljastada kohandatud veateate, mis võib olla sõnaühe, number, tõeväärtus või objekt. throw "Too big"; või throw 500;

4. Kirjuta näide, mis kombineerib kahte eelmist küsimust (erindi loomine ja püüdmine).
  try {if(x == "") throw "is Empty";}
  catch(err) {message.innerHTML = "Input " + err;}


5. Mida teeb finally blokk?
´finally´ plokk laseb käivitada koodiploki, olenemata try ja catch plokkide tulemusest. See tagastab lubaduse, kui kood on läbitud (kas täidetud või tagasi lükatud) käivitatakse see lubadus. Ehk laseb koodil edasi joosta, hoolimata sellest, kas eelnevates etappides oli viga või mitte.

6. Mis on HTML elemendi data attribuut?
- Vihje: https://www.w3schools.com/tags/att_global_data.asp
Data atribuuti kasutatakse, et hoida privaatselt  kohandatud andmeid aplikatsiooni või lehe jaoks. Annab võimaluse manustada kohandatud andmeid HTML elementidesse. Saab kasutada lehe JavaScriptis, et luua paremaid kasutajakogemusi ilma Ajaxi, või serveripoolsete andmebaasi päringuteta.


7. Kirjuta kood, mis eraldab data attribuudi "coordinate" elemendist ja prindib selle väärtuse konsooli:
<p data-coordinate-x="1234">Mingisuvatekst</p>
<script> function myFunction() {const coordinate = document.getElementsByTagName("p"); }
p.dataset.coordinate-x
</script>
 
 
8. Mis vahe on localStorage VS sessionStorage?
localStorag salvestab info ilma igasuguse aegumise tähtajata.
sessionStorage salvestab info vaid sessiooni ajaks, kui browser suletakse, siis kaob ka kogu info.

9. Mis on "küpsised"?
- Vihje: https://www.w3schools.com/js/js_cookies.asp
Info, mis on talletatud pisikestes tekstifailides, meie arvutis. Küpsised lasevad arvutil kasutaja info meelde jätta. Kui leht saadab päringu serverile, saadetakse küpsised koos päringuga ja nii saab server vajaliku info, et mäletada kasutaja andmeid.
