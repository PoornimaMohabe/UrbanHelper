# UrbanHelper - Local Vendor Booking Platform

UrbanHelper is a full-stack MERN application that connects users with local vendors for various household services. It provides seamless user experience for booking services, vendor registration, real-time status updates, and user-vendor interaction — all in one modern interface.

---

##  Live Demo

 [View Website](https://urban-helper.vercel.app/)

---

##  Screenshot
## Home Page
![Home Page](https://raw.githubusercontent.com/PoornimaMohabe/UrbanHelper/main/user%20interface/src/assets/images/githubhome.png)

## Available Vendors Page
![Home Page](https://raw.githubusercontent.com/PoornimaMohabe/UrbanHelper/main/user%20interface/src/assets/images/githubvendor.png)

## ContactUs Page
![Home Page](https://raw.githubusercontent.com/PoornimaMohabe/UrbanHelper/main/user%20interface/src/assets/images/gitcontact.png)


---

##  Project Structure

###  Frontend - `user interface`

- `components/` – Common UI components like `Navbar`, `Footer`
- `pages/` – All route pages grouped by feature:
  - `userHome/` – Home page, vendor carousels
  - `userprofile/` – User profile, edit page
  - `vaiableVendors/` – Vendor listings and detail view
  - `vendorDashboard/` – Vendor-side dashboard
- `redux/` – Global state management (actions, reducers)
- `utils/` – Utility files (Toast notifications, URL constants)

Built using **ReactJS**, **Tailwind CSS**, and **Redux**.

---

### Backend - `backend`

- `config/` – MongoDB connection
- `controller/` – All controller logic for users, vendors, bookings, etc.
- `middleware/` – Authentication middleware
- `model/` – MongoDB schemas
- `routes/` – Express route handlers for API

Built using **Node.js**, **Express**, **MongoDB**, and **JWT** authentication.

---

##  Features

-  User Registration & Login (with Auth middleware)
-  Vendor Registration with Profile Dashboard
-  Real-time Vendor Listings & Filtering
-  Booking Management with Confirmation
-  Payment Handling (coming soon)
-  Contact & Feedback system
-  Fully Responsive UI

---

## Tech Stack

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| React.js | Node.js | MongoDB  | JWT  |
| Redux    | Express | Mongoose |      |
| Tailwind |         |          |      |

---

##  Installation & Setup

### 1. Clone the Repository
cd "user interface"
npm install
npm run dev

cd ../backend
npm install
npm run rurver
___

### Contributing
Pull requests are welcome! For major changes, please open an issue first.

--- Developed By
[Poornima Mohabe] – Full Stack Developer

📧 mohbepurnima@gmail.com

