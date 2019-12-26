var btn2 = document.getElementById("btn2").addEventListener("click",getPost2);
var con = 0;
var div2 = document.getElementById("cardDiv2");
function getPost2(){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((res)=>{
    return res.json();
  })
  .then((post)=>{
    for(let index = 0; index<10; index++){
      div2.innerHTML+=`
        <div class="card col-3 m-1 mx-auto">
          <img class="card-img-top" src="${post[con].thumbnailUrl}">
          <div class="card-body">
            <h5 class="card-title">${post[con].id}</h5>
            <p class="card-text">${post[con].title}</p>
          </div>
        </div>
      `
      con = con+1;
    }
  })
  .catch((error)=>{
    console.log(error);
  })
}




