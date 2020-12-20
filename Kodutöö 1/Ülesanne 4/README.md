Küsi kasutajalt sisestuseks suvaline sõna või fraas.
Kontrolli kas sisestuse näol on tegu palindroomiga. 

Teavita kasutajat tulemusest: kas sisestatud sõna või lause on palindroom või mitte.

Mis on palindroom? "aias sadas saia" on palindroom - Googelda kui ei usu :)

NB!
Kirjuta kood nii, et Javascript loetakse HTML-s sisse eraldi failist (js faililaiendiga).
Näide: <script src="myscript.js"></script>

Vihjed:
// Stringi tagurpidi pööramine
let str = 'tere';
let reversed = str.split('').reverse().join(''); // tulemus: eret

Kood peaks olema ka tõstutundetu, abiks osutuvad järgnevad funktsioonid:

let str = 'TeRe';
let lowerCase = str.toLowerCase(); // tere
let upperCase = str.toUpperCase(); // TERE
 
Kood peaks eemaldama ka üleliigsed tühikud. Kuidas seda Javascriptis teha? Selle jätan Teile esialgu mõistatamiseks. Kui ei õnnestu - pole hullu.