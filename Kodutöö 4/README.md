Ülesanne 1

Vasta küsimustele.
1. Mis on CDN Kirjuta näide, kus kasutad oma HTML lehel CDN'i mõne CSS ja/või JS faili importimiseks.

CDN (Content delivery network) on sisuedastusvõrk. See on suur piirkonniti laiali paigutatud veebi puhverserverite võrk, mis on mõeldud kasutajatele kindlate omadustega ja kiirusega teenuse tagamiseks. Tuntumate CDN-i teenuste osutajate ja kasutajate hulka kuuluvad näiteks Akamai, Facebook ja Google.

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> Bootstrapi lisamine CDN-ga

2. Mis on VCS (Version Control System) e versioonihaldus ja mis eesmärke see täidab tarkvaraarenduses? Too näiteid populaarseimatest VCS -dest.


See annab kasutajatele võimaluse arvet pidada arenduses tehtud muudatuste üle. See lased arendajatel töötada koos ja eraldada ülesanded läbi branchide. Salvestab koodi muutmise ajalugu ja vigade korral on lihtne leida, kust see tuleb. Populaarsemad: >GitHub, GitLab, Beanstalk, PerForce, Apache Subversion, AWS CodeCommit jne


3. Mis on code-review? Miks seda tehakse? Kes seda tegema peaks?

Parandav ja kvaliteeti parandav ning riske maandav süsteem. Seda peaks tegema keegi, kes pole koodi autor. 


Ülesanne 2 (Teadmiste test)

Tee test: https://www.w3schools.com/quiztest/quiztest.asp?qtest=JavaScript
Ole enda vastu aus - kasuta vaid seni omandatud teadmisi.
Ülesande vastuseks kirjuta saadud tulemus.
Result:
23 of 25
92%

You can be proud of yourself!

Time Spent
2:34

Ülesanne 5 (Levinud praktikad)

Mis on event delegation ja mis juhtudel ta hea on?- See tähndab seda, et üks event listener lisatakse tervele konteinerile ja igale selle elemendile on võimalik eraldi juurde pääsada, kui sellele reaalselt vajutatakse. Kui on pikk list asjadest, tuleks kindlasti kasutada seda, mitte igale asjale eraldi event listeneri lisamist.

Mis on closure? See tähendab, et sisemisel funktsioonil on juurdepääs muutujatele ja parameetritele, mis asuvad funktsioonist väljaspool. Samuti annab see võimaluse välise muutujate üle kirjutamiseks.

Mis on throttling? Milleks see hea on?- see määrab ära, mis aja pärast saab funktisooni uuesti äratada. Kui vahepeal tehakse päringuid, siis neid ei realiseerita enne, kui määratud aeg saab läbi, samas jääb see mällu ja kui määratud aja pärast uuesti päringut ei esitada realiseeritakse vahepeal esitatud päring siiski 1 kord. Väga head kassutust polegi, kuid näiteks, et peatada nupuvajutuse spämmimine.Nõitesk võib sekundi jooksul jteha 20 klikki, aga sellega saab teha nii, et saadetakse vaid 1 päring 1 sekundi jooksul.

Mis on debouncing? Milleks see hea on? Kasutatakse näiteks automaatsel salvestamisel. tähendab põhimõtteliselt seda, et kui sa mini päringu lõpetad, siis küsib, kas soovid jätkata, kui ei siis salvestab, kui jätkad siis peale uue asja lisamist küsib uuesti, kas soovid jätkata. Iga kord, kui kasutaja midagi lisab, siis proovib salvestada.Salvestamine lõpetatakse, kui mingi aja jooksul pole kasutaja olnud aktiivne, v uusi asju lisanud.

Ülesanne 6 (jQuery)

Mis on üks kõige enam kasutatud javascripti teek jQuery?- jQuery on JavaScripti teek, mis keskendub JavaScripti ja HTML-i vastastikusele mõjule. jQuery raamistik võimaldab saada kergesti juurdepääsu ükskõik missugusele DOM-elemendile, pöörduda DOM-elementide sisu ja atribuutide poole ning nendega manipuleerida. Samuti pakub jQuery raamistik mugavat API-d AJAX-iga töötamisel.


Too välja selle head küljed võrreldes VanillaJS'ga. - seal saab osasid javascripti koode kirjutada palju lühemalt.


Too välja ka mõned miinused jQuery kasutamisel.- on aeglasem, tihti on vahe koodi pikkusel väga väike.

