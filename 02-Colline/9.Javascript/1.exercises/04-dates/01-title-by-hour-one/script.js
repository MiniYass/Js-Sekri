/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let date=new Date();
    let t=date.getHours();

    if (t <=18){
        document.getElementById("target").innerHTML = "Bonjours"
    }
    else{
        document.getElementById("target").innerHTML = "Bonswarrrr"
    }

    

    // document.getElementById("target").innerHTML = "Bonsoir"
    
})();