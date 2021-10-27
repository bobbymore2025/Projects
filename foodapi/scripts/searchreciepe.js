
async function search(url) {

  let res = await fetch(url);
  let data = await res.json();
  return data;
}


function appendData(data, container) {
  container.innerHTML=null;
  
  data.forEach(({ strArea, strMeal, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strMeasure1,
    strMeasure2, strMeasure3, strMeasure4, strMeasure5 ,strInstructions}) => {

    let div1 = document.createElement("div");
    let area = document.createElement("p");
    area.innerText = "Area:" + " " + " " + strArea;
    let title = document.createElement("p");
    title.innerText ="Name:" + " " + " " + strMeal;
    div1.append(title, area);
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.src = strMealThumb;
    div2.append(img);

    let div3 = document.createElement("div");
    let table = document.createElement("table");
    let row1 = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "Ingedtiants";
    let th2 = document.createElement("th");
    th2.textContent = "Measurement";
    row1.append(th1, th2);

    let row2 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = strIngredient1;
    let td2 = document.createElement("td");
    td2.textContent = strMeasure1;
    row2.append(td1, td2);


    let row3 = document.createElement("tr");
    let td3 = document.createElement("td");
    td3.textContent = strIngredient2;
    let td4 = document.createElement("td");
    td4.textContent = strMeasure2;
    row3.append(td3, td4);


    let row4 = document.createElement("tr");
    let td5 = document.createElement("td");
    td5.textContent = strIngredient3;
    let td6 = document.createElement("td");
    td6.textContent = strMeasure3;
    row4.append(td5, td6);




    let row5 = document.createElement("tr");
    let td7 = document.createElement("td");
    td7.textContent = strIngredient4;
    let td8 = document.createElement("td");
    td8.textContent = strMeasure4;
    row5.append(td7, td8);

    let row6 = document.createElement("tr");
    let td9 = document.createElement("td");
    td9.textContent = strIngredient4;
    let td10 = document.createElement("td");
    td10.textContent = 5;
    row6.append(td9, td10);

    table.append(row1, row2, row3, row4, row5);


    div3.append(table)
    let div4=document.createElement("div")
    div4.append(div2,div3)
    let div5=document.createElement("div")
    let p1=document.createElement("p");
    p1.innerText="Instructions:"
    let p2=document.createElement("p");
    p2.innerText=strInstructions
    div5.append(p1,p2);
    container.append(div1,div4,div5);





















  })
}
  function appendlatest(data, container){
     container.innerHTML=null;
     data.forEach(({ strMeal, strMealThumb})=>{
      let div = document.createElement("div");
  
      let title = document.createElement("p");
      title.innerText ="Name:" + " " + " " + strMeal;
      let img = document.createElement("img");
      img.src = strMealThumb;
      div.append(img,title);
      container.append(div);

  })
}
export { search, appendData ,appendlatest}