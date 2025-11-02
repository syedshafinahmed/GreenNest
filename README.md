# <img width="30px" src="src/assets/leaves.png" /> GreenNest – Indoor Plant Care & Store

GreenNest – An elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.

---

## 🌐 Live Demo

https://greennest-syedshafinahmed.pages.dev/ <br/>
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

<img width="full" alt="Greennest-Home" src="https://github.com/user-attachments/assets/02135f80-69b0-46c2-a716-959d1377e5bd" /><br>

- Nature-inspired hero slider using **Swiper.js**.
- **Top Rated Indoor Plants** section displaying plants dynamically from JSON.
- **Plant Care Tips** for proper sunlight, watering, and fertilizer schedules.
- **Meet Our Green Experts** showcasing plant specialists.
- **Plant of the Week** showcasing Plant of the Week.

---

## Plants Page

<img width="full" alt="Greennest-Plants" src="https://github.com/user-attachments/assets/d3bb5354-e6e3-4111-ada4-6766822426e8" />
<br>

- Displays all plant data from **plants.json**.
- Includes plant **image, name, price, category, rating**.
- **View Details** redirects to **Plant Details Page** (Protected Route).
- Responsive card layout.

---

## Plant Details Page (Protected Route)

<img width="full" alt="GreenNest-Plant-Details" src="https://github.com/user-attachments/assets/0ba94a04-d19e-40cb-8e61-07deb283b4d1" /> <br>

- Only accessible when **logged in**.
- Shows **full plant details** including care instructions and provider.
- **Book Consultation Form** with Name + Email input.
- Shows success toast on booking.

If the user is not logged in → Redirects to Login and then back to Details Page after login.

---

## Authentication (Firebase)


  <img width="full" alt="Greennest-Register" src="https://github.com/user-attachments/assets/2ae9414b-45dd-46f7-ba23-da59945ea67c" /> &nbsp;&nbsp;
  <img width="full" alt="Greennest-Login" src="https://github.com/user-attachments/assets/d099bd60-fff0-47fa-afaa-f769e38df4db" />  




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

## My Profile Page

<img width="full" alt="GreenNest-Profile" src="https://github.com/user-attachments/assets/adb050f0-03ba-49ed-bad0-53d6f896d5e5" /> <br>

- Shows **Name, Email, Photo** of logged-in user.
- **Update Profile** feature using `updateProfile()` to change name or photo.
- Real-time UI updates after profile change.

---

## 🧰 Tech Stack

| 🏷️ **Category**         | ⚙️ **Technology Used**                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Library**             | [React.js](https://react.dev/)                                                                                   |
| **Styling**             | [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)                                       |
| **Routing**             | [React Router](https://reactrouter.com/)                                                                         |
| **Authentication**      | [Firebase Authentication](https://firebase.google.com/docs/auth)                                                 |
| **Data Source**         | Local JSON (`plants.json`)                                                                                       |
| **Animations / Slider** | [Framer Motion](https://www.framer.com/motion/) / [Swiper.js](https://swiperjs.com/)                             |
| **Toasts**              | [React Toastify](https://fkhadra.github.io/react-toastify/introduction)                                          |
| **State Management**    | React Hooks (`useState`, `useEffect`, `useContext`)                                                              |
| **Deployment**          | [Firebase Hosting](https://firebase.google.com/docs/hosting) / [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## 🔧 Highlights

- Fully **responsive** & performance optimized.
- **Protected Routes** with AuthGuard / PrivateRoute.
- Real-time profile updates using Firebase.
- Toast notifications for user actions.
- Clean, minimal UI with smooth transitions.
- No reload or crash errors on route navigation.

---

<!-- ## 🌐 Live Demo

https://greennest-syedshafinahmed.pages.dev/ or https://greennest-ssa.web.app

--- -->
