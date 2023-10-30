let cards = document.getElementById("cards");
const input = document.getElementById("input");
const showDescBtn = document.getElementById("showDescBtn");
const showDesc = document.getElementById("showDesc");
const desc = document.getElementById("desc");
const form = document.getElementById("form");
let cardsNode = [];
let cardNode = [];
let images = []
let discription = [];


window.addEventListener("load", () => {

  filteredFoods(foods);
  input.focus()
  
  
  cardsNode.forEach((i) => {
     
    i.addEventListener("click", () => {
      
      desc.innerHTML = foods[cardsNode.indexOf(i)].description;
      showDesc.style.display = "block"
    
      

    });
  });
});

showDescBtn.addEventListener("click", () => {
  showDesc.style.display = "none"
  cards.style.filter="blur(0px)"
 
  

})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  cardsNode = [];
  cardNode = [];
  cards.remove();
  cards = document.createElement("div");
  cards.id = "cards";
  document.body.insertBefore(cards, showDesc)
  console.log(inputValue);
  doFilter(inputValue);
});
console.log(cardsNode);


// all foods list

const foods = [
  {
    id: 1,
    title: "Argentina",
    img: `photo/Argentina.jpeg`,
    description: `Argentina is a vast country located in the southern part of South America. The eighth largest country in the world, it is the second largest country in South America after Brazil, and it's about one-third the size of the United States. Argentina
     is bordered by the Andes Mountains and Chile to the west.`,
  },
  {
    id: 2,
    title: "Belgium",
    img: `photo/Belgium.jpeg`,
    description: ` One of the smallest countries in Europe, Belgium is bordered by France,
     Luxembourgh, the Netherlands, and Germany. The country also has a narrow coastline along the North Sea.`,
  },
  {
    id: 3,
    title: "Canada",
    img: `photo/Canada.jpeg`,
    description: `Canada is a vast and rugged land. From north to south it spans more than half the Northern Hemisphere. From east to west it stretches almost 4,700 miles (7,560 kilometers) across six time zones. It is the second largest country in the world,
     but it has only one-half of one percent of the world's population.`,
  },
  {
    id: 4,
    title: "Finland",
    img: `photo/Finland.jpeg`,
    description: `Finland is part of Scandinavia, a geographical region in northern Europe, and shares land borders with Norway, Sweden, and Russia. The Baltic Sea borders the country to the south and southwest. The coastline in this part of the country is speckled with nearly 180,000 small islands. Finland’s remote northern province,
     known as Lapland, sits above the Arctic Circle.`,
  },
  {
    id: 5,
    title: "Greece",
    img: `photo/Greece.jpeg`,
    description: `Greece has the longest coastline in Europe and is the southernmost country in Europe. The mainland has rugged mountains, forests, and lakes, but the country is well known for the thousands of islands dotting the blue Aegean Sea to the east,
     the Mediterranean Sea to the south, and the Ionian Sea to the west.`,
  },
  {
    id: 6,
    title: "Germany",
    img: `photo/Germany.jpeg`,
    description: `Germany's central and southern regions have forested hills and mountains cut through by the Danube, Main, and Rhine river valleys. In the north, the landscape flattens out to a wide plain that stretches to the North Sea.
     Between these extremes, Germany is a country of incredible variety.`,
  },
  {
    id: 7,
    title: "Greenland",
    img: `photo/Greenland.jpeg`,
    description: `Located in the North Atlantic Ocean, Greenland is the world’s largest island. The island—a territory of Denmark—is more than three times the size of the state of Texas.
     Its nearest neighbor is Canada’s Ellesmere Island, which is located 16 miles (26 kilometers) to the north of Greenland. Iceland is its nearest European neighbor, and is located about 200 miles (about 321 kilometers) to the southeast.`,
  },
  {
    id: 8,
    title: "India",
    img: `photo/India.jpeg`,
    description: `India is part of the continent of Asia. Most of India forms a peninsula, which means it is surrounded by water on three sides.
     The world's highest mountain range, the Himalaya, rises in the north. The southeast is bordered by the Bay of Bengal, and the southwest is bordered by the Arabian Sea.`,
  },
  {
    id: 9,
    title: "Japan",
    img: `photo/Japan.jpeg`,
    description: `Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu.
     There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south.`,
  },
];




function filteredFoods(filtered) {
  filtered.forEach((i) => {
    cardsNode.push(document.createElement("div"));
  });

  for (let i = 0; i < cardsNode.length; i++) {
    cardsNode[i].id = i + 1;
    cardsNode[i].className = "card";
    cardNode.push(document.createElement("h2"));
    cardNode[i].innerHTML = filtered[i].title.toUpperCase();
    images.push(document.createElement("img"));
    images[i].src = filtered[i].img;
    cardsNode[i].appendChild(cardNode[i]);
    cardsNode[i].appendChild(images[i]);
    cards.appendChild(cardsNode[i]);
  }

  // for Clicking on every card

  
  cardsNode.forEach((i) => {
    i.addEventListener("click", () => {
     
      desc.innerHTML = filtered[cardsNode.indexOf(i)].description;
      showDesc.style.display = "block"
      cards.style.filter="blur(5px)"
      
      
    });
    
  });

}





// for searching conuntry
function doFilter(titlee) {
  
  const filtered = foods.filter((i) => {
    const capitalFirstLetter=titlee[0]?.toUpperCase()
    const restTitlee=titlee.slice(1,titlee.length).toLowerCase()
    const concatString=capitalFirstLetter?.concat(restTitlee)
    console.log(concatString)
    
    return i.title == concatString  ;
  })

  if(filtered.length == 0) {
    console.log("no thing");
    filteredFoods(foods);
  } else {
    if(filtered.length == 1){
    
     cards.style.gridTemplateColumns= "repeat(1,140px)";
    }
    console.log(filtered);
    filteredFoods(filtered);
  }
}
