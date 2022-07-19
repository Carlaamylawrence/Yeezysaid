function getKanye(){
    fetch("https://api.kanye.rest/")
.then((res) => res.json())
.then(data =>{ 
  console.log(data);
  const kanye = data.quote;
  document.querySelector("#kanyesaid").innerHTML= kanye;
})
};

// function refreshPage(){
//     window.location.reload();
// }