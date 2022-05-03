//JS er singelthreadet

// I dette eksempel bruges en form for timeout der gør kaldet usynkront. Console log vil derfor kører før setInterval
/*setInterval(() => {
    console.log("seccond")
}, 10);

console.log("first") */

// Vi vil ikke blokkere vores applikation
//Hvad betyder det så? - Hvis applikationen bliver blokeret, kan applikation ikke kører

// Hvornår skal vi håndtere async -F.eks. fetch, fordi du ikke ved hvornår hvis nogensinde at data er "klar"
// Eller hvis vi skal læse filer (file handling) Saving, reading alt med file handling er async
// Eller ved timeout & setInterval
// Databaser skal også være async

// Promises bruger callbacks under hjelmen, da callbacks løser async. Promise er syntetisk sukker af callbacks
// Promises er ikke bedre end callbacks, de bruger dem bare, men de bruges for at undgå callback hell
// Et promise kan være i 2 stadier - pending stadge and fullfilled stadge. Og når den er fullfilled kan den være i 2 andre stadier = Resolved & rejected
// Når et prmoise er fullfilled,kan det derfor enten blive resolved eller rejected


// Hvis den rejectes SKAL der catches error (linje 30), ellers hvis den resolves, skal der behandles med .then (linje 29)
new Promise((resolve, reject) => {
    try {
        //throw new Error("bomb")
        resolve("everuthing went well")

    } catch(errorMessage) {
        reject("Something went wrong " + errorMessage);
    }

})
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage)); 




function somethingGoodsomethingBad() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            try {
                resolve("Good")
            } catch {
                reject("Bad")
            }
        }, 4000);
    });
}

somethingGoodsomethingBad()
.then(message => console.log(message));

// Async await
// IIFE- Imidiate invoked function - Tilføj paranteser rund tom functionen og lav et nyt sæt paranteser efter functionen som nedenunder
(async function callMyCustomPromise() {

    const message = await somethingGoodsomethingBad();
    console.log(message);

})()









