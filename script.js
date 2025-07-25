// Mock Data for Indian Fashion
const mockProducts = [
  // Sarees
  {
    id: '1',
    name: 'Banarasi Silk Saree with Golden Zari Work',
    brand: 'KALINI',
    price: 2899,
    originalPrice: 4999,
    rating: 4.3,
    reviewCount: 1247,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=600&fit=crop',
    category: 'Sarees',
    isWishlisted: false,
    inStock: true,
    sizes: ['Free Size'],
    colors: ['Red', 'Maroon', 'Golden'],
    delivery: 'FREE Delivery by Tomorrow'
  },
  {
    id: '2',
    name: 'Designer Cotton Silk Saree with Blouse Piece',
    brand: 'MIMOSA',
    price: 1299,
    originalPrice: 2499,
    rating: 4.1,
    reviewCount: 856,
    image: 'https://m.media-amazon.com/images/I/816Hcjs2zsL._SY741_.jpg',
    category: 'Sarees',
    isWishlisted: false,
    inStock: true,
    sizes: ['Free Size'],
    colors: ['Blue', 'Pink', 'Green'],
    delivery: 'FREE Delivery by Thursday'
  },
  {
    id: '3',
    name: 'Georgette Printed Saree with Lace Border',
    brand: 'ANNI DESIGNER',
    price: 799,
    originalPrice: 1599,
    rating: 4.0,
    reviewCount: 432,
    image: 'https://m.media-amazon.com/images/I/51ckSXGHzoL._SY679_.jpg',
    category: 'Sarees',
    isWishlisted: false,
    inStock: true,
    sizes: ['Free Size'],
    colors: ['Multicolor', 'Navy Blue', 'Purple'],
    delivery: 'FREE Delivery by Friday'
  },
  {
    id: '4',
    name: 'Chanderi Cotton Saree with Traditional Print',
    brand: 'CRAFTSVILLA',
    price: 1899,
    originalPrice: 3499,
    rating: 4.5,
    reviewCount: 623,
    image: 'https://m.media-amazon.com/images/I/71q0JTcNZHL._SY741_.jpg',
    category: 'Sarees',
    isWishlisted: false,
    inStock: false,
    sizes: ['Free Size'],
    colors: ['Cream', 'Orange', 'Pink'],
    delivery: 'Currently unavailable'
  },

  // Dresses
  {
    id: '5',
    name: 'Women Printed Rayon A-Line Kurti Dress',
    brand: 'LIBAS',
    price: 649,
    originalPrice: 1299,
    rating: 4.2,
    reviewCount: 2341,
    image: 'https://th.bing.com/th/id/OPAC.2lU0XogVZjQvIA474C474?w=592&h=550&o=5&pid=21.1',
    category: 'Suits',
    isWishlisted: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue', 'Maroon', 'Black'],
    delivery: 'FREE Delivery by Tomorrow'
  },
  {
    id: '6',
    name: 'Anarkali Dress with Dupatta Set',
    brand: 'AURELIA',
    price: 1199,
    originalPrice: 2399,
    rating: 4.4,
    reviewCount: 1567,
    image: 'https://m.media-amazon.com/images/I/51yLU9AzaoL._SY741_.jpg',
    category: 'Suits',
    isWishlisted: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink', 'Blue', 'Yellow'],
    delivery: 'FREE Delivery by Thursday'
  },
  {
    id: '7',
    name: 'Indo Western Maxi Dress',
    brand: 'GLOBAL DESI',
    price: 899,
    originalPrice: 1799,
    rating: 4.0,
    reviewCount: 734,
    image: 'https://m.media-amazon.com/images/I/51vMUuO++SL._SY741_.jpg',
    category: 'Suits',
    isWishlisted: false,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red'],
    delivery: 'FREE Delivery by Friday'
  },
  {
    id: '8',
    name: 'Cotton Casual Kurti Dress',
    brand: 'W',
    price: 579,
    originalPrice: 999,
    rating: 4.1,
    reviewCount: 967,
    image: 'https://m.media-amazon.com/images/I/418+ckWYKKL.jpg',
    category: 'Suits',
    isWishlisted: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Pink'],
    delivery: 'FREE Delivery by Tomorrow'
  },

  // Suits
  {
    id: '9',
    name: 'Green Georgette Festive Tiered Anarkali Dress',
    brand: 'RAJNANDINI',
    price: 999,
    originalPrice: 1999,
    rating: 4.3,
    reviewCount: 1823,
    image: 'https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw6b1f9c71/images/aw24/skdbold10476aw24grn_1.jpg?sw=502&sh=753',
    category: 'Dresses',
    isWishlisted: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Blue', 'Purple'],
    delivery: 'FREE Delivery by Tomorrow'
  },
  {
    id: '10',
    name: 'Black Polyester Flared Solid Dress',
    brand: 'DIVASTRI',
    price: 1499,
    originalPrice: 2999,
    rating: 4.6,
    reviewCount: 945,
    image: 'https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw1f47e0f5/images/aw23/festive2166aw23blk_1.jpg?sw=502&sh=753',
    category: 'Dresses',
    isWishlisted: false,
    inStock: true,
    sizes: ['Free Size'],
    colors: ['Pink', 'Cream', 'Light Blue'],
    delivery: 'FREE Delivery by Thursday'
  },
  {
    id: '11',
    name: 'FEMVY Women Gown Dress With Puff Sleeves For Women (Black, XL)',
    brand: 'SHREE',
    price: 2199,
    originalPrice: 4399,
    rating: 4.4,
    reviewCount: 567,
    image: 'https://th.bing.com/th?id=OPAC.ozmuDitrYTJ%2bzA474C474&w=592&h=550&o=5&pid=21.1',
    category: 'Dresses',
    isWishlisted: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Maroon', 'Navy Blue'],
    delivery: 'FREE Delivery by Friday'
  },
  {
    id: '12',
    name: 'Black Yarn-Dyed Flared Kurta',
    brand: 'JANASYA',
    price: 799,
    originalPrice: 1599,
    rating: 4.2,
    reviewCount: 1234,
    image: 'https://www.biba.in/black-yarn-dyed-flared-kurta/RAJWADA1594AW22BLK.html',
    category: 'Dresses',
    isWishlisted: false,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Yellow', 'Orange', 'Pink'],
    delivery: 'FREE Delivery by Tomorrow'
  },

  // Girls Fashions
  {
    id: '13',
    name: 'Jill Fashion Gold Plated Jhumka Earring ',
    brand: 'AHHAAAA',
    price: 699,
    originalPrice: 1399,
    rating: 4.5,
    reviewCount: 456,
    image: 'https://th.bing.com/th/id/OPAC.yHRTonMvG3DD7A474C474?w=592&h=550&o=5&pid=21.1',
    category: 'Girls Fashions',
    isWishlisted: false,
    inStock: true,
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y'],
    colors: ['Pink', 'Red', 'Blue'],
    delivery: 'FREE Delivery by Tomorrow'
  },
  {
    id: '14',
    name: 'Cleora Knot Diamond Ring',
    brand: 'LITTLE DARLING',
    price: 459,
    originalPrice: 899,
    rating: 4.3,
    reviewCount: 789,
    image: 'https://www.caratlane.com/jewellery/cleora-knot-diamond-ring-jr03334-ygs300.html',
    category: 'Girls Fashions',
    isWishlisted: false,
    inStock: true,
    sizes: ['1-2Y', '2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: ['Purple', 'Pink', 'White'],
    delivery: 'FREE Delivery by Thursday'
  },
  {
    id: '15',
    name: 'Starry Bloom Gemstone Pendant Necklace',
    brand: 'ADORN',
    price: 399,
    originalPrice: 799,
    rating: 4.1,
    reviewCount: 623,
    image: 'https://cdn.caratlane.com/media/catalog/product/J/P/JP06458-8YS3RS_3_lar.jpg',
    category: 'Girls Fashions',
    isWishlisted: false,
    inStock: true,
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: ['Yellow', 'Green', 'Orange'],
    delivery: 'FREE Delivery by Friday'
  },
  {
    id: '16',
    name: '18K Gold Plated Star Charm Bracelet 925 Sterling Silver Cubic Zirconia Stones Star Bracelet ',
    brand: 'KBKIDSWEAR',
    price: 899,
    originalPrice: 1799,
    rating: 4.4,
    reviewCount: 345,
    image: 'https://th.bing.com/th/id/OPAC.eeqD9NZvGygJjw474C474?w=592&h=550&o=5&pid=21.1',
    category: 'Girls Fashions',
    isWishlisted: false,
    inStock: false,
    sizes: ['3-4Y', '4-5Y', '5-6Y', '6-7Y'],
    colors: ['Mint Green', 'Peach', 'Lavender'],
    delivery: 'Currently unavailable'
  },

  // Additional Products for variety
  {
    id: '17',
    name: 'Kantha Work Handloom Cotton Saree',
    brand: 'VASTRANAND',
    price: 1599,
    originalPrice: 2999,
    rating: 4.7,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop',
    category: 'Sarees',
    isWishlisted: false,
    inStock: true,
    sizes: ['Free Size'],
    colors: ['Multicolor', 'Blue', 'Red'],
    delivery: 'FREE Delivery by Tomorrow'
  },
  {
    id: '18',
    name: 'Party Wear',
    brand: 'MANGO',
    price: 1299,
    originalPrice: 2199,
    rating: 4.2,
    reviewCount: 567,
    image: 'https://i.etsystatic.com/18116371/r/il/c5731f/2604366160/il_1588xN.2604366160_drra.jpg',
    category: 'Dresses',
    isWishlisted: false,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Print', 'Black', 'Navy'],
    delivery: 'FREE Delivery by Thursday'
  },
  {
    id: '19',
    name: 'TOPLOT Jumpsuit for Women || Coordset for women || Co ord Western',
    brand: 'ETHNIC PLUS',
    price: 1799,
    originalPrice: 3599,
    rating: 4.5,
    reviewCount: 892,
    image: 'https://m.media-amazon.com/images/I/61zeuRcYG8L._SY741_.jpg',
    category: 'Suits',
    isWishlisted: false,
    inStock: true,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Magenta', 'Royal Blue', 'Emerald'],
    delivery: 'FREE Delivery by Tomorrow'
  },
  {
    id: '20',
    name: 'Girls Indo Western Jumpsuit',
    brand: 'CUTIEKINS',
    price: 649,
    originalPrice: 1299,
    rating: 4.0,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400&h=600&fit=crop',
    category: 'Girls Fashions',
    isWishlisted: false,
    inStock: true,
    sizes: ['2-3Y', '3-4Y', '4-5Y', '5-6Y'],
    colors: ['Denim Blue', 'Black', 'White'],
    delivery: 'FREE Delivery by Friday'
  }
];

// Global state
let products = [...mockProducts];
let cartItems = [];
let searchQuery = '';
let selectedCategory = '';
let sortBy = 'featured';

// DOM elements
const searchInput = document.getElementById('search-input');
const searchCategory = document.getElementById('search-category');
const productsGrid = document.getElementById('products-grid');
const pageTitle = document.getElementById('page-title');
const pageDescription = document.getElementById('page-description');
const filtersSection = document.getElementById('filters-section');
const noResults = document.getElementById('no-results');
const wishlistModal = document.getElementById('wishlist-modal');
const cartModal = document.getElementById('cart-modal');
const wishlistCount = document.getElementById('wishlist-count');
const cartCount = document.getElementById('cart-count');
const toast = document.getElementById('toast');
const sortSelect = document.getElementById('sort-select');
const breadcrumb = document.getElementById('breadcrumb');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  setupEventListeners();
  renderProducts();
  updateCounts();
  updateBreadcrumb();
});

