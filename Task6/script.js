fetch("https://fakestoreapi.com/products")
.then((result) => result.json())
.then((products)=>{
    const container = document.getElementById("productsContainer");
    container.style.justifyContent="center"

for(let i=0;i<products.length;i++){
    const product = products[i];
    // card
    const card =document.createElement("div");
    card.id =product.id
    card.style.width="235px"
    card.style.height="330px"
    card.style.margin="15px"
    card.style.padding="10px"
    card.style.backgroundColor="white"
    card.style.boxShadow="0px 2px 4px 2px gray"
    card.style.borderRadius="15px"
    card.style.flexDirection="column"

    //image
    const img =document.createElement("img")
    img.src=product.image
    img.style.width="200px"
    img.style.height="150px"

    //title
    const title =document.createElement("h4")
    title.innerText=product.title
    title.style.fontSize="15px"
    title.style.color="black"
    title.style.fontWeight="bold"
    title.textContent= title.textContent.slice(0,12)



    //category
    const category =document.createElement("p")
    category.innerHTML=product.category
    category.style.color="black"
    category.style.fontSize="15px"  

    //price&rating
    const end = document.createElement("div")
    end.style.display="flex"
    end.style.flexDirection="row"
    end.style.gap="110px"

    //price
    const price = document.createElement("p")
    price.innerHTML=product.price+"$"
   
    //rating
    const rating = document.createElement("p")
    rating.innerHTML="Rating:" +product.rating.rate
    

    //button
    const button =document.createElement("button")
    button.style.backgroundColor="#18688aff"
    const text =document.createElement("div")
    text.innerHTML="Show Details"
    text.style.color="white"
    text.style.fontWeight="bold"
    button.style.width="100%"
    button.style.height="30px"
    button.style.borderRadius="8px"
    button.style.border="none"
    button.style.cursor="pointer"
    button.className="showDetails"
    
 

    //description=>important
    button.addEventListener("click",
        function()
            {alert(product.description)}
        )
    
    

    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(end);
    end.appendChild(price);
    end.appendChild(rating);
    card.appendChild(button);
    button.appendChild(text);
    
    container.appendChild(card);

}})
