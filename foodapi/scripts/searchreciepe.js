  
async function getData(url){
  let res=await fetch(url);
    let data = await res.json();
    return data;
}


function appendData(data, container ){
    data.forEach(({strArea,strMeal,strMealThumb,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strMeasure1,
    strMeasure2,strMeasure3,strMeasure4,strMeasure5})=>{

        let div1=document.createElement("div");
        let area =document.createElement("p");
         area.innerText=strArea;
        let title =document.createElement("p");
         title.innerText=strMeal;
         div1.append(title,area);
         let div2=document.createElement("div");
         let img=document.createElement("img");
         img.src=strMealThumb;
         div2.append(img);

        

       
        

    })
}
export {getData,appendData}