function renderProducts(productList, containerId) {
  const panel = document.getElementById(containerId);
  const grid = panel.querySelector('.product-grid');
  grid.innerHTML = '';
  const isScarves = containerId === 'scarves';
  productList.forEach((product, index) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    const message = isScarves
      ? `Assalamu alaikum, I am interested in ${product.name}. Please send me the price, specifications and availability.`
      : `Assalamu alaikum, I am interested in ${product.name} (${product.price}). Please send me the order details.`;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <h3>${product.name}</h3>
        ${isScarves ? '<p class="price scarves-note">Contact for price, specs & availability</p>' : `<p class="price">${product.price}</p>`}
        <a class="buy-btn" href="https://wa.me/2347014718354?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">
          ${isScarves ? 'Contact on WhatsApp' : 'Order on WhatsApp'}
        </a>
      </div>`;
    grid.appendChild(card);
    requestAnimationFrame(() => setTimeout(() => card.classList.add('show'), index * 35));
  });
}
