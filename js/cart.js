/**
 * Americos Chemicals Pvt Ltd — Global Cart System
 * Persisted via localStorage key: 'americos_cart'
 */

/* ─────────────────────────────────────────────
   Core storage helpers
───────────────────────────────────────────── */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('americos_cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('americos_cart', JSON.stringify(cart));
}

/* ─────────────────────────────────────────────
   Cart operations
───────────────────────────────────────────── */

function addToCart(id, qty) {
  qty = parseInt(qty, 10) || 1;

  // Resolve product from global products[] defined in products-data.js
  var product = (typeof products !== 'undefined')
    ? products.find(function (p) { return p.id === id; })
    : null;

  if (!product) {
    showToast('Product not found.', 'error');
    return;
  }

  if (!product.inStock) {
    showToast('This product is currently out of stock.', 'error');
    return;
  }

  var cart = getCart();
  var existing = cart.find(function (item) { return item.id === id; });

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id:     product.id,
      name:   product.name,
      price:  product.price,
      weight: product.weight,
      emoji:  product.emoji,
      qty:    qty
    });
  }

  saveCart(cart);
  updateCartBadge();
  showToast('\u2713 ' + product.name + ' added to cart!', 'success');
}

function removeFromCart(id) {
  var cart = getCart().filter(function (item) { return item.id !== id; });
  saveCart(cart);
  updateCartBadge();
}

function updateQty(id, newQty) {
  newQty = parseInt(newQty, 10);
  if (newQty <= 0) {
    removeFromCart(id);
    return;
  }
  var cart = getCart();
  var item = cart.find(function (i) { return i.id === id; });
  if (item) {
    item.qty = newQty;
    saveCart(cart);
    updateCartBadge();
  }
}

/* ─────────────────────────────────────────────
   Cart computed values
───────────────────────────────────────────── */

function getCartCount() {
  return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function getCartTotal() {
  return getCart().reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
}

/* ─────────────────────────────────────────────
   UI helpers
───────────────────────────────────────────── */

function updateCartBadge() {
  var badge = document.getElementById('cart-count');
  if (!badge) return;
  var count = getCartCount();
  badge.innerHTML = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function showToast(msg, type) {
  type = type || 'success';

  // Remove any existing toast to prevent stacking
  var oldToast = document.querySelector('.toast');
  if (oldToast) {
    oldToast.remove();
  }

  var toast = document.createElement('div');
  toast.className = 'toast' + (type === 'error' ? ' error' : '');
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML =
    '<span class="toast-icon">' + (type === 'error' ? '✕' : '✓') + '</span>' +
    '<span class="toast-msg">' + msg + '</span>';

  document.body.appendChild(toast);

  // Trigger entrance animation on next frame
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });
  });

  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () {
      if (toast.parentNode) toast.remove();
    }, 400);
  }, 3000);
}

/* ─────────────────────────────────────────────
   Initialise badge on page load
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
});
