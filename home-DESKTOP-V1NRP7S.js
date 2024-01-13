const searchInput = document.querySelector("#searchInpt")
const list = document.getElementById("list")
const list2 = document.getElementById("list2")
Id = new Date().getTime()
Id++
let cardsarr = [{
    Id: 1,
    Name: "acer",
    Price: 1200,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    color: "white",
},
{
    Id: 2,
    Name: "asus",
    Price: 1100,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/ybzxYdgwbGF8k7g9b/HD/ybzxYdgwbGF8k7g9b.png",
    color: "red",
},
{
    Id: 3,
    Name: "mac1",
    Price: 1208,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    color: "black",
},
{
    Id: 4,
    Name: "mac2",
    Price: 1789,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/HD/BNoJkf53gt8RCYjB5.png",
    color: "black",
},
{
    Id: 5,
    Name: "mac3",
    Price: 1789,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/HD/BNoJkf53gt8RCYjB5.png",
    color: "black",
},
{
    Id: 6,
    Name: "linux",
    Price: 1789,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/HD/BNoJkf53gt8RCYjB5.png",
    color: "black",
},
{
    Id: 7,
    Name: "salam",
    Price: 1789,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/HD/BNoJkf53gt8RCYjB5.png",
    color: "black",
},
{
    Id: 8,
    Name: "salam",
    Price: 1789,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/HD/BNoJkf53gt8RCYjB5.png",
    color: "black",
},
]

let cardsarr2 = [{
    Id: 1,
    Name: "asus",
    Price: 1200,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    color: "white",
},
{
    Id: 1,
    Name: "mac",
    Price: 1200,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    color: "white",
},
{
    Id: 1,
    Name: "mac pro",
    Price: 1200,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    color: "white",
}, {
    Id: 1,
    Name: "acer pro",
    Price: 1200,
    Image: "https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    color: "white",
}
]
console.log(cardsarr);
// card.style.backgroundColor = 'black'
// card.style.color = 'white'

function renderUi() {
    let innerText = ""
    for (let i = 0; i < cardsarr.length; i++) {
        innerText += ` <div class="common"><a href="https://gamenotebaku.az/product/asus-rog-strix-g18-rtx4050">
        <div class="cards" >
            <div class="card" style="width: 18rem;  background-color: black; color: white;" >
                <img src="${cardsarr[i].Image}" class="card-img-top" alt="...">
                <div class="card-body">
                 <p> <b>id :</b> ${cardsarr[i].Id}</p>
                 <p> <b>name :</b> ${cardsarr[i].Name}</p>
                 <p><b>price :</b> ${cardsarr[i].Price}</p>
                 <p><b>color :</b> ${cardsarr[i].color}</p>
                 
                 
                </div>
              </div>
        </div>
        </a>
        </div>
        `

    }
    list.innerHTML += innerText

} renderUi()

searchInput.addEventListener("keyup", (e) => {
    let searchValue = e.target.value;
    // console.log(searchValue);
    for (let i = 0; i < cardsarr.length; i++) {
        let search = cardsarr.filter((praduct) =>
            praduct.Name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())

        );
        console.log(search);

    }
    renderUi(search)
})
     






function renderUi2() {
    let innerText = ""
    for (let i = 0; i < cardsarr2.length; i++) {
        innerText += ` <div class="common"><a href="https://gamenotebaku.az/product/asus-rog-strix-g18-rtx4050">
            <div class="cards" >
                <div class="card" style="width: 18rem; background-color: black; color: white;" >
                    <img src="${cardsarr2[i].Image}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <p> <b>id :</b> ${cardsarr2[i].Id}</p>
                     <p> <b>name :</b> ${cardsarr2[i].Name}</p>
                     <p><b>price :</b> ${cardsarr2[i].Price}</p>
                     <p><b>color :</b> ${cardsarr2[i].color}</p>
                     
                     
                    </div>
                  </div>
            </div>
            </a>
            </div>
            `

    }
    list2.innerHTML += innerText

} renderUi2()


