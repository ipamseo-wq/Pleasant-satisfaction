document.addEventListener("DOMContentLoaded", async () => {
    const body = document.body;
    const year = document.getElementById("year");
    const header = document.querySelector("[data-header]");
    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");
    const pageLoader = document.getElementById("pageLoader");
    const cartDrawer = document.getElementById("cartDrawer");
    const drawerBackdrop = document.getElementById("drawerBackdrop");
    const cartButton = document.getElementById("cartButton");
    const closeCart = document.getElementById("closeCart");
    const toastStack = document.getElementById("toastStack");

    const categories = [
        "Nigerian dishes",
        "Continental dishes",
        "Rice meals",
        "Soups & swallows",
        "Grills & barbecue",
        "Small chops/snacks",
        "Desserts",
        "Drinks & cocktails"
    ];

    const imageBank = {
        jollof: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
        rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
        grill: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        pasta: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
        soup: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
        chops: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=900&q=80",
        dessert: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
        drink: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
        fish: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=900&q=80",
        salad: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
    };

    const initialMenu = [
        {
            id: "m-1001",
            title: "Signature Jollof Feast",
            category: "Nigerian dishes",
            price: 8500,
            description: "Smoky party-style jollof rice served with plantain, slaw, and your choice of chicken or beef.",
            image: imageBank.jollof,
            featured: true,
            popular: true
        },
        {
            id: "m-1002",
            title: "Ofada Rice and Ayamase",
            category: "Nigerian dishes",
            price: 9000,
            description: "Local rice paired with rich green pepper sauce, assorted meats, egg, and fried plantain.",
            image: imageBank.rice,
            featured: false,
            popular: true
        },
        {
            id: "m-1003",
            title: "Peppered Asun Bowl",
            category: "Nigerian dishes",
            price: 7500,
            description: "Spicy goat meat tossed with onions, peppers, and a smoky house seasoning.",
            image: imageBank.grill,
            featured: false,
            popular: false
        },
        {
            id: "m-1004",
            title: "Creamy Alfredo Pasta",
            category: "Continental dishes",
            price: 12500,
            description: "Fettuccine in parmesan cream with grilled chicken, herbs, and roasted vegetables.",
            image: imageBank.pasta,
            featured: true,
            popular: true
        },
        {
            id: "m-1005",
            title: "Seared Chicken Supreme",
            category: "Continental dishes",
            price: 15000,
            description: "Pan-seared chicken breast with pepper cream sauce, mashed potatoes, and vegetables.",
            image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1006",
            title: "Garden Citrus Salad",
            category: "Continental dishes",
            price: 7500,
            description: "Crisp greens, citrus, avocado, cucumber, toasted seeds, and a bright honey dressing.",
            image: imageBank.salad,
            featured: false,
            popular: false
        },
        {
            id: "m-1007",
            title: "Seafood Fried Rice",
            category: "Rice meals",
            price: 11000,
            description: "Stir-fried rice with prawns, calamari, vegetables, egg, and a gentle chili finish.",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
            featured: true,
            popular: true
        },
        {
            id: "m-1008",
            title: "Coconut Rice and Prawns",
            category: "Rice meals",
            price: 12000,
            description: "Fragrant coconut rice finished with tiger prawns, peppers, herbs, and sweet corn.",
            image: imageBank.rice,
            featured: false,
            popular: false
        },
        {
            id: "m-1009",
            title: "Native Rice Pot",
            category: "Rice meals",
            price: 9500,
            description: "Palm-oil rice with smoked fish, scent leaf, crayfish, peppers, and diced beef.",
            image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1010",
            title: "Egusi Soup and Pounded Yam",
            category: "Soups & swallows",
            price: 8500,
            description: "Melon seed soup with leafy greens, assorted meats, stockfish, and smooth pounded yam.",
            image: imageBank.soup,
            featured: false,
            popular: true
        },
        {
            id: "m-1011",
            title: "Afang Soup and Garri",
            category: "Soups & swallows",
            price: 9000,
            description: "Rich afang soup cooked with waterleaf, seafood notes, assorted meats, and garri.",
            image: imageBank.soup,
            featured: false,
            popular: false
        },
        {
            id: "m-1012",
            title: "Bitterleaf Soup and Semovita",
            category: "Soups & swallows",
            price: 9500,
            description: "Deep, savory bitterleaf soup with tender meat cuts and soft semovita.",
            image: imageBank.soup,
            featured: false,
            popular: false
        },
        {
            id: "m-1013",
            title: "Pleasant Suya Platter",
            category: "Grills & barbecue",
            price: 10000,
            description: "Beef suya, chicken skewers, onions, tomatoes, yaji spice, and house pepper dip.",
            image: imageBank.grill,
            featured: true,
            popular: true
        },
        {
            id: "m-1014",
            title: "BBQ Chicken Half",
            category: "Grills & barbecue",
            price: 9500,
            description: "Char-grilled half chicken lacquered in smoky barbecue glaze with fries or plantain.",
            image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1015",
            title: "Grilled Croaker",
            category: "Grills & barbecue",
            price: 16000,
            description: "Whole croaker fish grilled with herbs and peppers, served with chips and salad.",
            image: imageBank.fish,
            featured: false,
            popular: true
        },
        {
            id: "m-1016",
            title: "Small Chops Box",
            category: "Small chops/snacks",
            price: 5500,
            description: "Samosa, spring roll, puff puff, mini sausage roll, peppered gizzard, and dip.",
            image: imageBank.chops,
            featured: true,
            popular: true
        },
        {
            id: "m-1017",
            title: "Spring Rolls and Samosas",
            category: "Small chops/snacks",
            price: 3500,
            description: "Crisp pastry bites with seasoned fillings and sweet chili sauce.",
            image: imageBank.chops,
            featured: false,
            popular: false
        },
        {
            id: "m-1018",
            title: "Puff Puff Basket",
            category: "Small chops/snacks",
            price: 2500,
            description: "Golden puff puff dusted lightly with spice sugar and served with chocolate dip.",
            image: "https://images.unsplash.com/photo-1514517220035-37c4ef92a2bb?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1019",
            title: "Chocolate Lava Cake",
            category: "Desserts",
            price: 6000,
            description: "Warm chocolate cake with molten center, vanilla cream, and berry compote.",
            image: imageBank.dessert,
            featured: false,
            popular: true
        },
        {
            id: "m-1020",
            title: "Vanilla Cheesecake",
            category: "Desserts",
            price: 6500,
            description: "Silky cheesecake, biscuit crumb, citrus glaze, and fresh berries.",
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1021",
            title: "Fruit Parfait",
            category: "Desserts",
            price: 5000,
            description: "Greek yoghurt, tropical fruit, honey, toasted granola, and coconut flakes.",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1022",
            title: "Zobo Royale",
            category: "Drinks & cocktails",
            price: 2500,
            description: "Chilled hibiscus drink infused with pineapple, ginger, cloves, and citrus.",
            image: imageBank.drink,
            featured: false,
            popular: true
        },
        {
            id: "m-1023",
            title: "Chapman Pitcher",
            category: "Drinks & cocktails",
            price: 5000,
            description: "Classic Nigerian Chapman served with cucumber, citrus, bitters, and soda.",
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
            featured: false,
            popular: false
        },
        {
            id: "m-1024",
            title: "Lagos Sunset Mocktail",
            category: "Drinks & cocktails",
            price: 4000,
            description: "Passion fruit, orange, grenadine, lime, and a clean sparkling finish.",
            image: imageBank.drink,
            featured: false,
            popular: false
        }
    ];

    const storeKeys = {
        menu: "ps_menu_v1",
        reservations: "ps_reservations_v1",
        orders: "ps_orders_v1",
        inquiries: "ps_inquiries_v1",
        notifications: "ps_notifications_v1",
        cart: "ps_cart_v1",
        admin: "ps_admin_user_v1",
        session: "ps_admin_session_v1"
    };

    const dashboardStoreKeys = new Set([
        storeKeys.menu,
        storeKeys.reservations,
        storeKeys.orders,
        storeKeys.inquiries,
        storeKeys.cart
    ]);

    const defaultAdmin = {
        id: "admin-1",
        name: "Pleasant Manager",
        email: "admin@pleasantsatisfaction.ng",
        password: "Pleasant@123",
        role: "admin",
        salt: "pleasant-satisfaction-admin-salt-v1"
    };

    const appState = {
        menu: [],
        reservations: [],
        orders: [],
        inquiries: [],
        cart: [],
        menuCategory: "All",
        orderCategory: "All",
        menuSearch: "",
        orderSearch: "",
        currentRoute: "home",
        adminUser: null
    };

    const routes = ["home", "about", "menu", "reservation", "order", "gallery", "contact", "admin"];
    const tokenSecret = "pleasant-satisfaction-static-dashboard-secret";
    let revealObserver = null;

    const qs = (selector, root = document) => root.querySelector(selector);
    const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

    const readStore = (key, fallback) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            console.warn(`Could not read ${key}`, error);
            return fallback;
        }
    };

    const writeStore = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const escapeHTML = (value) => String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const currency = (value) => `NGN ${Number(value || 0).toLocaleString("en-NG", {
        maximumFractionDigits: 0
    })}`;

    const formatDateTime = (value) => {
        if (!value) {
            return "";
        }

        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            return value;
        }

        return date.toLocaleString("en-NG", {
            dateStyle: "medium",
            timeStyle: "short"
        });
    };

    const makeId = (prefix) => {
        const random = Math.random().toString(36).slice(2, 7).toUpperCase();
        const stamp = Date.now().toString(36).slice(-5).toUpperCase();
        return `${prefix}-${stamp}-${random}`;
    };

    const simpleHash = (value) => {
        let h1 = 0xdeadbeef;
        let h2 = 0x41c6ce57;
        const input = String(value);

        for (let i = 0; i < input.length; i += 1) {
            const ch = input.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }

        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return `${(h2 >>> 0).toString(16)}${(h1 >>> 0).toString(16)}`;
    };

    const bufferToBase64Url = (buffer) => {
        const bytes = new Uint8Array(buffer);
        let binary = "";
        bytes.forEach((byte) => {
            binary += String.fromCharCode(byte);
        });
        return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
    };

    const textToBase64Url = (value) => {
        const bytes = new TextEncoder().encode(value);
        let binary = "";
        bytes.forEach((byte) => {
            binary += String.fromCharCode(byte);
        });
        return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
    };

    const base64UrlToText = (value) => {
        const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
        const padded = `${normalized}${"=".repeat((4 - (normalized.length % 4)) % 4)}`;
        const binary = atob(padded);
        const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
        return new TextDecoder().decode(bytes);
    };

    const digestBase64Url = async (value) => {
        if (window.crypto?.subtle) {
            const bytes = new TextEncoder().encode(value);
            const digest = await window.crypto.subtle.digest("SHA-256", bytes);
            return bufferToBase64Url(digest);
        }

        return `fallback-${simpleHash(value)}`;
    };

    const derivePasswordHash = async (password, salt) => {
        if (window.crypto?.subtle) {
            try {
                const key = await window.crypto.subtle.importKey(
                    "raw",
                    new TextEncoder().encode(password),
                    "PBKDF2",
                    false,
                    ["deriveBits"]
                );
                const bits = await window.crypto.subtle.deriveBits(
                    {
                        name: "PBKDF2",
                        salt: new TextEncoder().encode(salt),
                        iterations: 120000,
                        hash: "SHA-256"
                    },
                    key,
                    256
                );
                return bufferToBase64Url(bits);
            } catch (error) {
                console.warn("Web Crypto password hashing failed; using local fallback.", error);
            }
        }

        return `fallback-${simpleHash(`${salt}:${password}`)}`;
    };

    const createToken = async (payload) => {
        const headerPart = textToBase64Url(JSON.stringify({ alg: "SHA-256", typ: "JWT" }));
        const payloadPart = textToBase64Url(JSON.stringify({
            ...payload,
            exp: Date.now() + 1000 * 60 * 60 * 4
        }));
        const signature = await digestBase64Url(`${headerPart}.${payloadPart}.${tokenSecret}`);
        return `${headerPart}.${payloadPart}.${signature}`;
    };

    const verifyToken = async (token) => {
        const parts = String(token || "").split(".");
        if (parts.length !== 3) {
            return null;
        }

        const [headerPart, payloadPart, signature] = parts;
        const expected = await digestBase64Url(`${headerPart}.${payloadPart}.${tokenSecret}`);
        if (expected !== signature) {
            return null;
        }

        try {
            const payload = JSON.parse(base64UrlToText(payloadPart));
            if (!payload.exp || payload.exp < Date.now()) {
                return null;
            }
            if (!["admin", "manager"].includes(payload.role)) {
                return null;
            }
            return payload;
        } catch (error) {
            return null;
        }
    };

    const toast = (message) => {
        if (!toastStack) {
            return;
        }

        const item = document.createElement("div");
        item.className = "toast";
        item.textContent = message;
        toastStack.appendChild(item);

        window.setTimeout(() => {
            item.remove();
        }, 3600);
    };

    const setLoading = (button, isLoading) => {
        if (!button) {
            return;
        }

        button.classList.toggle("is-loading", isLoading);
        button.disabled = isLoading;
    };

    const fakeDelay = () => new Promise((resolve) => {
        window.setTimeout(resolve, 360);
    });

    const addNotification = (type, subject, payload) => {
        const notifications = readStore(storeKeys.notifications, []);
        notifications.unshift({
            id: makeId("PS-NOTE"),
            type,
            subject,
            payload,
            createdAt: new Date().toISOString()
        });
        writeStore(storeKeys.notifications, notifications);
    };

    const seedData = async () => {
        if (!localStorage.getItem(storeKeys.menu)) {
            writeStore(storeKeys.menu, initialMenu);
        }

        if (!localStorage.getItem(storeKeys.reservations)) {
            writeStore(storeKeys.reservations, []);
        }

        if (!localStorage.getItem(storeKeys.orders)) {
            writeStore(storeKeys.orders, []);
        }

        if (!localStorage.getItem(storeKeys.inquiries)) {
            writeStore(storeKeys.inquiries, []);
        }

        if (!localStorage.getItem(storeKeys.cart)) {
            writeStore(storeKeys.cart, []);
        }

        const defaultPasswordHash = await derivePasswordHash(defaultAdmin.password, defaultAdmin.salt);
        const storedAdmin = readStore(storeKeys.admin, null);

        if (
            !storedAdmin ||
            storedAdmin.email !== defaultAdmin.email ||
            (storedAdmin.email === defaultAdmin.email && storedAdmin.passwordHash !== defaultPasswordHash) ||
            !storedAdmin.email ||
            !storedAdmin.salt ||
            !storedAdmin.passwordHash ||
            !storedAdmin.role
        ) {
            writeStore(storeKeys.admin, {
                id: defaultAdmin.id,
                name: defaultAdmin.name,
                email: defaultAdmin.email,
                role: defaultAdmin.role,
                salt: defaultAdmin.salt,
                passwordHash: defaultPasswordHash
            });
        }
    };

    const loadState = () => {
        appState.menu = readStore(storeKeys.menu, initialMenu);
        appState.reservations = readStore(storeKeys.reservations, []);
        appState.orders = readStore(storeKeys.orders, []);
        appState.inquiries = readStore(storeKeys.inquiries, []);
        appState.cart = readStore(storeKeys.cart, []);
    };

    const loadDashboardState = () => {
        appState.menu = readStore(storeKeys.menu, initialMenu);
        appState.reservations = readStore(storeKeys.reservations, []);
        appState.orders = readStore(storeKeys.orders, []);
        appState.inquiries = readStore(storeKeys.inquiries, []);
    };

    const saveMenu = () => writeStore(storeKeys.menu, appState.menu);
    const saveReservations = () => writeStore(storeKeys.reservations, appState.reservations);
    const saveOrders = () => writeStore(storeKeys.orders, appState.orders);
    const saveInquiries = () => writeStore(storeKeys.inquiries, appState.inquiries);
    const saveCart = () => writeStore(storeKeys.cart, appState.cart);

    const observeReveals = (root = document) => {
        const items = qsa(".reveal:not(.is-visible)", root);
        if (!items.length) {
            return;
        }

        if (revealObserver) {
            items.forEach((item) => revealObserver.observe(item));
            return;
        }

        items.forEach((item) => item.classList.add("is-visible"));
    };

    const setupRevealObserver = () => {
        if (!("IntersectionObserver" in window)) {
            observeReveals();
            return;
        }

        revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        });

        observeReveals();
    };

    const closeMenu = () => {
        body.classList.remove("nav-open");
        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");
        }
    };

    const openCart = () => {
        renderCart();
        body.classList.add("cart-open");
        cartDrawer?.setAttribute("aria-hidden", "false");
        closeCart?.focus();
    };

    const closeCartDrawer = () => {
        body.classList.remove("cart-open");
        cartDrawer?.setAttribute("aria-hidden", "true");
    };

    const updateHeader = () => {
        header?.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    const setRoute = (route) => {
        const cleanRoute = routes.includes(route) ? route : "home";
        appState.currentRoute = cleanRoute;

        qsa(".route-page").forEach((page) => {
            page.classList.toggle("is-active", page.dataset.page === cleanRoute);
        });

        qsa("[data-route-link]").forEach((link) => {
            const hrefRoute = link.getAttribute("href")?.replace("#", "");
            link.classList.toggle("is-active", hrefRoute === cleanRoute);
        });

        body.classList.remove(...routes.map((item) => `${item}-route`));
        body.classList.add(`${cleanRoute}-route`);

        closeMenu();
        closeCartDrawer();
        updateHeader();
        document.title = cleanRoute === "home"
            ? "Pleasant Satisfaction | Ogudu, Lagos Restaurant"
            : `${cleanRoute[0].toUpperCase()}${cleanRoute.slice(1)} | Pleasant Satisfaction`;

        if (cleanRoute === "admin") {
            loadDashboardState();
            refreshAdminSession();
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
        observeReveals(qs(`[data-page="${cleanRoute}"]`) || document);
    };

    const routeFromHash = () => {
        const route = window.location.hash.replace("#", "");
        setRoute(route || "home");
    };

    const populateCategorySelect = () => {
        const select = qs("#menuManagerForm select[name='category']");
        if (!select) {
            return;
        }

        select.innerHTML = categories
            .map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`)
            .join("");
    };

    const getFilteredMenu = (context) => {
        const activeCategory = context === "order" ? appState.orderCategory : appState.menuCategory;
        const query = (context === "order" ? appState.orderSearch : appState.menuSearch).trim().toLowerCase();

        return appState.menu.filter((item) => {
            const categoryMatches = activeCategory === "All" || item.category === activeCategory;
            const text = `${item.title} ${item.category} ${item.description}`.toLowerCase();
            const queryMatches = !query || text.includes(query);
            return categoryMatches && queryMatches;
        });
    };

    const menuCard = (item, compact = false) => `
        <article class="menu-card reveal">
            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
            <div class="menu-body">
                <span class="pill">${escapeHTML(item.category)}</span>
                <h3>${escapeHTML(item.title)}</h3>
                <p>${escapeHTML(item.description)}</p>
                <div class="menu-meta">
                    <strong class="price">${currency(item.price)}</strong>
                    <button class="btn btn-primary" type="button" data-add-cart="${escapeHTML(item.id)}">${compact ? "Add" : "Add to Cart"}</button>
                </div>
            </div>
        </article>
    `;

    const renderCategoryFilters = (containerId, activeCategory, attribute) => {
        const container = document.getElementById(containerId);
        if (!container) {
            return;
        }

        const allCategories = ["All", ...categories];
        container.innerHTML = allCategories.map((category) => `
            <button class="${category === activeCategory ? "is-active" : ""}" type="button" ${attribute}="${escapeHTML(category)}">
                ${escapeHTML(category)}
            </button>
        `).join("");
    };

    const renderMenu = () => {
        const menuGrid = document.getElementById("menuGrid");
        if (menuGrid) {
            const items = getFilteredMenu("menu");
            menuGrid.innerHTML = items.length
                ? items.map((item) => menuCard(item)).join("")
                : `<div class="empty-state">No dish matches your search yet.</div>`;
            observeReveals(menuGrid);
        }

        renderCategoryFilters("categoryFilters", appState.menuCategory, "data-menu-filter");
    };

    const renderOrderMenu = () => {
        const orderGrid = document.getElementById("orderMenuGrid");
        if (orderGrid) {
            const items = getFilteredMenu("order");
            orderGrid.innerHTML = items.length
                ? items.map((item) => menuCard(item, true)).join("")
                : `<div class="empty-state">No order item matches your search.</div>`;
            observeReveals(orderGrid);
        }

        renderCategoryFilters("orderCategoryFilters", appState.orderCategory, "data-order-filter");
    };

    const renderHomeDishes = () => {
        const featuredGrid = document.getElementById("featuredGrid");
        const popularGrid = document.getElementById("popularGrid");

        if (featuredGrid) {
            const featured = appState.menu.filter((item) => item.featured).slice(0, 6);
            featuredGrid.innerHTML = featured.map((item) => `
                <article class="dish-card reveal">
                    <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
                    <div class="dish-body">
                        <span class="pill">${escapeHTML(item.category)}</span>
                        <h3>${escapeHTML(item.title)}</h3>
                        <p>${escapeHTML(item.description)}</p>
                        <div class="dish-meta">
                            <strong class="price">${currency(item.price)}</strong>
                            <button class="btn btn-dark" type="button" data-add-cart="${escapeHTML(item.id)}">Add</button>
                        </div>
                    </div>
                </article>
            `).join("");
            observeReveals(featuredGrid);
        }

        if (popularGrid) {
            const popular = appState.menu.filter((item) => item.popular).slice(0, 4);
            popularGrid.innerHTML = popular.map((item) => `
                <article class="mini-menu-card reveal">
                    <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
                    <div>
                        <h3>${escapeHTML(item.title)}</h3>
                        <p>${currency(item.price)}</p>
                    </div>
                </article>
            `).join("");
            observeReveals(popularGrid);
        }
    };

    const findMenuItem = (id) => appState.menu.find((item) => item.id === id);

    const cartLineTotal = (line) => {
        const item = findMenuItem(line.id);
        return item ? item.price * line.qty : 0;
    };

    const cartTotal = () => appState.cart.reduce((total, line) => total + cartLineTotal(line), 0);

    const cartCount = () => appState.cart.reduce((count, line) => count + line.qty, 0);

    const getCartLines = () => appState.cart
        .map((line) => ({ ...line, item: findMenuItem(line.id) }))
        .filter((line) => line.item);

    const cartLineMarkup = (line) => `
        <article class="cart-line">
            <img src="${escapeHTML(line.item.image)}" alt="${escapeHTML(line.item.title)}">
            <div>
                <h3>${escapeHTML(line.item.title)}</h3>
                <p>${currency(line.item.price)} each</p>
            </div>
            <div class="quantity-controls" aria-label="Quantity controls for ${escapeHTML(line.item.title)}">
                <button type="button" data-cart-dec="${escapeHTML(line.item.id)}" aria-label="Decrease ${escapeHTML(line.item.title)}">-</button>
                <strong>${line.qty}</strong>
                <button type="button" data-cart-inc="${escapeHTML(line.item.id)}" aria-label="Increase ${escapeHTML(line.item.title)}">+</button>
                <button type="button" data-cart-remove="${escapeHTML(line.item.id)}" aria-label="Remove ${escapeHTML(line.item.title)}">X</button>
            </div>
        </article>
    `;

    const renderCart = () => {
        const countNode = document.getElementById("cartCount");
        const subtotalNode = document.getElementById("cartSubtotal");
        const checkoutTotal = document.getElementById("checkoutTotal");
        const cartItems = document.getElementById("cartItems");
        const checkoutCart = document.getElementById("checkoutCart");
        const lines = getCartLines();
        const empty = `<div class="empty-state">Your cart is empty.</div>`;

        if (countNode) {
            countNode.textContent = String(cartCount());
        }

        if (subtotalNode) {
            subtotalNode.textContent = currency(cartTotal());
        }

        if (checkoutTotal) {
            checkoutTotal.textContent = currency(cartTotal());
        }

        if (cartItems) {
            cartItems.innerHTML = lines.length ? lines.map(cartLineMarkup).join("") : empty;
        }

        if (checkoutCart) {
            checkoutCart.innerHTML = lines.length ? lines.map(cartLineMarkup).join("") : empty;
        }
    };

    const addToCart = (id) => {
        const item = findMenuItem(id);
        if (!item) {
            return;
        }

        const existing = appState.cart.find((line) => line.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            appState.cart.push({ id, qty: 1 });
        }

        saveCart();
        renderCart();
        toast(`${item.title} added to cart.`);
    };

    const updateCartQty = (id, delta) => {
        const line = appState.cart.find((item) => item.id === id);
        if (!line) {
            return;
        }

        line.qty += delta;
        if (line.qty <= 0) {
            appState.cart = appState.cart.filter((item) => item.id !== id);
        }

        saveCart();
        renderCart();
    };

    const removeCartItem = (id) => {
        appState.cart = appState.cart.filter((item) => item.id !== id);
        saveCart();
        renderCart();
    };

    const readForm = (form) => Object.fromEntries(new FormData(form).entries());

    const handleReservation = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const button = form.querySelector("button[type='submit']");
        const status = document.getElementById("reservationStatus");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(button, true);
        await fakeDelay();

        const data = readForm(form);
        const reservation = {
            id: makeId("PS-RES"),
            name: data.name.trim(),
            phone: data.phone.trim(),
            email: data.email.trim(),
            date: data.date,
            time: data.time,
            guests: Number(data.guests || 1),
            requests: data.requests.trim(),
            status: "Pending",
            createdAt: new Date().toISOString()
        };

        appState.reservations = readStore(storeKeys.reservations, []);
        appState.reservations.unshift(reservation);
        saveReservations();
        addNotification("reservation", `Reservation ${reservation.id}`, reservation);
        status.textContent = `Reservation received. Confirmation reference: ${reservation.id}.`;
        toast("Reservation saved for admin review.");
        form.reset();
        setMinimumReservationDate();
        setLoading(button, false);
        renderAdmin();
    };

    const handleCheckout = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const button = form.querySelector("button[type='submit']");
        const status = document.getElementById("orderStatus");
        const lines = getCartLines();

        if (!lines.length) {
            status.textContent = "Add at least one menu item before checkout.";
            return;
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(button, true);
        await fakeDelay();

        const data = readForm(form);
        const order = {
            id: makeId("PS-ORDER"),
            reference: makeId("PS-ORDER"),
            customer: {
                name: data.name.trim(),
                phone: data.phone.trim(),
                email: data.email.trim(),
                address: data.address.trim()
            },
            fulfillment: data.fulfillment,
            status: "Received",
            total: cartTotal(),
            items: lines.map((line) => ({
                id: line.item.id,
                title: line.item.title,
                price: line.item.price,
                qty: line.qty
            })),
            createdAt: new Date().toISOString()
        };

        appState.orders = readStore(storeKeys.orders, []);
        appState.orders.unshift(order);
        appState.cart = [];
        saveOrders();
        saveCart();
        addNotification("order", `Order ${order.reference}`, order);
        form.reset();
        status.textContent = `Order placed. Tracking reference: ${order.reference}.`;
        toast("Order saved and tracking code generated.");
        renderCart();
        renderAdmin();
        setLoading(button, false);
    };

    const handleTracking = (event) => {
        event.preventDefault();
        const input = document.getElementById("trackingCode");
        const result = document.getElementById("trackingResult");
        const code = input.value.trim().toUpperCase();
        const order = appState.orders.find((item) => item.reference.toUpperCase() === code || item.id.toUpperCase() === code);

        result.textContent = order
            ? `${order.reference}: ${order.status}. Total ${currency(order.total)} for ${order.fulfillment.toLowerCase()}.`
            : "No order found with that reference.";
    };

    const handleContact = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const button = form.querySelector("button[type='submit']");
        const status = document.getElementById("contactStatus");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(button, true);
        await fakeDelay();

        const data = readForm(form);
        const inquiry = {
            id: makeId("PS-INQ"),
            name: data.name.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            message: data.message.trim(),
            status: "New",
            createdAt: new Date().toISOString()
        };

        appState.inquiries = readStore(storeKeys.inquiries, []);
        appState.inquiries.unshift(inquiry);
        saveInquiries();
        addNotification("inquiry", `Inquiry from ${inquiry.name}`, inquiry);
        form.reset();
        status.textContent = "Message saved. Email notification queued for the restaurant team.";
        toast("Inquiry saved to the admin dashboard.");
        renderAdmin();
        setLoading(button, false);
    };

    const handleNewsletter = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const button = form.querySelector("button[type='submit']");
        const status = document.getElementById("newsletterStatus");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(button, true);
        await fakeDelay();
        const email = new FormData(form).get("email");
        addNotification("newsletter", "Newsletter signup", { email });
        status.textContent = "You are on the Pleasant Satisfaction list.";
        form.reset();
        setLoading(button, false);
    };

    const fillMenuForm = (item) => {
        const form = document.getElementById("menuManagerForm");
        if (!form || !item) {
            return;
        }

        form.elements.id.value = item.id;
        form.elements.title.value = item.title;
        form.elements.category.value = item.category;
        form.elements.price.value = item.price;
        form.elements.image.value = item.image;
        form.elements.description.value = item.description;
        form.elements.upload.value = "";
        qs("#menuManagerStatus").textContent = `Editing ${item.title}.`;
        form.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const resetMenuForm = () => {
        const form = document.getElementById("menuManagerForm");
        const status = document.getElementById("menuManagerStatus");
        if (form) {
            form.reset();
            form.elements.id.value = "";
        }
        if (status) {
            status.textContent = "";
        }
    };

    const fileToDataUrl = (file) => new Promise((resolve, reject) => {
        if (!file) {
            resolve("");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    const handleMenuManager = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const status = document.getElementById("menuManagerStatus");
        const button = form.querySelector("button[type='submit']");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setLoading(button, true);
        await fakeDelay();

        const data = readForm(form);
        const uploaded = await fileToDataUrl(form.elements.upload.files[0]);
        const item = {
            id: data.id || makeId("m"),
            title: data.title.trim(),
            category: data.category,
            price: Number(data.price || 0),
            image: uploaded || data.image.trim() || imageBank.jollof,
            description: data.description.trim(),
            featured: Boolean(data.id ? appState.menu.find((entry) => entry.id === data.id)?.featured : false),
            popular: Boolean(data.id ? appState.menu.find((entry) => entry.id === data.id)?.popular : false)
        };

        const index = appState.menu.findIndex((entry) => entry.id === item.id);
        if (index >= 0) {
            appState.menu.splice(index, 1, item);
            status.textContent = `${item.title} updated.`;
        } else {
            appState.menu.unshift(item);
            status.textContent = `${item.title} added to the menu.`;
        }

        saveMenu();
        resetMenuForm();
        renderAllMenuSurfaces();
        renderAdmin();
        setLoading(button, false);
    };

    const renderAdminStats = () => {
        const adminStats = document.getElementById("adminStats");
        if (!adminStats) {
            return;
        }

        const revenue = appState.orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
        const pendingReservations = appState.reservations.filter((item) => item.status === "Pending").length;
        const activeOrders = appState.orders.filter((item) => !["Delivered", "Cancelled", "Completed"].includes(item.status)).length;
        const newInquiries = appState.inquiries.filter((item) => item.status === "New").length;

        const cards = [
            ["Menu items", appState.menu.length],
            ["Pending reservations", pendingReservations],
            ["Active orders", activeOrders],
            ["Revenue", currency(revenue)]
        ];

        adminStats.innerHTML = cards.map(([label, value]) => `
            <article class="dashboard-card">
                <span>${escapeHTML(label)}</span>
                <strong>${escapeHTML(value)}</strong>
            </article>
        `).join("") + `
            <article class="dashboard-card">
                <span>New inquiries</span>
                <strong>${newInquiries}</strong>
            </article>
        `;
    };

    const renderAdminMenu = () => {
        const rows = document.getElementById("adminMenuRows");
        if (!rows) {
            return;
        }

        rows.innerHTML = appState.menu.map((item) => `
            <tr>
                <td><strong>${escapeHTML(item.title)}</strong><br><span>${escapeHTML(item.description.slice(0, 70))}${item.description.length > 70 ? "..." : ""}</span></td>
                <td>${escapeHTML(item.category)}</td>
                <td>${currency(item.price)}</td>
                <td>
                    <div class="table-actions">
                        <button class="table-action" type="button" data-edit-menu="${escapeHTML(item.id)}" aria-label="Edit ${escapeHTML(item.title)}">Edit</button>
                        <button class="table-action" type="button" data-delete-menu="${escapeHTML(item.id)}" aria-label="Delete ${escapeHTML(item.title)}">Del</button>
                    </div>
                </td>
            </tr>
        `).join("") || `<tr><td colspan="4">No menu items yet.</td></tr>`;
    };

    const renderReservationRows = () => {
        const rows = document.getElementById("adminReservationRows");
        if (!rows) {
            return;
        }

        rows.innerHTML = appState.reservations.map((item) => `
            <tr>
                <td>${escapeHTML(item.id)}</td>
                <td><strong>${escapeHTML(item.name)}</strong><br>${escapeHTML(item.phone)}<br>${escapeHTML(item.guests)} guests</td>
                <td>${escapeHTML(item.date)}<br>${escapeHTML(item.time)}<br><span>${escapeHTML(item.requests || "No request")}</span></td>
                <td>
                    <select data-reservation-status="${escapeHTML(item.id)}" aria-label="Reservation status for ${escapeHTML(item.name)}">
                        ${["Pending", "Confirmed", "Seated", "Cancelled"].map((status) => `<option value="${status}" ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}
                    </select>
                </td>
                <td>
                    <button class="table-action" type="button" data-delete-reservation="${escapeHTML(item.id)}" aria-label="Delete reservation ${escapeHTML(item.id)}">Del</button>
                </td>
            </tr>
        `).join("") || `<tr><td colspan="5">No reservations yet.</td></tr>`;
    };

    const renderOrderRows = () => {
        const rows = document.getElementById("adminOrderRows");
        if (!rows) {
            return;
        }

        rows.innerHTML = appState.orders.map((order) => `
            <tr>
                <td>${escapeHTML(order.reference)}<br><span>${formatDateTime(order.createdAt)}</span></td>
                <td><strong>${escapeHTML(order.customer.name)}</strong><br>${escapeHTML(order.customer.phone)}<br>${escapeHTML(order.fulfillment)}</td>
                <td>${currency(order.total)}</td>
                <td>
                    <select data-order-status="${escapeHTML(order.id)}" aria-label="Order status for ${escapeHTML(order.reference)}">
                        ${["Received", "Preparing", "Ready", "Out for delivery", "Delivered", "Completed", "Cancelled"].map((status) => `<option value="${status}" ${order.status === status ? "selected" : ""}>${status}</option>`).join("")}
                    </select>
                </td>
                <td>${order.items.map((item) => `${escapeHTML(item.qty)}x ${escapeHTML(item.title)}`).join("<br>")}</td>
            </tr>
        `).join("") || `<tr><td colspan="5">No customer orders yet.</td></tr>`;
    };

    const renderInquiryRows = () => {
        const rows = document.getElementById("adminInquiryRows");
        if (!rows) {
            return;
        }

        rows.innerHTML = appState.inquiries.map((item) => `
            <tr>
                <td><strong>${escapeHTML(item.name)}</strong><br>${formatDateTime(item.createdAt)}</td>
                <td>${escapeHTML(item.email)}<br>${escapeHTML(item.phone || "No phone")}</td>
                <td>${escapeHTML(item.message)}</td>
                <td>${escapeHTML(item.status)}</td>
                <td>
                    <div class="table-actions">
                        <button class="table-action" type="button" data-read-inquiry="${escapeHTML(item.id)}">Read</button>
                        <button class="table-action" type="button" data-delete-inquiry="${escapeHTML(item.id)}">Del</button>
                    </div>
                </td>
            </tr>
        `).join("") || `<tr><td colspan="5">No inquiries yet.</td></tr>`;
    };

    const renderAnalytics = () => {
        const grid = document.getElementById("analyticsGrid");
        if (!grid) {
            return;
        }

        const ordersByStatus = appState.orders.reduce((map, order) => {
            map[order.status] = (map[order.status] || 0) + 1;
            return map;
        }, {});
        const menuByCategory = categories.map((category) => ({
            label: category,
            value: appState.menu.filter((item) => item.category === category).length
        }));
        const maxCategory = Math.max(...menuByCategory.map((item) => item.value), 1);
        const totalRevenue = appState.orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

        const statusCards = Object.entries(ordersByStatus).map(([label, value]) => `
            <article class="analytics-card">
                <span>${escapeHTML(label)} orders</span>
                <strong>${value}</strong>
                <div class="bar-track"><i class="bar-fill" style="width:${Math.min(value * 18, 100)}%"></i></div>
            </article>
        `).join("");

        const categoryCards = menuByCategory.map((item) => `
            <article class="analytics-card">
                <span>${escapeHTML(item.label)}</span>
                <strong>${item.value}</strong>
                <div class="bar-track"><i class="bar-fill" style="width:${Math.max((item.value / maxCategory) * 100, 6)}%"></i></div>
            </article>
        `).join("");

        grid.innerHTML = `
            <article class="analytics-card">
                <span>Total reservations</span>
                <strong>${appState.reservations.length}</strong>
                <div class="bar-track"><i class="bar-fill" style="width:${Math.min(appState.reservations.length * 10, 100)}%"></i></div>
            </article>
            <article class="analytics-card">
                <span>Total revenue</span>
                <strong>${currency(totalRevenue)}</strong>
                <div class="bar-track"><i class="bar-fill" style="width:${totalRevenue ? 100 : 8}%"></i></div>
            </article>
            ${statusCards || ""}
            ${categoryCards}
        `;
    };

    const renderAdmin = (options = {}) => {
        if (options.fromStorage !== false) {
            loadDashboardState();
        }

        renderAdminStats();
        renderAdminMenu();
        renderReservationRows();
        renderOrderRows();
        renderInquiryRows();
        renderAnalytics();
    };

    const refreshAdminSession = async () => {
        const login = document.getElementById("adminLoginForm");
        const dashboard = document.getElementById("adminDashboard");
        const roleText = document.getElementById("adminRoleText");
        const token = localStorage.getItem(storeKeys.session);
        const payload = await verifyToken(token);

        appState.adminUser = payload;
        if (payload) {
            login.hidden = true;
            dashboard.hidden = false;
            if (roleText) {
                roleText.textContent = `Signed in as ${payload.email} with ${payload.role} access.`;
            }
            loadDashboardState();
            renderAdmin();
        } else {
            login.hidden = false;
            dashboard.hidden = true;
        }
    };

    const handleAdminLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const status = document.getElementById("adminLoginStatus");
        const button = form.querySelector("button[type='submit']");
        const data = readForm(form);
        const admin = readStore(storeKeys.admin, null);

        setLoading(button, true);
        await fakeDelay();

        if (!admin || data.email.trim().toLowerCase() !== admin.email.toLowerCase()) {
            status.textContent = "Invalid admin credentials.";
            setLoading(button, false);
            return;
        }

        const passwordHash = await derivePasswordHash(String(data.password || "").trim(), admin.salt);
        if (passwordHash !== admin.passwordHash) {
            status.textContent = "Invalid admin credentials.";
            setLoading(button, false);
            return;
        }

        const token = await createToken({
            sub: admin.id,
            email: admin.email,
            role: admin.role,
            name: admin.name
        });

        localStorage.setItem(storeKeys.session, token);
        form.reset();
        status.textContent = "";
        await refreshAdminSession();
        toast("Admin session started.");
        setLoading(button, false);
    };

    const logoutAdmin = () => {
        localStorage.removeItem(storeKeys.session);
        appState.adminUser = null;
        refreshAdminSession();
        toast("Admin session ended.");
    };

    const renderAllMenuSurfaces = () => {
        renderHomeDishes();
        renderMenu();
        renderOrderMenu();
        renderCart();
    };

    const setMinimumReservationDate = () => {
        const dateInput = document.getElementById("reservationDate");
        if (!dateInput) {
            return;
        }

        const today = new Date();
        const offset = today.getTimezoneOffset();
        const localDate = new Date(today.getTime() - offset * 60 * 1000).toISOString().split("T")[0];
        dateInput.min = localDate;
        if (!dateInput.value) {
            dateInput.value = localDate;
        }
    };

    const setupEvents = () => {
        if (year) {
            year.textContent = new Date().getFullYear();
        }

        menuToggle?.addEventListener("click", () => {
            const isOpen = body.classList.toggle("nav-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        });

        cartButton?.addEventListener("click", openCart);
        closeCart?.addEventListener("click", closeCartDrawer);
        drawerBackdrop?.addEventListener("click", closeCartDrawer);

        window.addEventListener("scroll", updateHeader, { passive: true });
        window.addEventListener("hashchange", routeFromHash);

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
                closeCartDrawer();
            }
        });

        document.addEventListener("click", (event) => {
            const routeLink = event.target.closest("[data-route-link]");
            if (routeLink) {
                closeMenu();
                closeCartDrawer();
            }

            const addButton = event.target.closest("[data-add-cart]");
            if (addButton) {
                addToCart(addButton.dataset.addCart);
                return;
            }

            const decButton = event.target.closest("[data-cart-dec]");
            if (decButton) {
                updateCartQty(decButton.dataset.cartDec, -1);
                return;
            }

            const incButton = event.target.closest("[data-cart-inc]");
            if (incButton) {
                updateCartQty(incButton.dataset.cartInc, 1);
                return;
            }

            const removeButton = event.target.closest("[data-cart-remove]");
            if (removeButton) {
                removeCartItem(removeButton.dataset.cartRemove);
                return;
            }

            const menuFilter = event.target.closest("[data-menu-filter]");
            if (menuFilter) {
                appState.menuCategory = menuFilter.dataset.menuFilter;
                renderMenu();
                return;
            }

            const orderFilter = event.target.closest("[data-order-filter]");
            if (orderFilter) {
                appState.orderCategory = orderFilter.dataset.orderFilter;
                renderOrderMenu();
                return;
            }

            const editMenu = event.target.closest("[data-edit-menu]");
            if (editMenu) {
                fillMenuForm(findMenuItem(editMenu.dataset.editMenu));
                return;
            }

            const deleteMenu = event.target.closest("[data-delete-menu]");
            if (deleteMenu) {
                appState.menu = appState.menu.filter((item) => item.id !== deleteMenu.dataset.deleteMenu);
                appState.cart = appState.cart.filter((line) => line.id !== deleteMenu.dataset.deleteMenu);
                saveMenu();
                saveCart();
                renderAllMenuSurfaces();
                renderAdmin();
                toast("Menu item deleted.");
                return;
            }

            const deleteReservation = event.target.closest("[data-delete-reservation]");
            if (deleteReservation) {
                loadDashboardState();
                appState.reservations = appState.reservations.filter((item) => item.id !== deleteReservation.dataset.deleteReservation);
                saveReservations();
                renderAdmin();
                toast("Reservation deleted.");
                return;
            }

            const readInquiry = event.target.closest("[data-read-inquiry]");
            if (readInquiry) {
                loadDashboardState();
                const inquiry = appState.inquiries.find((item) => item.id === readInquiry.dataset.readInquiry);
                if (inquiry) {
                    inquiry.status = "Read";
                    saveInquiries();
                    renderAdmin();
                }
                return;
            }

            const deleteInquiry = event.target.closest("[data-delete-inquiry]");
            if (deleteInquiry) {
                loadDashboardState();
                appState.inquiries = appState.inquiries.filter((item) => item.id !== deleteInquiry.dataset.deleteInquiry);
                saveInquiries();
                renderAdmin();
                toast("Inquiry deleted.");
            }
        });

        document.addEventListener("change", (event) => {
            const reservationStatus = event.target.closest("[data-reservation-status]");
            if (reservationStatus) {
                loadDashboardState();
                const reservation = appState.reservations.find((item) => item.id === reservationStatus.dataset.reservationStatus);
                if (reservation) {
                    reservation.status = reservationStatus.value;
                    saveReservations();
                    renderAdminStats();
                    renderAnalytics();
                    toast("Reservation status updated.");
                }
                return;
            }

            const orderStatus = event.target.closest("[data-order-status]");
            if (orderStatus) {
                loadDashboardState();
                const order = appState.orders.find((item) => item.id === orderStatus.dataset.orderStatus);
                if (order) {
                    order.status = orderStatus.value;
                    saveOrders();
                    renderAdminStats();
                    renderAnalytics();
                    toast("Order status updated.");
                }
            }
        });

        document.getElementById("menuSearch")?.addEventListener("input", (event) => {
            appState.menuSearch = event.target.value;
            renderMenu();
        });

        document.getElementById("clearMenuSearch")?.addEventListener("click", () => {
            const input = document.getElementById("menuSearch");
            if (input) {
                input.value = "";
            }
            appState.menuSearch = "";
            appState.menuCategory = "All";
            renderMenu();
        });

        document.getElementById("orderSearch")?.addEventListener("input", (event) => {
            appState.orderSearch = event.target.value;
            renderOrderMenu();
        });

        document.getElementById("reservationForm")?.addEventListener("submit", handleReservation);
        document.getElementById("checkoutForm")?.addEventListener("submit", handleCheckout);
        document.getElementById("trackingForm")?.addEventListener("submit", handleTracking);
        document.getElementById("contactForm")?.addEventListener("submit", handleContact);
        document.getElementById("newsletterForm")?.addEventListener("submit", handleNewsletter);
        document.getElementById("adminLoginForm")?.addEventListener("submit", handleAdminLogin);
        document.getElementById("adminLogout")?.addEventListener("click", logoutAdmin);
        document.getElementById("adminRefresh")?.addEventListener("click", () => {
            loadDashboardState();
            renderAdmin({ fromStorage: false });
            toast("Admin dashboard refreshed.");
        });
        document.getElementById("menuManagerForm")?.addEventListener("submit", handleMenuManager);
        document.getElementById("resetMenuForm")?.addEventListener("click", resetMenuForm);

        qsa("[data-admin-tab]").forEach((tab) => {
            tab.addEventListener("click", () => {
                const name = tab.dataset.adminTab;
                qsa("[data-admin-tab]").forEach((item) => item.classList.toggle("is-active", item === tab));
                qsa("[data-admin-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.adminPanel === name));
            });
        });

        window.addEventListener("storage", (event) => {
            if (!dashboardStoreKeys.has(event.key)) {
                return;
            }

            loadState();
            renderAllMenuSurfaces();

            const dashboard = document.getElementById("adminDashboard");
            if (appState.currentRoute === "admin" && dashboard && !dashboard.hidden) {
                renderAdmin({ fromStorage: false });
                toast("New customer data loaded into admin.");
            }
        });
    };

    await seedData();
    loadState();
    populateCategorySelect();
    setupRevealObserver();
    setupEvents();
    setMinimumReservationDate();
    renderAllMenuSurfaces();
    renderAdmin();
    routeFromHash();
    updateHeader();
    refreshAdminSession();

    window.setTimeout(() => {
        pageLoader?.classList.add("is-hidden");
    }, 420);
});
