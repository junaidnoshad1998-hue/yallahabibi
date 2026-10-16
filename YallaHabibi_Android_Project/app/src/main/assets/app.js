// ----------------------------------------------------
    // DATA: Official Yalla Habibi Menu Items (in Rs.)
    // ----------------------------------------------------
    const MENU_ITEMS = [
      // SHAWARMA ("Real Shawarma Real Happiness")
      {
        id: "m1",
        name: "Chicken Shawarma",
        category: "shawarma",
        price: 950,
        badge: "NEW",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_shawarma.jpg",
        description: "Authentic Lebanese-style grilled chicken shawarma wrapped with creamy garlic toum, pickles, and golden fries."
      },
      {
        id: "m2",
        name: "Kudu Shawarma",
        category: "shawarma",
        price: 1050,
        badge: "👑 Royal Pick",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_shawarma.jpg",
        description: "Signature Kudu-spiced tender strips wrapped in warm artisanal flatbread with smoky Arabian sauce."
      },

      // SANDWICHES ("Wrapped with Culture")
      {
        id: "m3",
        name: "Kudu Special — Small",
        category: "sandwiches",
        price: 899,
        badge: "Popular",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_sandwiches.jpg",
        description: "Savory Kudu-marinated chicken strips, sautéed onions, peppers, and melted cheese in a toasted sub roll."
      },
      {
        id: "m4",
        name: "Kudu Special — Large",
        category: "sandwiches",
        price: 1199,
        badge: "👑 Best Seller",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_sandwiches.jpg",
        description: "Full-sized footlong Kudu Special loaded with extra seasoned meat, cheese sauce, and crisp greens."
      },
      {
        id: "m5",
        name: "Philly Cheese Steak Sandwich",
        category: "sandwiches",
        price: 1250,
        badge: "Signature",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_sandwiches.jpg",
        description: "Tender seared steak strips, caramelized onions, bell peppers, and rich melted cheese on a warm sub."
      },
      {
        id: "m6",
        name: "Chicken Sandwich",
        category: "sandwiches",
        price: 699,
        badge: "",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_sandwiches.jpg",
        description: "Juicy grilled Arabian-spiced chicken strips with crisp lettuce, tomatoes, and house garlic mayo."
      },
      {
        id: "m7",
        name: "Chicken Cheese Sandwich",
        category: "sandwiches",
        price: 799,
        badge: "Cheesy",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_sandwiches.jpg",
        description: "Seasoned grilled chicken smothered in warm melted cheddar and mozzarella inside a toasted roll."
      },

      // BURGERS ("A Burger Like No Other")
      {
        id: "m8",
        name: "Zest Burger",
        category: "burgers",
        price: 750,
        badge: "Crispy",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_burgers.jpg",
        description: "Crunchy golden zinger fillet topped with cheddar cheese, pickles, lettuce, and tangy Zest sauce."
      },
      {
        id: "m9",
        name: "Arabian Fillet Burger — Single",
        category: "burgers",
        price: 850,
        badge: "Arabian Vibe",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_burgers.jpg",
        description: "Single tender Arabian-spiced crispy chicken fillet with signature sauce, cheese slice, and fresh slaw."
      },
      {
        id: "m10",
        name: "Arabian Fillet Burger — Double",
        category: "burgers",
        price: 999,
        badge: "👑 Double Stack",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_burgers.jpg",
        description: "Double-decker crispy Arabian fillets layered with double melted cheese, jalapenos, and bold house sauce."
      },

      // FRIES ("Fries Done Right!")
      {
        id: "m11",
        name: "Salted Fries",
        category: "fries",
        price: 250,
        badge: "Classic",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_fries.jpg",
        description: "Golden, crispy skin-on potato fries lightly tossed with fine sea salt."
      },
      {
        id: "m12",
        name: "Masala Fries",
        category: "fries",
        price: 250,
        badge: "Spicy",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_fries.jpg",
        description: "Crispy golden fries dusted with our bold house Arabian & chaat masala spice blend."
      },
      {
        id: "m13",
        name: "Loaded Fries — Small",
        category: "fries",
        price: 450,
        badge: "",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_fries.jpg",
        description: "Crispy fries topped with warm cheese sauce, smoky mayo drizzle, and sliced jalapeños."
      },
      {
        id: "m14",
        name: "Loaded Fries — Large",
        category: "fries",
        price: 650,
        badge: "Shareable",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_fries.jpg",
        description: "Full platter of golden fries loaded with seasoned chicken chunks, melted cheese, olives, and jalapenos."
      },
      {
        id: "m15",
        name: "Kudu Fries — Small",
        category: "fries",
        price: 550,
        badge: "NEW",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_fries.jpg",
        description: "Golden fries topped with signature Kudu-spiced meat strips, garlic sauce, and jalapeños."
      },
      {
        id: "m16",
        name: "Kudu Fries — Large",
        category: "fries",
        price: 750,
        badge: "👑 Must Try",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_fries.jpg",
        description: "King-sized bowl of crispy fries smothered in tender Kudu strips, rich cheese sauce, and Arabian spices."
      },

      // NUGGETS ("Small Bites Big Happiness")
      {
        id: "m17",
        name: "Arabian Meal",
        category: "nuggets",
        price: 799,
        badge: "Meal Box",
        freeDrinkEligible: true,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_nuggets.jpg",
        description: "Golden-fried Arabian spiced chicken tenders & bites served with seasoned fries and tangy dip."
      },
      {
        id: "m18",
        name: "Croquettes — 4 Pieces",
        category: "nuggets",
        price: 299,
        badge: "4 Pcs",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_nuggets.jpg",
        description: "Four crunchy golden-breaded chicken & cheese croquettes served with house garlic dip."
      },
      {
        id: "m19",
        name: "Croquettes — 8 Pieces",
        category: "nuggets",
        price: 499,
        badge: "8 Pcs",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_nuggets.jpg",
        description: "Eight crispy golden Arabian croquettes served hot with spicy marinara and garlic sauce."
      },

      // DRINKS & SPECIAL DRINKS ("A Royal Sip" & "Free Drink With Every Meal")
      {
        id: "m20",
        name: "Arabian Champagne",
        category: "drinks",
        price: 499,
        badge: "👑 A Royal Sip",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_drinks.jpg",
        description: "Signature non-alcoholic sparkling golden apple & white grape refreshment infused with fresh mint."
      },
      {
        id: "m21",
        name: "Cola Next",
        category: "drinks",
        price: 150,
        badge: "🎁 Free w/ Meal",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_drinks.jpg",
        description: "Ice-cold Cola Next — included FREE with every meal, or add extra cans to your order."
      },
      {
        id: "m22",
        name: "Fizzup Next",
        category: "drinks",
        price: 150,
        badge: "🎁 Free w/ Meal",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_drinks.jpg",
        description: "Crisp lemon-lime Fizzup Next — included FREE with every meal, or order extra."
      },
      {
        id: "m23",
        name: "Rango Next",
        category: "drinks",
        price: 150,
        badge: "🎁 Free w/ Meal",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_drinks.jpg",
        description: "Sparkling orange Rango Next — included FREE with every meal, or order extra."
      },
      {
        id: "m24",
        name: "Water Next",
        category: "drinks",
        price: 100,
        badge: "🎁 Free w/ Meal",
        freeDrinkEligible: false,
        image: "user_uploaded_files/ttl=63d/tool_generated/cat_drinks.jpg",
        description: "Chilled pure bottled mineral water — included FREE with every meal."
      }
    ];

    // ----------------------------------------------------
    // STATE: Tracks current user selections
    // ----------------------------------------------------
    let currentCategory = "all";
    let searchQuery = "";
    let orderMode = "delivery"; // "delivery" | "dinein" | "takeaway"
    let orderItems = {}; // { itemId: quantity }
    let orderCounter = 101;

    // Step 4 State: Customizations, Promo Codes, VIP Points & Sold-Out Stock
    let customAddonsList = []; // [{ itemId, itemName, spice, addons: [], extraPrice }]
    let activePromoCode = "";
    let loyaltyPoints = 120;
    let redeemPointsActive = false;
    let soldOutItems = {}; // { itemId: true }
    let activeCustomizeItemId = null;

    // ----------------------------------------------------
    // DOM ELEMENTS
    // ----------------------------------------------------
    const menuGrid = document.getElementById("menu-grid");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const searchInput = document.getElementById("menu-search-input");
    const orderItemsList = document.getElementById("order-items-list");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const freeDrinkBox = document.getElementById("free-drink-box");
    const freeDrinkCountBadge = document.getElementById("free-drink-count-badge");
    const freeDrinkSelect = document.getElementById("free-drink-select");
    const subtotalEl = document.getElementById("subtotal-amount");
    const taxEl = document.getElementById("tax-amount");
    const totalEl = document.getElementById("total-amount");
    const headerCartCountEl = document.getElementById("header-cart-count");
    const placeOrderBtn = document.getElementById("place-order-btn");
    const clearOrderBtn = document.getElementById("clear-order-btn");

    // Step 2 Mode & Customer Elements
    const modeButtons = document.querySelectorAll(".mode-btn");
    const deliveryFieldsGroup = document.getElementById("delivery-fields-group");
    const tableFieldGroup = document.getElementById("table-field-group");
    const customerNameInput = document.getElementById("customer-name");
    const customerPhoneInput = document.getElementById("customer-phone");
    const customerAddressInput = document.getElementById("customer-address");
    const tableNumberSelect = document.getElementById("table-number");
    const kitchenNotesInput = document.getElementById("kitchen-notes");

    // Modals
    const orderModal = document.getElementById("order-modal");
    const modalOrderNumber = document.getElementById("modal-order-number");
    const modalOrderMode = document.getElementById("modal-order-mode");
    const modalCustomerInfo = document.getElementById("modal-customer-info");
    const modalItemCount = document.getElementById("modal-item-count");
    const modalFreeDrinkRow = document.getElementById("modal-free-drink-row");
    const modalFreeDrink = document.getElementById("modal-free-drink");
    const modalNotesRow = document.getElementById("modal-notes-row");
    const modalNotesText = document.getElementById("modal-notes-text");
    const modalTotalAmount = document.getElementById("modal-total-amount");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    const posterModal = document.getElementById("poster-modal");
    const viewPosterBtn = document.getElementById("view-poster-btn");
    const closePosterBtn = document.getElementById("close-poster-btn");

    // Helper: Format Pakistani Rupees
    function formatRs(amount) {
      return "Rs. " + amount.toLocaleString("en-PK");
    }

    // ----------------------------------------------------
    // 1. RENDER MENU CARDS
    // ----------------------------------------------------
    function renderMenu() {
      menuGrid.innerHTML = "";

      const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = !searchQuery ||
          item.name.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery) ||
          item.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
          <div class="col-span-full bg-[#0d1832] border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
            <p class="text-base font-bold text-amber-400 mb-1">No matching dishes found</p>
            <p class="text-xs">Try searching for "Kudu", "Shawarma", "Burger", or "Fries".</p>
          </div>
        `;
        return;
      }

      filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-[#0d1832] rounded-2xl overflow-hidden border border-amber-500/25 hover:border-amber-400/70 transition-all flex flex-col justify-between shadow-md";
        
        const badgeHtml = item.badge
          ? `<span class="bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow">${item.badge}</span>`
          : "";

        const freeDrinkTag = item.freeDrinkEligible
          ? `<span class="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">+ Free Drink</span>`
          : "";

        const isSoldOut = !!soldOutItems[item.id];
        const soldOutOverlay = isSoldOut
          ? `<div class="absolute inset-0 bg-slate-950/75 flex items-center justify-center"><span class="bg-rose-600 text-white text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">🚫 Sold Out</span></div>`
          : "";
        const actionButtonsHtml = isSoldOut
          ? `<button type="button" disabled class="bg-slate-800 text-slate-500 text-xs font-bold px-3.5 py-2 rounded-xl cursor-not-allowed">Sold Out</button>`
          : `<div class="flex items-center gap-1.5">
              <button type="button" class="customize-dish-btn bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-bold px-2.5 py-2 rounded-xl transition-colors" data-id="${item.id}" title="Customize spice & add-ons">
                ✨ Customize
              </button>
              <button type="button" class="add-to-cart-btn bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-2 rounded-xl transition-colors shadow-sm" data-id="${item.id}">
                + Add to Order
              </button>
            </div>`;

        card.innerHTML = `
          <div>
            <div class="relative h-36 w-full overflow-hidden bg-slate-900">
              <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-300">
              <div class="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                ${badgeHtml}
                ${freeDrinkTag}
              </div>
              ${soldOutOverlay}
              <span class="absolute bottom-2 right-2 text-[10px] uppercase tracking-wider font-bold bg-slate-950/85 text-amber-300 px-2 py-0.5 rounded-md border border-amber-500/30">${item.category}</span>
            </div>
            <div class="p-4">
              <h4 class="font-extrabold text-white text-base mb-1 leading-snug">${item.name}</h4>
              <p class="text-slate-300/80 text-xs leading-relaxed">${item.description}</p>
            </div>
          </div>
          <div class="px-4 pb-4 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <span class="text-base font-extrabold text-amber-400">${formatRs(item.price)}</span>
            ${actionButtonsHtml}
          </div>
        `;
        menuGrid.appendChild(card);
      });

      document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          addToOrder(btn.getAttribute("data-id"));
        });
      });
      document.querySelectorAll(".customize-dish-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          openCustomizeModal(btn.getAttribute("data-id"));
        });
      });
    }

    // ----------------------------------------------------
    // 2. ORDER CART OPERATIONS
    // ----------------------------------------------------
    function addToOrder(id) {
      orderItems[id] = (orderItems[id] || 0) + 1;
      renderOrder();
    }

    function removeFromOrder(id) {
      if (orderItems[id]) {
        orderItems[id] -= 1;
        if (orderItems[id] <= 0) {
          delete orderItems[id];
          customAddonsList = customAddonsList.filter(c => c.itemId !== id);
        }
      }
      renderOrder();
    }

    function calculatePromoDiscount(subtotal) {
      let discount = 0;
      let labels = [];
      if (activePromoCode === "YALLA10" && subtotal > 0) {
        discount += Math.round(subtotal * 0.10);
        labels.push("YALLA10 (10%)");
      } else if (activePromoCode === "HABIBI200" && subtotal >= 1500) {
        discount += 200;
        labels.push("HABIBI200");
      } else if (activePromoCode === "ROYAL15" && subtotal >= 2500) {
        discount += Math.round(subtotal * 0.15);
        labels.push("ROYAL15 (15%)");
      }
      if (redeemPointsActive && loyaltyPoints >= 100 && subtotal > 0) {
        discount += 100;
        labels.push("100 VIP Pts");
      }
      return { discount: Math.min(discount, subtotal), label: labels.join(" + ") || "Promo / VIP Discount" };
    }

    // ----------------------------------------------------
    // 3. RENDER LIVE ORDER TRAY & FREE DRINK LOGIC
    // ----------------------------------------------------
    function renderOrder() {
      const itemKeys = Object.keys(orderItems);
      const totalCount = Object.values(orderItems).reduce((sum, qty) => sum + qty, 0);
      const discountRowEl = document.getElementById("discount-row");
      const discountLabelEl = document.getElementById("discount-label");
      const discountAmountEl = document.getElementById("discount-amount");

      headerCartCountEl.textContent = totalCount;

      if (itemKeys.length === 0) {
        orderItemsList.innerHTML = "";
        orderItemsList.appendChild(emptyCartMessage);
        freeDrinkBox.classList.add("hidden");
        if (discountRowEl) discountRowEl.classList.add("hidden");
        subtotalEl.textContent = "Rs. 0";
        totalEl.textContent = "Rs. 0";

        placeOrderBtn.disabled = true;
        placeOrderBtn.className = "w-full mt-4 bg-slate-800 text-slate-500 cursor-not-allowed py-3 px-4 rounded-xl font-bold transition-all shadow-sm";
        return;
      }

      orderItemsList.innerHTML = "";
      let subtotal = 0;
      let eligibleMealsCount = 0;

      itemKeys.forEach(id => {
        const item = MENU_ITEMS.find(m => m.id === id);
        if (!item) return;

        const qty = orderItems[id];
        const itemCustomizations = customAddonsList.filter(c => c.itemId === id);
        const extraAddonsSum = itemCustomizations.reduce((s, c) => s + c.extraPrice, 0);
        const lineTotal = (item.price * qty) + extraAddonsSum;
        subtotal += lineTotal;

        if (item.freeDrinkEligible) {
          eligibleMealsCount += qty;
        }

        const customTagsHtml = itemCustomizations.map(c => {
          const addonText = c.addons.length > 0 ? ` + ${c.addons.join(", ")}` : "";
          return `<span class="block text-[10px] text-emerald-300 mt-0.5">✨ ${c.spice}${addonText} ${c.extraPrice > 0 ? "(+" + formatRs(c.extraPrice) + ")" : ""}</span>`;
        }).join("");

        const row = document.createElement("div");
        row.className = "flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs";
        row.innerHTML = `
          <div class="flex-1 pr-2">
            <span class="font-bold text-white block truncate">${item.name}</span>
            <span class="text-amber-300/80">${formatRs(item.price)} each</span>
            ${customTagsHtml}
          </div>
          <div class="flex items-center space-x-2">
            <div class="flex items-center border border-slate-700 rounded-lg bg-slate-950 overflow-hidden">
              <button type="button" class="minus-btn px-2 py-0.5 text-amber-400 hover:bg-slate-800 font-bold" data-id="${id}">-</button>
              <span class="px-2 font-extrabold text-white">${qty}</span>
              <button type="button" class="plus-btn px-2 py-0.5 text-amber-400 hover:bg-slate-800 font-bold" data-id="${id}">+</button>
            </div>
            <span class="font-extrabold text-amber-400 w-16 text-right">${formatRs(lineTotal)}</span>
          </div>
        `;
        orderItemsList.appendChild(row);
      });

      // Toggle "Free Drink With Every Meal" selector
      if (eligibleMealsCount > 0) {
        freeDrinkBox.classList.remove("hidden");
        freeDrinkCountBadge.textContent = `${eligibleMealsCount} Free Drink${eligibleMealsCount > 1 ? "s" : ""}`;
      } else {
        freeDrinkBox.classList.add("hidden");
      }

      const promoObj = calculatePromoDiscount(subtotal);
      const finalTotal = Math.max(0, subtotal - promoObj.discount);

      subtotalEl.textContent = formatRs(subtotal);
      if (promoObj.discount > 0 && discountRowEl) {
        discountRowEl.classList.remove("hidden");
        discountLabelEl.textContent = promoObj.label;
        discountAmountEl.textContent = "-" + formatRs(promoObj.discount);
      } else if (discountRowEl) {
        discountRowEl.classList.add("hidden");
      }
      totalEl.textContent = formatRs(finalTotal);

      placeOrderBtn.disabled = false;
      placeOrderBtn.className = "w-full mt-4 bg-amber-500 hover:bg-amber-400 text-slate-950 cursor-pointer py-3 px-4 rounded-xl font-extrabold transition-all shadow-lg active:scale-[0.99]";

      document.querySelectorAll(".minus-btn").forEach(btn => {
        btn.addEventListener("click", () => removeFromOrder(btn.getAttribute("data-id")));
      });
      document.querySelectorAll(".plus-btn").forEach(btn => {
        btn.addEventListener("click", () => addToOrder(btn.getAttribute("data-id")));
      });
    }

    // ----------------------------------------------------
    // 4. EVENT LISTENERS
    // ----------------------------------------------------

    // Category filter buttons
    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => {
          if (!b.classList.contains("hidden")) {
            b.className = "category-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm bg-[#0f1d3a] text-amber-100 hover:bg-slate-800 border border-amber-500/30";
          }
        });
        if (!btn.classList.contains("hidden")) {
          btn.className = "category-btn active px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm bg-amber-500 text-slate-950";
        }
        currentCategory = btn.getAttribute("data-category");
        renderMenu();
      });
    });

    // Live search input
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderMenu();
    });

    // Order Mode Tabs (Delivery / Dine-In / Takeaway)
    modeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modeButtons.forEach(b => {
          b.className = "mode-btn py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all";
        });
        btn.className = "mode-btn py-1.5 px-2 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 transition-all";
        orderMode = btn.getAttribute("data-mode");

        if (orderMode === "delivery") {
          deliveryFieldsGroup.classList.remove("hidden");
          customerAddressInput.classList.remove("hidden");
          tableFieldGroup.classList.add("hidden");
        } else if (orderMode === "dinein") {
          deliveryFieldsGroup.classList.add("hidden");
          tableFieldGroup.classList.remove("hidden");
        } else {
          deliveryFieldsGroup.classList.remove("hidden");
          customerAddressInput.classList.add("hidden");
          tableFieldGroup.classList.add("hidden");
        }
      });
    });

    // Clear Order
    clearOrderBtn.addEventListener("click", () => {
      orderItems = {};
      customAddonsList = [];
      renderOrder();
    });

    // Place Order -> Show Confirmation Modal
    placeOrderBtn.addEventListener("click", () => {
      if (Object.keys(orderItems).length === 0) return;

      const totalCount = Object.values(orderItems).reduce((sum, qty) => sum + qty, 0);
      modalOrderNumber.textContent = orderCounter++;
      modalItemCount.textContent = `${totalCount} item${totalCount > 1 ? "s" : ""}`;
      modalTotalAmount.textContent = totalEl.textContent;

      // Mode & Customer Summary
      const guestName = customerNameInput.value.trim() || "Valued Guest";
      if (orderMode === "delivery") {
        modalOrderMode.textContent = "🛵 Fast Delivery";
        const addr = customerAddressInput.value.trim() || "Gujranwala";
        modalCustomerInfo.textContent = `${guestName} (${addr})`;
      } else if (orderMode === "dinein") {
        modalOrderMode.textContent = "🍽️ Dine-In";
        modalCustomerInfo.textContent = `${guestName} • ${tableNumberSelect.value}`;
      } else {
        modalOrderMode.textContent = "🛍️ Self Pickup";
        modalCustomerInfo.textContent = guestName;
      }

      // Free drink summary
      if (!freeDrinkBox.classList.contains("hidden")) {
        modalFreeDrinkRow.classList.remove("hidden");
        modalFreeDrink.textContent = `${freeDrinkSelect.value} (${freeDrinkCountBadge.textContent})`;
      } else {
        modalFreeDrinkRow.classList.add("hidden");
      }

      // Kitchen notes summary
      const notes = kitchenNotesInput.value.trim();
      if (notes) {
        modalNotesRow.classList.remove("hidden");
        modalNotesText.textContent = notes;
      } else {
        modalNotesRow.classList.add("hidden");
      }

      orderModal.classList.remove("hidden");
    });

    // ----------------------------------------------------
    // 5. STEP 3: WHATSAPP FORMATTER, RECENT ORDERS & KITCHEN BOARD
    // ----------------------------------------------------
    const tabCustomerBtn = document.getElementById("tab-customer-btn");
    const tabKitchenBtn = document.getElementById("tab-kitchen-btn");
    const customerViewContainer = document.getElementById("customer-view-container");
    const kitchenViewContainer = document.getElementById("kitchen-view-container");
    const kitchenActiveBadge = document.getElementById("kitchen-active-badge");
    const recentOrdersList = document.getElementById("recent-orders-list");
    const clearHistoryBtn = document.getElementById("clear-history-btn");
    const whatsappOrderLink = document.getElementById("whatsapp-order-link");
    const copyReceiptBtn = document.getElementById("copy-receipt-btn");
    const copyToastMsg = document.getElementById("copy-toast-msg");
    const modalKitchenJumpBtn = document.getElementById("modal-kitchen-jump-btn");
    const kitchenTicketsGrid = document.getElementById("kitchen-tickets-grid");
    const kfilterButtons = document.querySelectorAll(".kfilter-btn");
    const statPreparingCount = document.getElementById("stat-preparing-count");
    const statReadyCount = document.getElementById("stat-ready-count");
    const statRevenueAmount = document.getElementById("stat-revenue-amount");

    let currentKitchenFilter = "all";
    let lastReceiptText = "";

    // Default starter ticket so the Kitchen Board & Recent History are immediately interactive
    const DEFAULT_HISTORY = [
      {
        ticketNo: 100,
        time: "7:30 PM",
        modeLabel: "🛵 Fast Delivery",
        customer: "Usman Tariq (Model Town, Gujranwala)",
        items: { m2: 1, m4: 1 },
        freeDrink: "Cola Next (2 Free Drinks)",
        notes: "Extra garlic toum on the shawarma",
        total: 2249,
        status: "Preparing"
      }
    ];

    function loadOrderHistory() {
      try {
        const saved = localStorage.getItem("yalla_habibi_orders_v3");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        // Fallback to in-memory default if sandbox blocks localStorage
      }
      return DEFAULT_HISTORY.slice();
    }

    let orderHistory = loadOrderHistory();

    function saveOrderHistory() {
      try {
        localStorage.setItem("yalla_habibi_orders_v3", JSON.stringify(orderHistory));
      } catch (e) {
        // Ignore storage errors in sandboxed iframe
      }
    }

    function switchMainView(view) {
      if (view === "kitchen") {
        customerViewContainer.classList.add("hidden");
        kitchenViewContainer.classList.remove("hidden");
        tabKitchenBtn.className = "px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 transition-all flex items-center space-x-1";
        tabCustomerBtn.className = "px-3 py-1 rounded-full text-xs font-semibold text-amber-200 hover:text-white transition-all";
        renderKitchenBoard();
      } else {
        kitchenViewContainer.classList.add("hidden");
        customerViewContainer.classList.remove("hidden");
        tabCustomerBtn.className = "px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 transition-all";
        tabKitchenBtn.className = "px-3 py-1 rounded-full text-xs font-semibold text-amber-200 hover:text-white transition-all flex items-center space-x-1";
      }
    }

    tabCustomerBtn.addEventListener("click", () => switchMainView("customer"));
    tabKitchenBtn.addEventListener("click", () => switchMainView("kitchen"));

    // Build formatted WhatsApp / receipt text
    function buildWhatsAppReceipt(ticket) {
      const lines = [
        `*🍴 YALLA HABIBI — ORDER #${ticket.ticketNo}*`,
        `Order Type: ${ticket.modeLabel}`,
        `Customer: ${ticket.customer}`,
        `--------------------------`
      ];
      Object.keys(ticket.items).forEach(id => {
        const item = MENU_ITEMS.find(m => m.id === id);
        if (item) {
          const qty = ticket.items[id];
          lines.push(`• ${qty}x ${item.name} — ${formatRs(item.price * qty)}`);
        }
      });
      if (ticket.freeDrink) {
        lines.push(`🎁 Free Drink: ${ticket.freeDrink}`);
      }
      if (ticket.notes) {
        lines.push(`📝 Kitchen Notes: ${ticket.notes}`);
      }
      lines.push(`--------------------------`);
      lines.push(`*TOTAL PAYABLE: ${formatRs(ticket.total)}*`);
      lines.push(`📍 Mumtaz Market, GT Road, Gujranwala`);
      return lines.join("\n");
    }

    // Render Recent Orders with 1-Tap Reorder
    function renderRecentOrders() {
      recentOrdersList.innerHTML = "";
      if (orderHistory.length === 0) {
        recentOrdersList.innerHTML = `
          <div class="col-span-full text-center py-4 text-xs text-slate-400">
            No saved orders yet. Place an order to see it here!
          </div>
        `;
        return;
      }

      orderHistory.slice(0, 4).forEach((ticket, idx) => {
        const itemNames = Object.keys(ticket.items).map(id => {
          const item = MENU_ITEMS.find(m => m.id === id);
          return item ? `${ticket.items[id]}x ${item.name}` : "";
        }).filter(Boolean).join(", ");

        const card = document.createElement("div");
        card.className = "bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between gap-2 text-xs";
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="font-extrabold text-amber-400">Ticket #${ticket.ticketNo}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold">${ticket.status}</span>
            </div>
            <p class="text-white font-semibold truncate">${itemNames}</p>
            ${ticket.freeDrink ? `<p class="text-emerald-400 text-[11px] mt-0.5">🎁 ${ticket.freeDrink}</p>` : ""}
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 mt-1">
            <span class="font-extrabold text-white">${formatRs(ticket.total)}</span>
            <button type="button" class="reorder-btn bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-400/40 font-bold px-2.5 py-1 rounded-lg transition-colors" data-idx="${idx}">
              🔄 Reorder
            </button>
          </div>
        `;
        recentOrdersList.appendChild(card);
      });

      document.querySelectorAll(".reorder-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-idx"), 10);
          const ticket = orderHistory[idx];
          if (!ticket) return;
          orderItems = Object.assign({}, ticket.items);
          renderOrder();
        });
      });
    }

    // Render Live Kitchen Board for Restaurant Staff
    function renderKitchenBoard() {
      const prepCount = orderHistory.filter(t => t.status === "Preparing").length;
      const readyCount = orderHistory.filter(t => t.status === "Ready").length;
      const totalRev = orderHistory.reduce((sum, t) => sum + (t.total || 0), 0);

      statPreparingCount.textContent = prepCount;
      statReadyCount.textContent = readyCount;
      statRevenueAmount.textContent = formatRs(totalRev);
      kitchenActiveBadge.textContent = prepCount + readyCount;

      const filtered = orderHistory.filter(t => currentKitchenFilter === "all" || t.status === currentKitchenFilter);
      kitchenTicketsGrid.innerHTML = "";

      if (filtered.length === 0) {
        kitchenTicketsGrid.innerHTML = `
          <div class="col-span-full bg-[#0d1832] border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-xs">
            No kitchen tickets in "${currentKitchenFilter}" status right now.
          </div>
        `;
        return;
      }

      filtered.forEach(ticket => {
        const badgeStyle = ticket.status === "Preparing"
          ? "bg-amber-500/20 text-amber-300 border-amber-400/40"
          : ticket.status === "Ready"
          ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
          : "bg-slate-800 text-slate-400 border-slate-700";

        const itemsHtml = Object.keys(ticket.items).map(id => {
          const item = MENU_ITEMS.find(m => m.id === id);
          if (!item) return "";
          return `<li class="flex justify-between py-0.5"><span><strong class="text-amber-400">${ticket.items[id]}x</strong> ${item.name}</span><span class="text-slate-400">${formatRs(item.price * ticket.items[id])}</span></li>`;
        }).join("");

        let nextActionBtn = "";
        if (ticket.status === "Preparing") {
          nextActionBtn = `<button type="button" class="kstatus-btn w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-2 px-3 rounded-xl text-xs transition-colors" data-ticket="${ticket.ticketNo}" data-next="Ready">🛵 Mark Ready / Dispatched</button>`;
        } else if (ticket.status === "Ready") {
          nextActionBtn = `<button type="button" class="kstatus-btn w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold py-2 px-3 rounded-xl text-xs transition-colors" data-ticket="${ticket.ticketNo}" data-next="Completed">✅ Mark Completed</button>`;
        } else {
          nextActionBtn = `<button type="button" class="kstatus-btn w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2 px-3 rounded-xl text-xs transition-colors" data-ticket="${ticket.ticketNo}" data-next="Preparing">↺ Reopen Ticket</button>`;
        }

        const card = document.createElement("div");
        card.className = "bg-[#0d1832] border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg text-xs space-y-3";
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div>
                <span class="text-base font-extrabold text-amber-400">Ticket #${ticket.ticketNo}</span>
                <span class="text-[11px] text-slate-400 ml-1.5">• ${ticket.time}</span>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badgeStyle}">${ticket.status}</span>
            </div>
            <p class="font-bold text-white mb-0.5">${ticket.modeLabel}</p>
            <p class="text-slate-300 mb-2">${ticket.customer}</p>
            <ul class="bg-slate-900/90 rounded-xl p-2.5 space-y-1 border border-slate-800 mb-2">
              ${itemsHtml}
            </ul>
            ${ticket.freeDrink ? `<p class="text-emerald-400 font-semibold mb-1">🎁 ${ticket.freeDrink}</p>` : ""}
            ${ticket.notes ? `<p class="text-amber-200 bg-amber-500/10 border border-amber-400/30 rounded-lg px-2.5 py-1.5 italic">📝 "${ticket.notes}"</p>` : ""}
          </div>
          <div class="pt-2 border-t border-slate-800 space-y-2">
            <div class="flex justify-between font-extrabold text-sm">
              <span class="text-slate-300">Total Bill:</span>
              <span class="text-amber-400">${formatRs(ticket.total)}</span>
            </div>
            <div class="flex gap-1.5">
              <div class="flex-1">${nextActionBtn}</div>
              <button type="button" class="kthermal-btn bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold px-2.5 py-2 rounded-xl text-xs transition-colors" data-ticket="${ticket.ticketNo}" title="Print 80mm POS Slip">
                🖨️ Slip
              </button>
            </div>
          </div>
        `;
        kitchenTicketsGrid.appendChild(card);
      });

      document.querySelectorAll(".kstatus-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const tNo = parseInt(btn.getAttribute("data-ticket"), 10);
          const nextSt = btn.getAttribute("data-next");
          const found = orderHistory.find(t => t.ticketNo === tNo);
          if (found) {
            found.status = nextSt;
            saveOrderHistory();
            renderKitchenBoard();
            renderRecentOrders();
          }
        });
      });
    }

    // Kitchen filter buttons
    kfilterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        kfilterButtons.forEach(b => {
          b.className = "kfilter-btn px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-700";
        });
        btn.className = "kfilter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950";
        currentKitchenFilter = btn.getAttribute("data-kfilter");
        renderKitchenBoard();
      });
    });

    // Clear saved order history
    clearHistoryBtn.addEventListener("click", () => {
      orderHistory = [];
      saveOrderHistory();
      renderRecentOrders();
      renderKitchenBoard();
    });

    // Hook into Place Order button so every new order is saved to History + Kitchen Board + WhatsApp Link + Thermal Slip
    let latestConfirmedTicket = null;

    placeOrderBtn.addEventListener("click", () => {
      const baseSubtotal = Object.keys(orderItems).reduce((sum, id) => {
        const item = MENU_ITEMS.find(m => m.id === id);
        return sum + (item ? item.price * orderItems[id] : 0);
      }, 0);
      const addonsTotal = customAddonsList.reduce((s, c) => s + c.extraPrice, 0);
      const subtotalVal = baseSubtotal + addonsTotal;
      if (subtotalVal <= 0) return;

      const promoObj = calculatePromoDiscount(subtotalVal);
      const finalTotal = Math.max(0, subtotalVal - promoObj.discount);

      // Update loyalty points
      if (redeemPointsActive && loyaltyPoints >= 100) {
        loyaltyPoints -= 100;
        redeemPointsActive = false;
        const redeemCb = document.getElementById("redeem-points-checkbox");
        if (redeemCb) redeemCb.checked = false;
      }
      const earnedPts = Math.floor(finalTotal / 100) * 10;
      loyaltyPoints += earnedPts;
      const ptsEl = document.getElementById("loyalty-points-balance");
      if (ptsEl) ptsEl.textContent = loyaltyPoints;

      const customSummaryNotes = customAddonsList.map(c => {
        const aStr = c.addons.length ? ` + ${c.addons.join(", ")}` : "";
        return `${c.itemName} [${c.spice}${aStr}]`;
      }).join("; ");
      const userNotes = kitchenNotesInput.value.trim();
      const combinedNotes = [customSummaryNotes, userNotes].filter(Boolean).join(" | ");

      if (combinedNotes) {
        modalNotesRow.classList.remove("hidden");
        modalNotesText.textContent = combinedNotes;
      }

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const newTicket = {
        ticketNo: parseInt(modalOrderNumber.textContent, 10) || 101,
        time: timeStr,
        modeLabel: modalOrderMode.textContent,
        customer: modalCustomerInfo.textContent,
        items: Object.assign({}, orderItems),
        freeDrink: !freeDrinkBox.classList.contains("hidden")
          ? `${freeDrinkSelect.value} (${freeDrinkCountBadge.textContent})`
          : "",
        notes: combinedNotes,
        discount: promoObj.discount,
        discountLabel: promoObj.label,
        total: finalTotal,
        status: "Preparing"
      };

      latestConfirmedTicket = newTicket;
      orderHistory.unshift(newTicket);
      saveOrderHistory();
      renderRecentOrders();
      renderKitchenBoard();

      lastReceiptText = buildWhatsAppReceipt(newTicket);
      whatsappOrderLink.href = "https://wa.me/923258871788?text=" + encodeURIComponent(lastReceiptText);
      copyToastMsg.classList.add("hidden");
    });

    // Copy Receipt to Clipboard with fallback
    copyReceiptBtn.addEventListener("click", () => {
      if (!lastReceiptText) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lastReceiptText).catch(() => {});
      } else {
        const ta = document.createElement("textarea");
        ta.value = lastReceiptText;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
      }
      copyToastMsg.classList.remove("hidden");
    });

    // Jump straight from Order Modal to Kitchen Board
    modalKitchenJumpBtn.addEventListener("click", () => {
      orderModal.classList.add("hidden");
      orderItems = {};
      customAddonsList = [];
      kitchenNotesInput.value = "";
      renderOrder();
      switchMainView("kitchen");
    });

    // Close Order Modal
    modalCloseBtn.addEventListener("click", () => {
      orderModal.classList.add("hidden");
      orderItems = {};
      customAddonsList = [];
      kitchenNotesInput.value = "";
      renderOrder();
    });

    // Poster Modal controls
    viewPosterBtn.addEventListener("click", () => {
      posterModal.classList.remove("hidden");
    });
    closePosterBtn.addEventListener("click", () => {
      posterModal.classList.add("hidden");
    });

    // ----------------------------------------------------
    // 6. STEP 4: DISH CUSTOMIZER, PROMOS, THERMAL POS & STOCK MANAGER
    // ----------------------------------------------------
    const customizeModal = document.getElementById("customize-modal");
    const custDishName = document.getElementById("cust-dish-name");
    const custLivePrice = document.getElementById("cust-live-price");
    const closeCustomizeBtn = document.getElementById("close-customize-btn");
    const confirmCustomizeBtn = document.getElementById("confirm-customize-btn");
    const addonCheckboxes = document.querySelectorAll(".cust-addon-cb");

    function openCustomizeModal(itemId) {
      const item = MENU_ITEMS.find(m => m.id === itemId);
      if (!item) return;
      activeCustomizeItemId = itemId;
      custDishName.textContent = item.name;
      addonCheckboxes.forEach(cb => { cb.checked = false; });
      const medRadio = document.querySelector('input[name="cust-spice"][value="Medium Arabian"]');
      if (medRadio) medRadio.checked = true;
      updateCustomizeLivePrice();
      customizeModal.classList.remove("hidden");
    }

    function updateCustomizeLivePrice() {
      const item = MENU_ITEMS.find(m => m.id === activeCustomizeItemId);
      if (!item) return;
      let extra = 0;
      addonCheckboxes.forEach(cb => {
        if (cb.checked) extra += parseInt(cb.getAttribute("data-addon-price"), 10) || 0;
      });
      custLivePrice.textContent = formatRs(item.price + extra);
    }

    addonCheckboxes.forEach(cb => {
      cb.addEventListener("change", updateCustomizeLivePrice);
    });

    closeCustomizeBtn.addEventListener("click", () => {
      customizeModal.classList.add("hidden");
    });

    confirmCustomizeBtn.addEventListener("click", () => {
      const item = MENU_ITEMS.find(m => m.id === activeCustomizeItemId);
      if (!item) return;
      const spiceEl = document.querySelector('input[name="cust-spice"]:checked');
      const spice = spiceEl ? spiceEl.value : "Medium Arabian";
      const chosenAddons = [];
      let extraPrice = 0;
      addonCheckboxes.forEach(cb => {
        if (cb.checked) {
          chosenAddons.push(cb.getAttribute("data-addon-name"));
          extraPrice += parseInt(cb.getAttribute("data-addon-price"), 10) || 0;
        }
      });

      customAddonsList.push({
        itemId: item.id,
        itemName: item.name,
        spice: spice,
        addons: chosenAddons,
        extraPrice: extraPrice
      });

      addToOrder(item.id);
      customizeModal.classList.add("hidden");
    });

    // Promo Codes & VIP Points Logic
    const promoCodeInput = document.getElementById("promo-code-input");
    const applyPromoBtn = document.getElementById("apply-promo-btn");
    const promoFeedbackMsg = document.getElementById("promo-feedback-msg");
    const promoChipBtns = document.querySelectorAll(".promo-chip-btn");
    const redeemPointsCheckbox = document.getElementById("redeem-points-checkbox");

    function applyPromoCode(codeStr) {
      const code = (codeStr || "").trim().toUpperCase();
      promoCodeInput.value = code;
      promoFeedbackMsg.classList.remove("hidden");

      if (code === "YALLA10") {
        activePromoCode = "YALLA10";
        promoFeedbackMsg.textContent = "✓ YALLA10 applied: 10% off your order!";
        promoFeedbackMsg.className = "text-[11px] font-semibold text-emerald-400";
      } else if (code === "HABIBI200") {
        activePromoCode = "HABIBI200";
        promoFeedbackMsg.textContent = "✓ HABIBI200 applied: Rs. 200 off orders of Rs. 1,500+!";
        promoFeedbackMsg.className = "text-[11px] font-semibold text-emerald-400";
      } else if (code === "ROYAL15") {
        activePromoCode = "ROYAL15";
        promoFeedbackMsg.textContent = "✓ ROYAL15 applied: 15% off family orders of Rs. 2,500+!";
        promoFeedbackMsg.className = "text-[11px] font-semibold text-emerald-400";
      } else if (!code) {
        activePromoCode = "";
        promoFeedbackMsg.classList.add("hidden");
      } else {
        activePromoCode = "";
        promoFeedbackMsg.textContent = "✕ Invalid code. Try YALLA10, HABIBI200, or ROYAL15.";
        promoFeedbackMsg.className = "text-[11px] font-semibold text-rose-400";
      }
      renderOrder();
    }

    applyPromoBtn.addEventListener("click", () => {
      applyPromoCode(promoCodeInput.value);
    });

    promoChipBtns.forEach(chip => {
      chip.addEventListener("click", () => {
        applyPromoCode(chip.getAttribute("data-promo"));
      });
    });

    redeemPointsCheckbox.addEventListener("change", (e) => {
      redeemPointsActive = e.target.checked;
      renderOrder();
    });

    // Thermal POS Receipt Modal Logic
    const thermalReceiptModal = document.getElementById("thermal-receipt-modal");
    const thermalReceiptBody = document.getElementById("thermal-receipt-body");
    const openThermalBtn = document.getElementById("open-thermal-btn");
    const closeThermalBtn = document.getElementById("close-thermal-btn");
    const printThermalBtn = document.getElementById("print-thermal-btn");

    function showThermalReceipt(ticket) {
      if (!ticket) return;
      const itemLines = Object.keys(ticket.items).map(id => {
        const item = MENU_ITEMS.find(m => m.id === id);
        if (!item) return "";
        const qty = ticket.items[id];
        return `<div class="flex justify-between"><span>${qty}x ${item.name}</span><span>${formatRs(item.price * qty)}</span></div>`;
      }).join("");

      const discountHtml = ticket.discount
        ? `<div class="flex justify-between text-slate-700"><span>Discount (${ticket.discountLabel || "Promo"})</span><span>-${formatRs(ticket.discount)}</span></div>`
        : "";

      thermalReceiptBody.innerHTML = `
        <div class="flex justify-between text-[10px]"><span>TICKET: #${ticket.ticketNo}</span><span>${ticket.time}</span></div>
        <div class="text-[10px]">MODE: ${ticket.modeLabel}</div>
        <div class="text-[10px] border-b border-dashed border-slate-400 pb-1">GUEST: ${ticket.customer}</div>
        <div class="space-y-1 py-1">${itemLines}</div>
        ${ticket.freeDrink ? `<div class="text-[10px] font-bold">🎁 FREE: ${ticket.freeDrink}</div>` : ""}
        ${ticket.notes ? `<div class="text-[10px] italic">NOTE: ${ticket.notes}</div>` : ""}
        ${discountHtml}
        <div class="flex justify-between font-extrabold text-xs border-t border-dashed border-slate-400 pt-1 mt-1">
          <span>NET PAYABLE:</span>
          <span>${formatRs(ticket.total)}</span>
        </div>
      `;
      thermalReceiptModal.classList.remove("hidden");
    }

    openThermalBtn.addEventListener("click", () => {
      showThermalReceipt(latestConfirmedTicket || orderHistory[0]);
    });

    closeThermalBtn.addEventListener("click", () => {
      thermalReceiptModal.classList.add("hidden");
    });

    printThermalBtn.addEventListener("click", () => {
      window.print();
    });

    // Delegate click for POS Slip buttons inside Kitchen Ticket Board
    kitchenTicketsGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".kthermal-btn");
      if (!btn) return;
      const tNo = parseInt(btn.getAttribute("data-ticket"), 10);
      const found = orderHistory.find(t => t.ticketNo === tNo);
      if (found) showThermalReceipt(found);
    });

    // Live Menu Stock Manager in Kitchen View
    const kitchenStockGrid = document.getElementById("kitchen-stock-grid");
    const resetStockBtn = document.getElementById("reset-stock-btn");

    function renderKitchenStockManager() {
      if (!kitchenStockGrid) return;
      kitchenStockGrid.innerHTML = "";
      MENU_ITEMS.forEach(item => {
        const isOut = !!soldOutItems[item.id];
        const box = document.createElement("div");
        box.className = "bg-slate-900/90 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between gap-2 text-xs";
        box.innerHTML = `
          <div class="truncate">
            <p class="font-bold text-white truncate">${item.name}</p>
            <p class="text-[10px] text-amber-400">${formatRs(item.price)}</p>
          </div>
          <button type="button" data-stock-id="${item.id}" class="stock-toggle-btn shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition-colors ${isOut ? "bg-rose-600 text-white" : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"}">
            ${isOut ? "🚫 Sold Out" : "✅ In Stock"}
          </button>
        `;
        kitchenStockGrid.appendChild(box);
      });

      document.querySelectorAll(".stock-toggle-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-stock-id");
          if (soldOutItems[id]) {
            delete soldOutItems[id];
          } else {
            soldOutItems[id] = true;
          }
          renderKitchenStockManager();
          renderMenu();
        });
      });
    }

    resetStockBtn.addEventListener("click", () => {
      soldOutItems = {};
      renderKitchenStockManager();
      renderMenu();
    });

    // ----------------------------------------------------
    // 7. STEP 5: TABLE RESERVATIONS, LIVE TRACKER, REVIEWS, AUDIO BELL & ANALYTICS
    // ----------------------------------------------------
    const tabReserveBtn = document.getElementById("tab-reserve-btn");
    const reserveViewContainer = document.getElementById("reserve-view-container");
    const reserveCountBadge = document.getElementById("reserve-count-badge");
    const langToggleBtn = document.getElementById("lang-toggle-btn");

    // Bilingual English / Urdu Toggle
    let isUrdu = false;
    langToggleBtn.addEventListener("click", () => {
      isUrdu = !isUrdu;
      const h2 = document.getElementById("hero-main-heading");
      const sub = document.getElementById("hero-sub-heading");
      if (isUrdu) {
        h2.textContent = "یلا حبیبی — گوجرانوالہ میں اصلی لبنانی اور عربی ذائقہ ✨";
        sub.innerHTML = "تازہ ترین شاورما، کڈو سپیشل سینڈوچ اور برگر۔ ہر میل کے ساتھ <span class='text-amber-300 font-semibold'>مفت ڈرنک (Cola Next / Fizzup Next)</span> کا لطف اٹھائیں!";
      } else {
        h2.textContent = "It's A Middle Eastern Experience ✨";
        sub.innerHTML = 'Fresh Arabian, Bold &amp; Delicious Always. Add any Shawarma, Burger, Signature Sandwich, or Arabian Meal to unlock your complimentary drink (<span class="text-amber-300 font-semibold">Cola Next, Fizzup Next, Rango Next, or Water Next</span>).';
      }
    });

    // Extend View Switcher to support Reserve Table tab
    tabReserveBtn.addEventListener("click", () => {
      customerViewContainer.classList.add("hidden");
      kitchenViewContainer.classList.add("hidden");
      reserveViewContainer.classList.remove("hidden");
      tabReserveBtn.className = "px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950 transition-all flex items-center space-x-1";
      tabCustomerBtn.className = "px-3 py-1 rounded-full text-xs font-semibold text-amber-200 hover:text-white transition-all";
      tabKitchenBtn.className = "px-3 py-1 rounded-full text-xs font-semibold text-amber-200 hover:text-white transition-all flex items-center space-x-1";
      renderFloorPlan();
    });

    const origSwitchMainView = switchMainView;
    switchMainView = function(view) {
      reserveViewContainer.classList.add("hidden");
      tabReserveBtn.className = "px-3 py-1 rounded-full text-xs font-semibold text-amber-200 hover:text-white transition-all flex items-center space-x-1";
      origSwitchMainView(view);
      if (view === "kitchen") renderOwnerAnalytics();
    };

    // Synthesized Web Audio API Kitchen Bell
    let kitchenSoundEnabled = true;
    const kitchenSoundToggleBtn = document.getElementById("kitchen-sound-toggle-btn");
    const testBellBtn = document.getElementById("test-bell-btn");

    function playKitchenBell() {
      if (!kitchenSoundEnabled) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.setValueAtTime(1174.66, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.45);
      } catch (e) {}
    }

    kitchenSoundToggleBtn.addEventListener("click", () => {
      kitchenSoundEnabled = !kitchenSoundEnabled;
      kitchenSoundToggleBtn.textContent = kitchenSoundEnabled ? "🔔 Kitchen Bell: ON" : "🔕 Kitchen Bell: MUTED";
    });
    testBellBtn.addEventListener("click", () => playKitchenBell());

    // Live Order Tracker Bar (4 stages)
    const TRACKER_STAGES = [
      { label: "1. Order Received", icon: "📝" },
      { label: "2. Grilling on Spit", icon: "🔥" },
      { label: "3. Quality & Packing", icon: "🥙" },
      { label: "4. Out for Delivery / Ready", icon: "🛵" }
    ];
    let currentTrackerStage = 1; // 0..3

    function renderLiveOrderTracker() {
      const grid = document.getElementById("tracker-steps-grid");
      const titleEl = document.getElementById("tracker-ticket-title");
      const etaEl = document.getElementById("tracker-eta-badge");
      if (!grid) return;

      const latest = orderHistory[0];
      if (latest) {
        titleEl.textContent = `Tracking Ticket #${latest.ticketNo} — ${latest.customer.split("(")[0].trim()}`;
      }
      const etas = ["⏱️ Est. 22 mins", "⏱️ Est. 15 mins", "⏱️ Est. 7 mins", "✅ Ready / Arriving Now!"];
      etaEl.textContent = etas[currentTrackerStage] || etas[1];

      grid.innerHTML = TRACKER_STAGES.map((st, idx) => {
        const active = idx <= currentTrackerStage;
        return `
          <div class="p-2 rounded-xl border ${active ? "bg-amber-500/20 border-amber-400 text-amber-300 font-extrabold" : "bg-slate-900/70 border-slate-800 text-slate-500"}">
            <span class="text-base block">${st.icon}</span>
            <span>${st.label}</span>
          </div>
        `;
      }).join("");
    }

    document.getElementById("advance-tracker-btn").addEventListener("click", () => {
      currentTrackerStage = (currentTrackerStage + 1) % TRACKER_STAGES.length;
      renderLiveOrderTracker();
      playKitchenBell();
    });

    // Interactive Floor Plan & Table Reservations
    const FLOOR_TABLES = [
      { id: "T1", name: "Table 1", zone: "Main Hall", seats: "4 Seats" },
      { id: "T2", name: "Table 2", zone: "Main Hall", seats: "4 Seats" },
      { id: "T3", name: "Table 3", zone: "Family Lounge", seats: "6 Seats" },
      { id: "T4", name: "Table 4", zone: "Family Lounge", seats: "8 Seats" },
      { id: "T5", name: "Table 5", zone: "Outdoor Arabian Patio", seats: "4 Seats" },
      { id: "T6", name: "Table 6", zone: "Outdoor Arabian Patio", seats: "6 Seats" }
    ];

    let selectedFloorTableId = "T1";
    let reservationsList = [
      { id: "R1", tableId: "T3", tableName: "Table 3 (Family Lounge)", guest: "Ayesha Malik", phone: "0300-9876543", time: "8:30 PM Tonight", guests: "6 Guests", occasion: "Family Feast" },
      { id: "R2", tableId: "T5", tableName: "Table 5 (Outdoor Arabian Patio)", guest: "Zainab & Bilal", phone: "0321-5554433", time: "10:00 PM Tonight", guests: "4 Guests", occasion: "Birthday Celebration 🎂" }
    ];

    function renderFloorPlan() {
      const grid = document.getElementById("floor-plan-grid");
      const listEl = document.getElementById("reservations-list-container");
      if (!grid || !listEl) return;

      reserveCountBadge.textContent = reservationsList.length;

      grid.innerHTML = "";
      FLOOR_TABLES.forEach(t => {
        const res = reservationsList.find(r => r.tableId === t.id);
        const isSelected = selectedFloorTableId === t.id && !res;
        const card = document.createElement("div");
        card.className = `p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 text-xs ${
          res
            ? "bg-rose-950/30 border-rose-500/40 text-rose-200"
            : isSelected
            ? "bg-amber-500/20 border-amber-400 text-white shadow-lg"
            : "bg-slate-900/90 border-slate-800 hover:border-amber-500/40 text-slate-200"
        }`;
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="font-extrabold text-sm ${isSelected ? "text-amber-300" : "text-white"}">🪑 ${t.name}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
              res ? "bg-rose-600 text-white" : isSelected ? "bg-amber-400 text-slate-950" : "bg-emerald-500/20 text-emerald-300"
            }">${res ? "Reserved" : isSelected ? "Selected" : "Available"}</span>
          </div>
          <div>
            <p class="text-slate-400 text-[11px]">${t.zone} • ${t.seats}</p>
            ${res ? `<p class="text-[11px] text-rose-300 font-semibold mt-1">Booked: ${res.guest} (${res.time})</p>` : `<p class="text-[11px] text-emerald-400 mt-1">Tap to select table</p>`}
          </div>
        `;
        card.addEventListener("click", () => {
          if (res) return;
          selectedFloorTableId = t.id;
          const inp = document.getElementById("res-table-input");
          if (inp) inp.value = `${t.name} (${t.zone} — ${t.seats})`;
          renderFloorPlan();
        });
        grid.appendChild(card);
      });

      listEl.innerHTML = "";
      if (reservationsList.length === 0) {
        listEl.innerHTML = `<div class="col-span-full text-slate-400 py-3 text-center">No active table reservations. All tables are open!</div>`;
        return;
      }

      reservationsList.forEach(r => {
        const item = document.createElement("div");
        item.className = "bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-2";
        item.innerHTML = `
          <div>
            <p class="font-extrabold text-amber-400">${r.tableName}</p>
            <p class="text-white font-semibold">${r.guest} • ${r.guests}</p>
            <p class="text-slate-400 text-[11px]">${r.time} • ${r.occasion}</p>
          </div>
          <button type="button" data-release-id="${r.id}" class="release-res-btn bg-slate-800 hover:bg-rose-950 text-rose-300 border border-rose-500/30 px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-colors">
            Release
          </button>
        `;
        listEl.appendChild(item);
      });

      document.querySelectorAll(".release-res-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const rid = btn.getAttribute("data-release-id");
          reservationsList = reservationsList.filter(r => r.id !== rid);
          renderFloorPlan();
        });
      });
    }

    document.getElementById("confirm-reservation-btn").addEventListener("click", () => {
      const guest = document.getElementById("res-name-input").value.trim() || "Valued Guest";
      const phone = document.getElementById("res-phone-input").value.trim() || "0325-8871788";
      const time = document.getElementById("res-time-select").value;
      const guests = document.getElementById("res-guests-select").value;
      const occasion = document.getElementById("res-occasion-select").value;
      const tObj = FLOOR_TABLES.find(t => t.id === selectedFloorTableId) || FLOOR_TABLES[0];

      // Replace existing reservation on that table or add new
      reservationsList = reservationsList.filter(r => r.tableId !== tObj.id);
      const newRes = {
        id: "R" + Date.now(),
        tableId: tObj.id,
        tableName: `${tObj.name} (${tObj.zone})`,
        guest,
        phone,
        time,
        guests,
        occasion
      };
      reservationsList.unshift(newRes);

      const fb = document.getElementById("res-feedback-msg");
      fb.textContent = `✓ Confirmed ${tObj.name} for ${guest} at ${time}!`;
      fb.classList.remove("hidden");

      const waLink = document.getElementById("res-whatsapp-link");
      const waText = `*🪑 YALLA HABIBI — TABLE RESERVATION*\nTable: ${newRes.tableName}\nGuest: ${guest} (${phone})\nTime: ${time}\nParty: ${guests}\nOccasion: ${occasion}\n📍 Mumtaz Market, GT Road, Gujranwala`;
      waLink.href = "https://wa.me/923258871788?text=" + encodeURIComponent(waText);
      waLink.classList.remove("hidden");

      playKitchenBell();
      renderFloorPlan();
    });

    // Guest Reviews Wall
    let guestReviews = [
      { author: "Hassan Raza", dish: "Kudu Shawarma", stars: 5, comment: "Authentic Riyadh & Beirut flavor right here on GT Road! The garlic toum is unmatched." },
      { author: "Fatima Noor", dish: "Kudu Special — Large", stars: 5, comment: "Huge portion, super fresh bread, and the free Cola Next with every meal is such a great deal!" }
    ];

    function renderGuestReviews() {
      const grid = document.getElementById("reviews-list-grid");
      if (!grid) return;
      grid.innerHTML = guestReviews.map(r => `
        <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs">
          <div class="flex items-center justify-between">
            <span class="font-extrabold text-white">${r.author}</span>
            <span class="text-amber-400 font-bold">${"★".repeat(r.stars)}</span>
          </div>
          <span class="inline-block text-[10px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md font-semibold">${r.dish}</span>
          <p class="text-slate-300 leading-relaxed">"${r.comment}"</p>
        </div>
      `).join("");
    }

    document.getElementById("toggle-review-form-btn").addEventListener("click", () => {
      document.getElementById("review-form-box").classList.toggle("hidden");
    });

    document.getElementById("submit-review-btn").addEventListener("click", () => {
      const author = document.getElementById("review-author-input").value.trim() || "Habibi Food Lover";
      const dish = document.getElementById("review-dish-select").value;
      const stars = parseInt(document.getElementById("review-stars-select").value, 10) || 5;
      const comment = document.getElementById("review-comment-input").value.trim() || "Delicious Middle Eastern food and fast service!";
      guestReviews.unshift({ author, dish, stars, comment });
      document.getElementById("review-comment-input").value = "";
      document.getElementById("review-form-box").classList.add("hidden");
      renderGuestReviews();
    });

    // Owner Analytics & CSV Export
    function renderOwnerAnalytics() {
      const container = document.getElementById("analytics-bars-container");
      if (!container) return;

      const catTotals = { shawarma: 0, sandwiches: 0, burgers: 0, fries: 0, nuggets: 0, drinks: 0 };
      let grandTotal = 0;
      orderHistory.forEach(ticket => {
        Object.keys(ticket.items || {}).forEach(id => {
          const item = MENU_ITEMS.find(m => m.id === id);
          if (item) {
            const amt = item.price * ticket.items[id];
            catTotals[item.category] = (catTotals[item.category] || 0) + amt;
            grandTotal += amt;
          }
        });
      });

      const labels = {
        shawarma: "🥙 Shawarma",
        sandwiches: "🥖 Sandwiches",
        burgers: "🍔 Burgers",
        fries: "🍟 Fries",
        nuggets: "🍗 Nuggets",
        drinks: "🥂 Drinks"
      };

      container.innerHTML = Object.keys(labels).map(cat => {
        const val = catTotals[cat] || 0;
        const pct = grandTotal > 0 ? Math.round((val / grandTotal) * 100) : 0;
        return `
          <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-1.5">
            <div class="flex justify-between font-bold">
              <span class="text-white">${labels[cat]}</span>
              <span class="text-amber-400">${formatRs(val)} (${pct}%)</span>
            </div>
            <div class="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
              <div class="h-full bg-amber-500 rounded-full" style="width: ${Math.max(pct, 4)}%"></div>
            </div>
          </div>
        `;
      }).join("");
    }

    document.getElementById("export-csv-btn").addEventListener("click", () => {
      const rows = [["TicketNo", "Time", "Mode", "Customer", "TotalRs", "Status"]];
      orderHistory.forEach(t => {
        rows.push([
          t.ticketNo,
          `"${(t.time || "").replace(/"/g, '""')}"`,
          `"${(t.modeLabel || "").replace(/"/g, '""')}"`,
          `"${(t.customer || "").replace(/"/g, '""')}"`,
          t.total,
          t.status
        ]);
      });
      const csvContent = "data:text/csv;charset=utf-8," + rows.map(r => r.join(",")).join("\n");
      const link = document.createElement("a");
      link.setAttribute("href", encodeURI(csvContent));
      link.setAttribute("download", "yalla_habibi_sales_report.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    // Hook into Place Order to also update Live Tracker & Analytics & ring Kitchen Bell
    placeOrderBtn.addEventListener("click", () => {
      currentTrackerStage = 0;
      renderLiveOrderTracker();
      renderOwnerAnalytics();
      playKitchenBell();
    });

    // Initial Boot
    renderMenu();
    renderOrder();
    renderRecentOrders();
    renderKitchenBoard();
    renderKitchenStockManager();
    renderLiveOrderTracker();
    renderFloorPlan();
    renderGuestReviews();
    renderOwnerAnalytics();
