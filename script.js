// --- Mobile Menu Toggle ---
const mobile = document.getElementById("mobile");
const navbar = document.getElementById("navbar");
const bar = document.getElementById("bar");

if (mobile) {
  mobile.addEventListener("click", () => {
    navbar.classList.toggle("active");
    bar.classList.toggle("fa-times");
  });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll("#navbar li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    bar.classList.remove("fa-times");
  });
});

// --- Features Section ---
const features = [
  { img: "img/features/f1.png", title: "Free Shipping", bg: "#fddde4" },
  { img: "img/features/f2.png", title: "Online Order", bg: "#cdebbc" },
  { img: "img/features/f3.png", title: "Save Money", bg: "#d1e8f2" },
  { img: "img/features/f4.png", title: "Promotions", bg: "#cdd4f8" },
  { img: "img/features/f5.png", title: "Happy Sell", bg: "#f6dbf6" },
  { img: "img/features/f6.png", title: "24/7 Support", bg: "#fff2e5" },
];

const featureSection = document.getElementById("feature");
if (featureSection) {
  features.forEach((f) => {
    const box = document.createElement("div");
    box.classList.add("feature-box");
    box.innerHTML = `<img src="${f.img}" alt="${f.title}" />
                         <h6 style="background:${f.bg};">${f.title}</h6>`;
    featureSection.appendChild(box);
  });
}

// --- Products Arrays ---
const featuredProducts = [
  {
    brand: "Adidas",
    name: "Cartoon Astronaut T-shirts",
    img: "img/products/f1.jpg",
    price: "$78",
    rating: 5,
  },
  {
    brand: "Nike",
    name: "Casual Comfort Sneakers",
    img: "img/products/f2.jpg",
    price: "$95",
    rating: 4,
  },
  {
    brand: "Puma",
    name: "Sports Training Shorts",
    img: "img/products/f3.jpg",
    price: "$40",
    rating: 4,
  },
  {
    brand: "Levi's",
    name: "Slim Fit Jeans",
    img: "img/products/f4.jpg",
    price: "$68",
    rating: 5,
  },
  {
    brand: "H&M",
    name: "Classic Polo Shirt",
    img: "img/products/f5.jpg",
    price: "$35",
    rating: 3,
  },
  {
    brand: "Zara",
    name: "Stylish Jacket",
    img: "img/products/f6.jpg",
    price: "$120",
    rating: 5,
  },
  {
    brand: "Under Armour",
    name: "Performance Sports Cap",
    img: "img/products/f7.jpg",
    price: "$25",
    rating: 4,
  },
  {
    brand: "Reebok",
    name: "Running Shoes",
    img: "img/products/f8.jpg",
    price: "$85",
    rating: 5,
  },
];

const newArrivals = [
  {
    brand: "H&M",
    name: "Casual Hoodie",
    img: "img/products/n1.jpg",
    price: "$55",
    rating: 4,
  },
  {
    brand: "Zara",
    name: "Denim Jacket",
    img: "img/products/n2.jpg",
    price: "$110",
    rating: 5,
  },
  {
    brand: "Uniqlo",
    name: "Cotton Oversized T-Shirt",
    img: "img/products/n3.jpg",
    price: "$35",
    rating: 4,
  },
  {
    brand: "Puma",
    name: "Running Sports Shoes",
    img: "img/products/n4.jpg",
    price: "$90",
    rating: 5,
  },
  {
    brand: "Levi's",
    name: "Casual Denim Shirt",
    img: "img/products/n5.jpg",
    price: "$70",
    rating: 3,
  },
  {
    brand: "Under Armour",
    name: "Training Joggers",
    img: "img/products/n6.jpg",
    price: "$65",
    rating: 4,
  },
  {
    brand: "Adidas",
    name: "Track Jacket",
    img: "img/products/n7.jpg",
    price: "$80",
    rating: 5,
  },
  {
    brand: "Nike",
    name: "Air Max Sneakers",
    img: "img/products/n8.jpg",
    price: "$130",
    rating: 5,
  },
];

// --- Render Products Function (Cart Disabled) ---
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  products.forEach((p, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars +=
        i < p.rating
          ? `<i class="fas fa-star"></i>`
          : `<i class="far fa-star"></i>`;
    }

    productDiv.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="product-description">
        <span>${p.brand}</span>
        <h5>${p.name}</h5>
        <div class="product-rate">${stars}</div>
        <h4>${p.price}</h4>
      </div>
      <a href="#" id="cart" data-index="${index}"><i class="fa-solid fa-cart-shopping"></i></a>
    `;
    container.appendChild(productDiv);
  });

  // Cart Button Listeners (Disabled)
  const cartButtons = container.querySelectorAll("#cart");
  cartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Cart functionality coming soon!");
    });
  });
}

// --- Render Featured & New Arrival Products ---
renderProducts(featuredProducts, "featured-products");
renderProducts(newArrivals, "new-arrival-products");
