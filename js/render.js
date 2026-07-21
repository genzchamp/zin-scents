function renderProducts(productList, containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">${product.price}</p>

                <a
                class="buy-btn"
                href="https://wa.me/2347014718354?text=Assalamu alaikum, I am interested in ${encodeURIComponent(product.name)} (${encodeURIComponent(product.price)})"
                target="_blank">

                Order on WhatsApp

                </a>

            </div>
        `;

        container.appendChild(card);

    });

}
