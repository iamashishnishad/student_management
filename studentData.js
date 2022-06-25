
 let data = JSON.parse(localStorage.getItem("students")) || [];
//  console.log(data);
function append(){

    let data = JSON.parse(localStorage.getItem("students")) || [];
    console.log(data);
   let container = document.getElementById("container");  
   container.innerHTML=null;
   data.forEach(function(el, index){
        let box = document.createElement('div');

        let img = document.createElement("img");
        img.src=el.image;

        let p = document.createElement("p");
        p.innerText=el.name;


        let p1 = document.createElement("p");
        p1.innerText = el.course;

        let p2 = document.createElement("p");
        p2.innerText = el.unit;

        let p3 = document.createElement("p");
        p3.innerText = el.batch;




        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function () {
          removeItem(el, index);
        });


       box.append(img, p, p1, p2 ,p3, btn);

    //    container.append(div);

    //     console.log(el);

    document.querySelector("#container").append(box);
    });

}

append();
function removeItem(el, index) {
    console.log(el, index);
    data.splice(index, 1);
    console.log(data);
    localStorage.setItem("students", JSON.stringify(data));
    window.location.reload();
  }