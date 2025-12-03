# <img width="27px" src="src/assets/leaves.png" /> GreenNest – Indoor Plant Care & Store

GreenNest – An elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.

---

## 🌐 Live Demo

https://greennest-ssa.web.app 

---

## 🔗 Installation & Setup

#### 1. Clone the repository

```
git clone https://github.com/syedshafinahmed/GreenNest
```

#### 2. Navigate into the project directory

```
cd GreenNest
```

#### 3. Install dependencies

```
npm install
```

#### 4. Start the development server

```
npm run dev
```

#### 5. Build for production

```
npm run build
```

---

# 📌 Features

## Home Page

<img width="full" alt="GreenNest" src="https://github.com/user-attachments/assets/bd25a66d-60df-44a2-91e6-f4d3df0eef24" /><br>



- Nature-inspired hero slider using **Swiper.js**.
- **Top Rated Indoor Plants** section displaying plants dynamically from JSON.
- **Plant Care Tips** for proper sunlight, watering, and fertilizer schedules.
- **Meet Our Green Experts** showcasing plant specialists.
- **Plant of the Week** showcasing Plant of the Week.

---

## Plants Page

<img width="full" alt="Greennest-Plants" src="https://github.com/user-attachments/assets/2875f097-aded-4cd2-9d2d-2a760f7accc4" /><br>


- Displays all plant data from **plants.json**.
- Includes plant **image, name, price, category, rating**.
- **View Details** redirects to **Plant Details Page** (Protected Route).
- Responsive card layout.

---

## Plant Details Page 

<img width="full" alt="Greennest-PlantDetails" src="https://github.com/user-attachments/assets/52c40fd3-2351-491d-ba53-2ef066614fb4" /> <br>


- Shows **full plant details** including care instructions and provider.
- **Book Consultation Form** with Name + Email input.
- On successful booking, a confirmation toast is displayed and the form resets automatically.


---

## Authentication (Firebase)

<div align="center">
<img alt="Greennest-Register" src="https://github.com/user-attachments/assets/4b052ceb-d7b5-423b-824d-dc7bd2d32dd8" style="width: 44%" /> &nbsp;&nbsp;
<img alt="Greennest-Login" src="https://github.com/user-attachments/assets/9a511640-084d-4407-a3ce-01945636ffc2" style="width: 44%" />  
</div> <br>

- **Email/Password Login**
- **Google Sign-In**
- **Signup with Name, Email, Photo URL**
- **Forgot Password → Reset Link to Gmail**
- **Password Validation:**
  - At least one uppercase letter
  - At least one lowercase letter
  - Minimum length: 6 characters
- Displays toast messages for errors & success states.

---

## Profile Page (Protected Route)

<img width="full" alt="Greennest-Profile" src="https://github.com/user-attachments/assets/337c87f9-d32a-4b77-87b8-bd1620cde3aa" /><br>

- Shows **Name, Email, Photo** of logged-in user.
- **Update Profile** feature using `updateProfile()` to change name or photo.
- Real-time UI updates after profile change.

*Only Logged in users can access this page*

---


## Contact Page

<img width="full" alt="Greennest-Contact" src="https://github.com/user-attachments/assets/399921ad-15a8-4115-b911-fd0c0a9d314e" /> <br>

- Includes **social media** links with hover animations.
- **Pre-fills user info** if logged in for convenience.

---


## About Us Page

<img width="full" alt="Greennest-About Us" src="https://github.com/user-attachments/assets/8de94dd8-767c-4f97-959a-0db47b44c29b" /><br>

- Showcases GreenNest’s mission and values.
- Highlights **sustainability practices, and newsletter signup**.

---







## 🧰 Tech Stack

| 🏷️ **Category**        | ⚙️ **Technology Used**                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Library**             | [React.js](https://react.dev/)                                                                                                  |
| **Styling**             | [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)                                                      |
| **Routing**             | [React Router](https://reactrouter.com/)                                                                                        |
| **Authentication**      | [Firebase Authentication](https://firebase.google.com/docs/auth)                                                                |
| **Animations / Slider** | [Swiper.js](https://swiperjs.com/) + [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/) |
| **Toasts**              | [React Toastify](https://fkhadra.github.io/react-toastify/introduction)                                                         |
| **Data Source**         | Local JSON (`plants.json`)                                                                                                      |
| **State Management**    | React Hooks (`useState`, `useEffect`, `useContext`)                                                                             |
| **Deployment**          | [Firebase Hosting](https://firebase.google.com/docs/hosting) / [Cloudflare Pages](https://pages.cloudflare.com/)                |


---

## 🔧 Highlights

- Fully **responsive** & performance optimized.
- **Protected Routes** with PrivateRoute.
- Real-time profile updates using Firebase.
- Toast notifications for user actions.
- Clean, minimal UI with smooth transitions.
- No reload or crash errors on route navigation.

---
