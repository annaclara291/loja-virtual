
const products = [
  {
    id: 1,
    name: "Creme Hidratante Facial",
    category: "skincare",
    price: 59.90,
    description: "Hidratação diária para uma pele macia e bem cuidada.",
    tag: "MAIS VENDIDO",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Sérum Vitamina C",
    category: "skincare",
    price: 74.90,
    description: "Um cuidado facial para complementar sua rotina.",
    tag: "FAVORITO",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Perfume Floral",
    category: "perfume",
    price: 89.90,
    description: "Uma fragrância delicada para acompanhar seu dia.",
    tag: "NOVIDADE",
    image: "assets/perfumes/perfume-floral.jpg"
  },
  {
    id: 4,
    name: "Kit Maquiagem Essencial",
    category: "maquiagem",
    price: 99.90,
    description: "Itens selecionados para criar diferentes looks.",
    tag: "QUERIDINHO",
    image: "assets/maquiagem/kit-maquiagem.jpg"
  },
  {
    id: 5,
    name: "Óleo Corporal Natural",
    category: "natural",
    price: 49.90,
    description: "Óleo de cuidado corporal. Consulte os ingredientes.",
    tag: "LINHA NATURAL",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Sabonete Botânico",
    category: "natural",
    price: 24.90,
    description: "Uma opção de limpeza para seu ritual de autocuidado.",
    tag: "NATURAL",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Balm Labial",
    category: "maquiagem",
    price: 29.90,
    description: "Cuidado para os lábios com acabamento delicado.",
    tag: "ESSENCIAL",
    image: "assets/maquiagem/balm-labial.jpg"
  },
  {
    id: 8,
    name: "Máscara Facial Botânica",
    category: "natural",
    price: 39.90,
    description: "Uma pausa de autocuidado para sua rotina de beleza.",
    tag: "LINHA NATURAL",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Esfoliante Facial Suave",
    category: "skincare",
    price: 42.90,
    description: "Esfoliante facial para complementar sua rotina de cuidados.",
    tag: "CUIDADO FACIAL",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Protetor Solar Facial FPS 50",
    category: "skincare",
    price: 69.90,
    description: "Proteção solar facial para incluir na rotina diária. Siga as orientações da embalagem.",
    tag: "PROTEÇÃO DIÁRIA",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Gel de Limpeza Facial",
    category: "skincare",
    price: 38.90,
    description: "Limpeza facial para deixar sua rotina de cuidados ainda mais completa.",
    tag: "ROTINA FACIAL",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Creme para Área dos Olhos",
    category: "skincare",
    price: 54.90,
    description: "Cuidado delicado para acrescentar à rotina facial.",
    tag: "CUIDADO ESPECIAL",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Loção Hidratante Corporal",
    category: "skincare",
    price: 46.90,
    description: "Hidratação e cuidado para a pele do corpo no dia a dia.",
    tag: "CUIDADO CORPORAL",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Manteiga Corporal Nutritiva",
    category: "skincare",
    price: 58.90,
    description: "Textura cremosa para um momento especial de hidratação corporal.",
    tag: "HIDRATAÇÃO",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Base Líquida Natural",
    category: "maquiagem",
    price: 64.90,
    description: "Base de acabamento leve para compor sua maquiagem.",
    tag: "MAQUIAGEM",
    image: "assets/maquiagem/base-liquida.jpg"
  },
  {
    id: 16,
    name: "Máscara para Cílios",
    category: "maquiagem",
    price: 34.90,
    description: "Um item versátil para finalizar diferentes produções.",
    tag: "ESSENCIAL",
    image: "assets/maquiagem/mascara-cilios.jpg"
  },
  {
    id: 17,
    name: "Batom Cremoso Rosé",
    category: "maquiagem",
    price: 32.90,
    description: "Cor delicada e acabamento cremoso para seus looks.",
    tag: "NOVIDADE",
    image: "assets/maquiagem/batom-rose.jpg"
  },
  {
    id: 18,
    name: "Blush Compacto",
    category: "maquiagem",
    price: 39.90,
    description: "Um toque de cor para completar sua maquiagem.",
    tag: "QUERIDINHO",
    image: "assets/maquiagem/blush-compacto.jpg"
  },
  {
    id: 19,
    name: "Perfume Cítrico",
    category: "perfume",
    price: 79.90,
    description: "Fragrância fresca para acompanhar seus momentos.",
    tag: "FRESCOR",
    image: "assets/perfumes/perfume-citrico.jpg"
  },
  {
    id: 20,
    name: "Perfume Amadeirado",
    category: "perfume",
    price: 109.90,
    description: "Uma fragrância marcante para diferentes ocasiões.",
    tag: "FRAGRÂNCIA",
    image: "assets/perfumes/perfume-amadeirado.jpg"
  },
  {
    id: 21,
    name: "CHANEL N°5 Eau de Parfum",
    category: "perfume",
    price: 899.90,
    description: "Fragrância icônica CHANEL. Consulte disponibilidade e apresentação.",
    tag: "CHANEL",
    image: "assets/perfumes/chanel-no5.jpg"
  },
  {
    id: 22,
    name: "CHANEL Coco Mademoiselle",
    category: "perfume",
    price: 949.90,
    description: "Fragrância CHANEL para quem prefere um aroma marcante e elegante.",
    tag: "CHANEL",
    image: "assets/perfumes/chanel-coco-mademoiselle.jpg"
  },
  {
    id: 23,
    name: "CHANEL Chance Eau Tendre",
    category: "perfume",
    price: 879.90,
    description: "Fragrância CHANEL delicada para acompanhar diferentes ocasiões.",
    tag: "CHANEL",
    image: "assets/perfumes/chanel-chance-eau-tendre.jpg"
  },
  {
    id: 24,
    name: "SEPHORA COLLECTION Best Skin Ever",
    category: "maquiagem",
    price: 119.90,
    description: "Base da Sephora Collection. Confira tonalidades e disponibilidade.",
    tag: "SEPHORA",
    image: "assets/maquiagem/sephora-best-skin-ever.jpg"
  },
  {
    id: 25,
    name: "SEPHORA COLLECTION Size Up",
    category: "maquiagem",
    price: 89.90,
    description: "Máscara para cílios da Sephora Collection.",
    tag: "SEPHORA",
    image: "assets/maquiagem/sephora-size-up.jpg"
  },
  {
    id: 26,
    name: "SEPHORA COLLECTION Cream Lip Stain",
    category: "maquiagem",
    price: 79.90,
    description: "Batom líquido da Sephora Collection. Consulte cores disponíveis.",
    tag: "SEPHORA",
    image: "assets/maquiagem/sephora-cream-lip-stain.jpg"
  },
  {
    id: 27,
    name: "SEPHORA COLLECTION Colorful Blush",
    category: "maquiagem",
    price: 99.90,
    description: "Blush da Sephora Collection para completar sua maquiagem.",
    tag: "SEPHORA",
    image: "assets/maquiagem/sephora-colorful-blush.jpg"
  },
  {
    id: 28,
    name: "Dior J'adore Eau de Parfum",
    category: "perfume",
    price: 1_199.90,
    description: "Fragrância floral Dior. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/dior-jadore.jpg"
  },
  {
    id: 29,
    name: "Dior Sauvage Eau de Parfum",
    category: "perfume",
    price: 1_099.90,
    description: "Fragrância Dior de perfil amadeirado. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/dior-sauvage.jpg"
  },
  {
    id: 30,
    name: "Yves Saint Laurent Libre",
    category: "perfume",
    price: 1_249.90,
    description: "Fragrância YSL. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/ysl-libre.jpg"
  },
  {
    id: 31,
    name: "Lancôme La Vie Est Belle",
    category: "perfume",
    price: 1_099.90,
    description: "Fragrância Lancôme. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/lancome-la-vie-est-belle.jpg"
  },
  {
    id: 32,
    name: "Tom Ford Black Orchid",
    category: "perfume",
    price: 1_499.90,
    description: "Fragrância Tom Ford. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/tom-ford-black-orchid.jpg"
  },
  {
    id: 33,
    name: "Giorgio Armani My Way",
    category: "perfume",
    price: 1_099.90,
    description: "Fragrância Giorgio Armani. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/armani-my-way.jpg"
  },
  {
    id: 34,
    name: "Gucci Bloom Eau de Parfum",
    category: "perfume",
    price: 1_199.90,
    description: "Fragrância Gucci. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/gucci-bloom.jpg"
  },
  {
    id: 35,
    name: "Valentino Donna Born in Roma",
    category: "perfume",
    price: 1_299.90,
    description: "Fragrância Valentino. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    name: "Rabanne Lady Million",
    category: "perfume",
    price: 1_149.90,
    description: "Fragrância Rabanne. Consulte disponibilidade e apresentação.",
    tag: "LINHA PREMIUM",
    image: "assets/perfumes/rabanne-lady-million.jpg"
  }
];

