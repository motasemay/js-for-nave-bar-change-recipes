const selection=document.querySelectorAll("a");
for(let i=0;i<selection.length;i++)
    selection[i].onclick=displayData;
async function fetchData(e){
    let recipe='';
    if(e==undefined){ 
         recipe="onion";

} else {
         recipe=e.target.dataset.name;

    }
    const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
    const data=await response.json();
    return data.recipes;
}

async function displayData(e){
    const foods=await fetchData(e);
    const result=foods.map(function(recipe){
        return `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image_url}"/>
        `;
    })
  document.querySelector(".foods").innerHTML=result;

}
displayData();