Loo programm (numbrite arvamise mäng), mis laseb kasutajal arvata numbreid vahemikus 1 - 10. 
Kui kasutaja arvab numbri õigesti siis saab ta ühe punkti ja liigub 2. tasemele. Järgnevalt laseb programm arvata numbrit vahemikus 1 - 20. 
Kui kasutaja arvab ka selle numbri õigesti siis saab ta veel ühe punkti ja liigub 3. tasemele. 
Järgnevalt laseb programm arvata numbrit vahemikus 1 - 30.
Järgnevad tasemed sama loogika järgi: numbri arvamine vahemikus 1 - 40; 1 - 50; 1 - 60 jne (numbrivahemik kasvab igal tasemel 10 võrra).

Pane tähele, et kasutaja võib ühel tasemel arvata numbrit kuni 3 korda. Kui kolme korraga ei õnnestu õiget numbrit tabada siis saab mäng läbi. 
Kasutaja peab nägema mis numbreid ta antud tasemel juba pakkunud on.
Kasutaja peab nägema mis on tema skoor.
Kasutaja peab nägema mitmes tase tal parasjagu on.
Vale numbri sisestamisel tuleb kasutajale anda vihjeid kas õige number on suurem või väiksem tema sisestusest.
Mängu lõppedes peab kasutaja nägema mis oli õige number.
Kasutajal peab olema võimalus alustada mängu uuesti - nupp "Start over" vms.
Kogu interaktsioon peab toimuma HTML poolel (st Javascript alert, prompt, confirm funktsioone mitte kasutada).

Vihje kuidas genereerida suvaline täisarv vahemikus 1 - 10:
https://www.w3schools.com/js/js_random.asp

let randomNumber = Math.floor(Math.random() * 10) + 1; 