const slides = [
  {
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85",
    title: "Seu ritual. Sua essência."
  },
  {
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
    title: "Beleza em cada detalhe."
  },
  {
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85",
    title: "Fragrâncias que encantam."
  },
  {
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85",
    title: "Cuide de você naturalmente."
  }
];

const $ = (selector) => document.querySelector(selector);

let cart = [];
let activeCategory = "todos";
let searchTerm = "";
let currentSlide = 0;
let slideTimer;
const whatsappPhone = "5511937113448";

const money = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const normalizeText = (value) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Produtos e filtros
function renderProducts() {
  const filtered = products.filter((product) => {
    const matchesCategory =
      activeCategory === "todos" ||
      product.category === activeCategory;

    const searchableText =
      `${product.name} ${product.description} ${product.category} ${product.tag}`;

    const matchesSearch = normalizeText(searchableText)
      .includes(normalizeText(searchTerm));

    return matchesCategory && matchesSearch;
  });

  $("#productGrid").innerHTML = filtered.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}">
            Comprar agora +
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("#emptyState").hidden = filtered.length > 0;
}

$("#categoryFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter === button);
  });

  renderProducts();
});

$("#productGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
});

$("#showAll").addEventListener("click", (event) => {
  event.preventDefault();
  activeCategory = "todos";
  searchTerm = "";
  $("#searchInput").value = "";

  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle(
      "active",
      filter.dataset.category === "todos"
    );
  });

  renderProducts();
  $("#produtos").scrollIntoView({ behavior: "smooth" });
});

