# STORE. | Modern E-commerce Marketplace

A high-performance, responsive e-commerce web application built with **React 18**, **Tailwind CSS**, and the **DummyJSON API**.
This project demonstrates real-world frontend architecture, global state management, and a modern shopping cart experience.

---

## 🚀 Live Demo
🔗 https://your-live-link-here

---

## ✨ Features

- **Dynamic Product Grid**
  - Products fetched in real-time from DummyJSON API
  - Live inventory and pricing display

- **Advanced Search & Filtering**
  - Search by product title and description
  - Category-based filtering
  - Rating-based sorting (4.5+, 4.0+, etc.)
  - One-click clear filters option

- **Shopping Cart System**
  - Centralized cart state using React Context API
  - Increment / decrement quantity controls
  - Automatic removal when quantity reaches zero
  - Real-time total price calculation

- **Split-Screen Checkout Layout**
  - Product list on the left
  - Sticky order summary on the right
  - Optimized for large screens

- **Secure Checkout Flow**
  - Order summary and confirmation
  - Card and UPI payment UI flow

- **Fully Responsive UI**
  - Mobile-first design
  - Side-drawer navigation menu
  - Backdrop blur and body-scroll lock

---

## 🛠️ Tech Stack

- **Frontend:** React.js (v18+)
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Icons:** React Icons (Fa, Bs, Ri)
- **API:** DummyJSON API

---

## 📂 Project Structure

```text
src/
├── assets/
├── cart/
│   ├── Cart.jsx
│   ├── OrderConfirmation.jsx
│   └── SingleCart.jsx
├── cart-context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── product-pages/
│   ├── Products.jsx
│   └── SingleProduct.jsx
├── App.css
└── App.jsx
```

---

## 📦 Installation & Setup

Follow these steps to get the project running locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/store-dot.git
```

### 2️⃣ Navigate to the project directory
```bash
cd store-dot
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Run the development server
```bash
npm run dev
```

The application will be available at:
➡️ http://localhost:5173

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Developer

**Sk Sabbir Ali**  
Frontend / MERN Stack Developer

GitHub: https://github.com/yourusername  
LinkedIn: https://linkedin.com/in/yourprofile