// Event listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
    updatePageContent();
    updateBreadcrumb();
  });

  // Search category
  searchCategory.addEventListener('change', (e) => {
    const category = e.target.value;
    selectedCategory = category;
    renderProducts();
    updatePageContent();
    updateBreadcrumb();
    updateActiveNavButton();
  });

  // Sort
  sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });

  // Category navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.target.dataset.category;
      selectedCategory = category;
      searchCategory.value = category;
      
      updateActiveNavButton();
      renderProducts();
      updatePageContent();
      updateBreadcrumb();
    });
  });

  // Modal controls
  document.getElementById('wishlist-btn').addEventListener('click', () => {
    openWishlist();
  });

  document.getElementById('cart-btn').addEventListener('click', () => {
    openCart();
  });

  document.getElementById('close-wishlist').addEventListener('click', () => {
    closeWishlist();
  });

  document.getElementById('close-cart').addEventListener('click', () => {
    closeCart();
  });

  // Clear filters
  document.getElementById('clear-category').addEventListener('click', () => {
    selectedCategory = '';
    searchCategory.value = '';
    updateActiveNavButton();
    renderProducts();
    updatePageContent();
    updateBreadcrumb();
  });

  document.getElementById('view-all-btn').addEventListener('click', () => {
    searchQuery = '';
    selectedCategory = '';
    searchInput.value = '';
    searchCategory.value = '';
    updateActiveNavButton();
    renderProducts();
    updatePageContent();
    updateBreadcrumb();
  });

  // Close modals when clicking outside
  wishlistModal.addEventListener('click', (e) => {
    if (e.target === wishlistModal) {
      closeWishlist();
    }
  });

  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      closeCart();
    }
  });
}