// Pesquisa
$("#searchToggle").addEventListener("click", () => {
  const bar = $("#searchBar");
  bar.hidden = !bar.hidden;
  $("#searchToggle").setAttribute("aria-expanded", String(!bar.hidden));
  $("#searchToggle").setAttribute(
    "aria-label",
    bar.hidden ? "Pesquisar" : "Fechar pesquisa"
  );

  if (!bar.hidden) {
    $("#searchInput").focus();
  }
});

function runSearch() {
  searchTerm = $("#searchInput").value.trim();
  renderProducts();
  $("#produtos").scrollIntoView({ behavior: "smooth" });
}

$("#searchButton").addEventListener("click", runSearch);

$("#searchInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSearch();
});

$("#searchInput").addEventListener("input", () => {
  searchTerm = $("#searchInput").value.trim();
  renderProducts();
});

// Carrinho de compras
function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  showToast(`${product.name} adicionado à sacola!`);
}

function changeQuantity(id, change) {
  const item = cart.find((product) => product.id === id);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== id);
  }

  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((product) => product.id !== id);
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  $("#cartCount").textContent = totalItems;
  $("#cartTotal").textContent = money(total);

  if (cart.length === 0) {
    $("#cartItems").innerHTML = `
      <div class="empty-cart">
        <div style="font-size:35px">♡</div>
        <p>Sua sacola está vazia.</p>
        <p>Encontre seus próximos favoritos!</p>
      </div>
    `;
  } else {
    $("#cartItems").innerHTML = cart.map((item) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${money(item.price * item.quantity)}</p>
          <div class="quantity-controls">
            <button data-minus="${item.id}" aria-label="Diminuir quantidade">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${item.id}" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${item.id}">Remover</button>
      </div>
    `).join("");
  }

  $("#checkoutButton").disabled = cart.length === 0;
  $("#checkoutButton").style.opacity = cart.length === 0 ? ".5" : "1";
}

$("#cartItems").addEventListener("click", (event) => {
  const minus = event.target.closest("[data-minus]");
  const plus = event.target.closest("[data-plus]");
  const remove = event.target.closest("[data-remove]");

  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#closeCart").focus();
}

function closeCart({ restoreFocus = false } = {}) {
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (restoreFocus) $("#cartToggle").focus();
}

$("#cartToggle").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", () => closeCart({ restoreFocus: true }));
$("#overlay").addEventListener("click", () => closeCart({ restoreFocus: true }));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const cartWasOpen = $("#cartDrawer").classList.contains("open");
    const menuToggle = $("#menuToggle");

    if (cartWasOpen) closeCart({ restoreFocus: true });

    $("#nav").classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";

    if (!$("#searchBar").hidden) {
      $("#searchBar").hidden = true;
      $("#searchToggle").setAttribute("aria-expanded", "false");
      $("#searchToggle").setAttribute("aria-label", "Pesquisar");
    }
  }

  if (event.key === "Tab" && $("#cartDrawer").classList.contains("open")) {
    const focusable = Array.from(
      $("#cartDrawer").querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

// Finalização do pedido pelo WhatsApp
$("#checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) return;

  if (!whatsappPhone) {
    showToast("O WhatsApp da loja ainda não foi configurado.");
    return;
  }

  const lines = cart.map((item) =>
    `• ${item.name} — ${item.quantity} x ${money(item.price)}`
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const message = [
    "Olá! Quero fazer um pedido na ASC Estética.",
    "",
    ...lines,
    "",
    `Total dos produtos: ${money(total)}`,
    "",
    "Gostaria de confirmar a disponibilidade, o frete e as formas de pagamento."
  ].join("\n");

  window.open(
    `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

// Tema claro e escuro
$("#themeToggle").addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");

  $("#themeToggle").textContent = dark ? "☀" : "☾";
  $("#themeToggle").setAttribute(
    "aria-label",
    dark ? "Ativar modo claro" : "Ativar modo escuro"
  );
  $("#themeToggle").setAttribute("aria-pressed", String(dark));

  try {
    localStorage.setItem("asc-theme", dark ? "dark" : "light");
  } catch (error) {
    // O site continua funcionando sem armazenamento local.
  }
});

