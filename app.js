const product=[
    {
        id:0,
        image:'mobile.jpg',
        title:'best mobile of the day',
        price: 500
    },
    {
        id:1,
        image:'mobile.jpg',
        title:'best mobile of the day',
        price: 500
    },
    {
        id:2,
        image:'mobile.jpg',
        title:'best mobile of the day',
        price: 500
    },
    {
        id:3,
        image:'mobile.jpg',
        title:'best mobile of the day',
        price: 500
    }
];

const categories=[...new Set(product.map((item)=>{
    return item;
}))]
let i =0;
document.getElementById("root").innerHTML=categories.map((item)=>{
    var{image,title,price}=item;
    return(
        `
        <div class="box">
        <div class="img-box">
        <img class="images" src=${image} />
                </div>
                <div class="bottom">
                <p>${title}</p>
                <h2>$ ${price}.00</h2> 
                `
                + "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>" +
                
                ` </div>
         </div>`

        
    )
}).join("")


var cart=[];


function addtocart(a){
    cart.push({...categories[a]});
    displayCart();
}

function deleteElement(a){
    cart.splice(a,1);
    displayCart();
}

function displayCart(a){
    total=0;
    let j =0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML="your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00 ";

    }else{
        document.getElementById("cartItem").innerHTML=cart.map((item)=>{
            var{image,title,price}=item;
            total=total+price;
        document.getElementById("total").innerHTML="$ "+total+".00 ";

            return(
                `
                <div class="cart-item">
                <div class="row-img">
                    <img class="rowImg" src=${image} />
                </div>
                <p style="font-size:12px;">${title}</p>    
                <h2 style="font-size:15px;">${price}</h2>    
                ` + "<i class='bx bx-trash'  onclick='deleteElement("+(j++)+")' ></i></div>"
            )
        }).join("");
    }
}
