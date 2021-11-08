 async function search(url){
     let res = await fetch(url);
     let data = await res.json();
      return data;

 }
 
 function appenddata(data,container){
     
    container.innerHTML=null;

      data.forEach(({ strMeal,strMealThumb }) => {
    let div= document.createElement("div");
         let img=document.createElement("img");
         img.src=strMealThumb;
         let name=document.createElement("p");
         name.innerText=strMeal;
         let btn=document.createElement("button");
         btn.innerText="Add to cart"
       
         div.append(img,name,btn);
         container.append(div);
      })
     
    }

 export { appenddata, search}