try {
  const savedTheme = localStorage.getItem("asc-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    $("#themeToggle").textContent = "☀";
    $("#themeToggle").setAttribute("aria-label", "Ativar modo claro");
    $("#themeToggle").setAttribute("aria-pressed", "true");
  }
} catch (error) {
  // O tema padrão será utilizado.
}

// Menu para celulares
$("#menuToggle").setAttribute("aria-expanded", "false");

$("#menuToggle").addEventListener("click", () => {
  const open = $("#nav").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(open));
  $("#menuToggle").setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  $("#menuToggle").textContent = open ? "✕" : "☰";
});

$("#nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    $("#nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").setAttribute("aria-label", "Abrir menu");
    $("#menuToggle").textContent = "☰";
  }
});

// Carrossel promocional
function renderSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];

  $("#heroImage").style.backgroundImage = `url("${slide.image}")`;
  $("#heroImage .hero-image-overlay p").textContent = slide.title;
  $("#slideNumber").textContent =
    `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

  document.querySelectorAll("#slideDots button").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
    dot.setAttribute("aria-current", i === currentSlide ? "true" : "false");
  });
}

function startCarousel() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => renderSlide(currentSlide + 1), 5000);
}

$("#slideDots").innerHTML = slides.map((slide, index) => `
  <button
    aria-label="Ir para slide ${index + 1}"
    class="${index === 0 ? "active" : ""}"
    data-slide="${index}">
  </button>
`).join("");

$("#slideDots").addEventListener("click", (event) => {
  const button = event.target.closest("[data-slide]");
  if (!button) return;

  renderSlide(Number(button.dataset.slide));
  startCarousel();
});

$("#prevSlide").addEventListener("click", () => {
  renderSlide(currentSlide - 1);
  startCarousel();
});

$("#nextSlide").addEventListener("click", () => {
  renderSlide(currentSlide + 1);
  startCarousel();
});

$("#heroImage").addEventListener("mouseenter", () => clearInterval(slideTimer));
$("#heroImage").addEventListener("mouseleave", startCarousel);

// Atalho para a linha natural
$("#naturalButton").addEventListener("click", () => {
  activeCategory = "natural";
  searchTerm = "";
  $("#searchInput").value = "";

  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle(
      "active",
      filter.dataset.category === "natural"
    );
  });

  renderProducts();
  $("#produtos").scrollIntoView({ behavior: "smooth" });
});

// Formulário demonstrativo de novidades
$("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = $("#newsletterEmail").value.trim();
  if (!email) return;

  $("#newsletterMessage").textContent =
    "Obrigada pelo interesse! Este formulário é demonstrativo e ainda não salva inscrições.";

  $("#newsletterForm").reset();
});

// Inicialização
renderProducts();
renderCart();
renderSlide(0);
startCarousel();