// Update active navigation button
function updateActiveNavButton() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const category = btn.dataset.category;
    if (category === selectedCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Filter and sort products
function getFilteredAndSortedProducts() {
  let filtered = products;

  // Filter by category
  if (selectedCategory && selectedCategory !== 'trending') {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort products
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id.localeCompare(a.id));
      break;
    default:
      // Featured - keep original order
      break;
  }

  return filtered;
}

// Render products
function renderProducts() {
  const filteredProducts = getFilteredAndSortedProducts();
  
  if (filteredProducts.length === 0) {
    productsGrid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
  }

  updateFiltersInfo();
  
  // Re-render icons after updating DOM
  setTimeout(() => lucide.createIcons(), 0);
}

// Create product card HTML
function createProductCard(product) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const starsHtml = Array.from({length: 5}, (_, i) => 
    `<i data-lucide="star" class="star ${i < Math.floor(product.rating) ? 'filled' : 'empty'}"></i>`
  ).join('');

  return `
    <div class="product-card" onclick="handleProductClick('${product.id}')">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" 
             onerror="this.src='https://via.placeholder.com/300x300?text=Fashion+Item'">
        
        <button class="wishlist-btn-card ${product.isWishlisted ? 'active' : ''}" 
                onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
                title="Add to Wishlist">
          <i data-lucide="heart"></i>
        </button>

        ${discountPercentage > 0 ? `<div class="discount-badge">${discountPercentage}% off</div>` : ''}

        ${!product.inStock ? `
          <div class="out-of-stock-overlay">
            <span class="stock-label">Out of Stock</span>
          </div>
        ` : ''}
      </div>

      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name" title="${product.name}">${product.name}</h3>
        
        <div class="product-rating">
          <div class="stars">${starsHtml}</div>
          <span class="rating-text">(${product.reviewCount.toLocaleString()})</span>
        </div>

        <div class="product-price">
          <span class="currency">₹</span><span class="current-price">${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>

        <div class="product-delivery">
          <span class="delivery-highlight">${product.delivery}</span>
        </div>

        <div class="product-sizes">
          Sizes: ${product.sizes.join(', ')}
        </div>

        <button class="add-to-cart-btn" 
                onclick="event.stopPropagation(); addToCart('${product.id}')"
                ${!product.inStock ? 'disabled' : ''}>
          <i data-lucide="shopping-cart"></i>
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Update page content based on filters
function updatePageContent() {
  const categoryDescriptions = {
    'Sarees': 'Discover beautiful traditional and designer sarees for every occasion.',
    'Dresses': 'Stylish dresses and kurtis for modern Indian women.',
    'Suits': 'Elegant salwar suits and dress materials for ethnic wear.',
    'Girls Fashions': 'Trendy and comfortable fashion for little princesses.'
  };
  
  const title = selectedCategory || 'Fashion Collection';
  const description = categoryDescriptions[selectedCategory] || 
    'Discover the latest trends in Indian fashion. From traditional sarees to modern dresses.';

  pageTitle.textContent = title;
  pageDescription.textContent = description;
}

// Update breadcrumb
function updateBreadcrumb() {
  let breadcrumbHtml = '<span>FashionBazaar</span>';
  
  if (selectedCategory) {
    breadcrumbHtml += ` <span>›</span> <span>${selectedCategory}</span>`;
  }
  
  if (searchQuery) {
    breadcrumbHtml += ` <span>›</span> <span>Search results for "${searchQuery}"</span>`;
  }
  
  breadcrumb.innerHTML = breadcrumbHtml;
}

// Update filters info
function updateFiltersInfo() {
  const filteredProducts = getFilteredAndSortedProducts();
  const hasFilters = searchQuery || selectedCategory;
  
  if (hasFilters) {
    filtersSection.style.display = 'block';
    
    // Search info
    const searchInfo = document.getElementById('search-info');
    if (searchQuery) {
      searchInfo.innerHTML = `<strong>${filteredProducts.length}</strong> results for "<strong>${searchQuery}</strong>"`;
      searchInfo.style.display = 'inline';
    } else {
      searchInfo.style.display = 'none';
    }
    
    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (selectedCategory && selectedCategory !== 'trending') {
      document.getElementById('selected-category').textContent = selectedCategory;
      categoryFilter.style.display = 'flex';
    } else {
      categoryFilter.style.display = 'none';
    }
    
    // Results count
    if (!searchQuery) {
      document.getElementById('results-count').textContent = `${filteredProducts.length} results`;
    }
  } else {
    filtersSection.style.display = 'none';
  }
}

// Wishlist functions
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  product.isWishlisted = !product.isWishlisted;
  
  showToast(product.isWishlisted ? 'Added to Wishlist' : 'Removed from Wishlist');
  
  renderProducts();
  updateCounts();
}

function openWishlist() {
  const wishlistItems = products.filter(p => p.isWishlisted);
  const wishlistContent = document.getElementById('wishlist-content');
  const wishlistTitle = document.getElementById('wishlist-title');
  
  wishlistTitle.textContent = `Shopping List (${wishlistItems.length})`;
  
  if (wishlistItems.length === 0) {
    wishlistContent.innerHTML = `
      <div class="empty-state">
        <i data-lucide="heart" class="empty-icon"></i>
        <h3>Your list is empty</h3>
        <p>Browse our amazing collection and save items you love</p>
      </div>
    `;
  } else {
    wishlistContent.innerHTML = wishlistItems.map(item => `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}" class="wishlist-item-image"
             onerror="this.src='https://via.placeholder.com/100x100?text=Fashion'">
        <div class="wishlist-item-info">
          <h3 class="wishlist-item-name">${item.name}</h3>
          <div class="wishlist-item-price">
            <span class="wishlist-price">₹${item.price.toLocaleString()}</span>
            ${item.originalPrice ? `<span class="wishlist-original-price">₹${item.originalPrice.toLocaleString()}</span>` : ''}
          </div>
          <div class="wishlist-actions">
            <button class="wishlist-btn-small wishlist-add-btn" 
                    onclick="addToCart('${item.id}')"
                    ${!item.inStock ? 'disabled' : ''}>
              Add to Cart
            </button>
            <button class="wishlist-btn-small wishlist-remove-btn" 
                    onclick="toggleWishlist('${item.id}')">
              Delete
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  wishlistModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Re-render icons
  setTimeout(() => lucide.createIcons(), 0);
}

