const fullMenu = [
  {
    title: "Buttermilk Pancakes",
    price: "15.99",
    image: "./images/item-1.jpeg",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    type: "Breakfast",
  },
  {
    title: "Diner Double",
    price: "13.99",
    image: "./images/item-2.jpeg",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    type: "Lunch",
  },
  {
    title: "Godzilla Milkshake",
    price: "6.99",
    image: "./images/item-3.jpeg",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    type: "Shakes",
  },
  {
    title: "Country Delight",
    price: "20.99",
    image: "./images/item-4.jpeg",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    type: "Breakfast",
  },
  {
    title: "Egg Attack",
    price: "22.99",
    image: "./images/item-5.jpeg",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    type: "Lunch",
  },
  {
    title: "Oreo Dream",
    price: "18.99",
    image: "./images/item-6.jpeg",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    type: "Shakes",
  },
  {
    title: "Bacon Overflow",
    price: "8.99",
    image: "./images/item-7.jpeg",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    type: "Breakfast",
  },
  {
    title: "American Classic",
    price: "12.99",
    image: "./images/item-8.jpeg",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    type: "Lunch",
  },
  {
    title: "Quarantine Buddy",
    price: "16.99",
    image: "./images/item-9.jpeg",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "Shakes",
  },
  {
    title: "Steak Dinner",
    price: "39.99",
    image: "./images/item-10.jpeg",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    type: "Dinner",
  },
];

const menu = document.querySelector(".menu-content");
const buttons = document.querySelectorAll(".btn");

const renderMenu = function (item) {
  return `
      <div class="menu-item">
        <img
            src="${item.image}"
            alt=""
        />
        <div>
            <h2>${item.title}</h2>
            <span>$${item.price}</span>
        </div>
        <p>
            ${item.description}
        </p>
    </div>`;
};

const renderFullMenu = function () {
  const menu1 = fullMenu.map((item) => renderMenu(item));
  menu.innerHTML = "";
  menu.innerHTML = menu1.join("");
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const type = e.target.getAttribute("data-type");
    if (type === "All") {
      renderFullMenu();
      return;
    }

    const filteredMenu = fullMenu.filter((i) => i.type === type);
    const result = filteredMenu.map((item) => {
      return renderMenu(item);
    });
    menu.innerHTML = "";
    menu.innerHTML = result.join("");
  });
});

renderFullMenu();
