
fetch("https://test-api-v1-vert.vercel.app/v1/blogs/")
.then(res => res.json())
.then(info => {
    console.log(info);

const container = document.getElementById("dataContainer");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";



for (let i = 0; i < 2; i++) {
    const data = info[i];

    // card 
    const card = document.createElement("div");
    card.style.width = "400px";
    card.style.height = "450px";
    card.style.margin = "15px";
    card.style.padding = "10px";
    card.style.backgroundColor = "white";
    card.style.boxShadow = "0px 2px 4px gray ";
    card.style.borderRadius = "15px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent="center"

    // image
    const img = document.createElement("img");
    img.src = data.image;
    img.style.width = "90%";
    img.style.height = "300px";
    img.style.borderRadius = "8px";
    

    // title
    const title = document.createElement("h3");
    title.innerHTML = data.title;
    title.style.textAlign = "center";
    title.style.margin = "10px 0 5px 0";


     const author=document.createElement("div");
     author.style.display="flex";
     author.style.flexDirection="row";
     author.style.justifyContent="left";
     author.style.gap="5px"

   //author
     const imga = document.createElement("img");
    imga.src = data.authorImage;
    imga.style.width = "30px";
    imga.style.height = "30px";
    imga.style.borderRadius="80px"
    imga.style.display="flex";
    imga.style.top="10px"

    
    const name=document.createElement("h4");
    name.innerHTML=data.author;

    

    // description
    const desc = document.createElement("p");
    desc.innerHTML = data.description;
    desc.style.fontSize = "14px";
    desc.style.textAlign = "center";
    desc.style.color = "#848282ff";



    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(author);
    author.appendChild(imga);
    author.appendChild(name);
    card.appendChild(desc);  
    container.appendChild(card);
}
const container2 = document.getElementById("dataContainer2");
container2.style.display = "flex";
container2.style.flexWrap = "wrap";
container2.style.justifyContent = "center";


for (let i = 2; i < 6; i++) {
    const data = info[i];

    // card 
    const card2 = document.createElement("div");
    card2.style.width = "220px";
    card2.style.height = "350px";
    card2.style.margin = "15px";
    card2.style.padding = "10px";
    card2.style.backgroundColor = "white";
    card2.style.boxShadow = "0px 2px 4px gray ";
    card2.style.borderRadius = "15px";
    card2.style.display = "flex";
    card2.style.flexDirection = "column";
    card2.style.alignItems = "center";
    card2.style.justifyContent="center"

    // image
    const img = document.createElement("img");
    img.src = data.image;
    img.style.width = "90%";
    img.style.height = "200px";
    img.style.borderRadius = "8px";
    

    // title
    const title = document.createElement("h3");
    title.innerHTML = data.title;
    title.style.textAlign = "center";
    title.style.margin = "10px 0 5px 0";
    

    
     const author=document.createElement("div");
     author.style.display="flex";
     author.style.flexDirection="row";
     author.style.justifyContent="left";
     author.style.gap="5px"

   //author
     const imga = document.createElement("img");
    imga.src = data.authorImage;
    imga.style.width = "30px";
    imga.style.height = "30px";
    imga.style.borderRadius="80px"
    imga.style.display="flex";
    imga.style.top="10px"

    
    const name=document.createElement("h4");
    name.innerHTML=data.author;

    // description
    const desc = document.createElement("p");
    desc.innerHTML = data.description;
    desc.style.fontSize = "14px";
    desc.style.textAlign = "center";
    desc.style.color = "#848282ff";
    


    card2.appendChild(img);
    card2.appendChild(title);
     card2.appendChild(author);
    author.appendChild(imga);
    author.appendChild(name);
    card2.appendChild(desc);  
    
    container2.appendChild(card2);

}})





const login = document.getElementById("log");
const Form = document.getElementById("Form");
const submit = document.getElementById("submit");

login.addEventListener("click", () => {
  Form.style.display = "block";
});
submit.addEventListener("click", () => {
  Form.style.display = "none";
});

