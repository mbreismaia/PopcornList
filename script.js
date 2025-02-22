/* Manipulando o DOM 
Utilize getElementByALGO("algo") ou querySelector("#especifica")
*/

const allMovies = document.querySelector('.movies')
console.log(allMovies)

function details(){
    console.log('ESSES SÃO OS DETALHES! IHUU')
}

allMovies.addEventListener("click", details); 