function closeWishlist() {
  wishlistModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Cart functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.inStock) return;

  const existingItem = cartItems.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      ...product,
      quantity: 1,
      selectedSize: product.sizes[0]
    });
  }

  showToast('Added to Cart');
  updateCounts();
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cartItems.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    updateCounts();
    renderCartContent();
  }
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  showToast('Removed from Cart');
  updateCounts();
  renderCartContent();
}

function openCart() {
  renderCartContent();
  cartModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartModal.classList.remove('active');
  document.body.style.overflow = '';
}

function renderCartContent() {
  const cartContent = document.getElementById('cart-content');
  const cartTitle = document.getElementById('cart-title');
  const cartFooter = document.getElementById('cart-footer');
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartTitle.textContent = `Shopping Cart (${totalItems})`;
  
  if (cartItems.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-state">
        <i data-lucide="shopping-cart" class="empty-icon"></i>
        <h3>Your cart is empty</h3>
        <p>Add items to get started</p>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    cartContent.innerHTML = cartItems.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image"
             onerror="this.src='https://via.placeholder.com/90x90?text=Fashion'">
        <div class="cart-item-info">
          <div class="cart-item-header">
            <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p class="cart-item-category">${item.brand}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Delete">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
          
          ${item.selectedSize && !['Free Size', 'One Size'].includes(item.selectedSize) 
            ? `<p class="cart-item-size">Size: ${item.selectedSize}</p>` : ''}
          
          <div class="cart-item-footer">
            <span class="cart-item-price">₹${item.price.toLocaleString()}</span>
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})" title="Decrease quantity">
                <i data-lucide="minus"></i>
              </button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})" title="Increase quantity">
                <i data-lucide="plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    
    // Update cart summary
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // Free shipping
    
    document.getElementById('item-count').textContent = totalItems;
    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('total').textContent = `₹${total.toLocaleString()}`;
    
    cartFooter.style.display = 'block';
  }
  
  // Re-render icons
  setTimeout(() => lucide.createIcons(), 0);
}

// Update counts
function updateCounts() {
  const wishlistItems = products.filter(p => p.isWishlisted);
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update wishlist count
  wishlistCount.textContent = wishlistItems.length;
  
  // Update cart count
  cartCount.textContent = totalCartItems;
}

// Product click handler
function handleProductClick(productId) {
  console.log('Product clicked:', productId);
  // In a real app, this would navigate to product detail page
  showToast('Product details would open here');
}

// Toast notification
function showToast(message) {
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
