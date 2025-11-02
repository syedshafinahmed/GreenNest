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

<img width="full" alt="Zappify-Home" src="https://github.com/user-attachments/assets/da02b670-35f8-4a22-b42b-41518ed70ebb" /> <br>

- Engaging banner with centered heading and **Play Store & App Store** buttons.
- Dynamic state cards showcasing platform statistics.
- **Trending Apps** grid (8 featured apps) with ratings and download counts.
- **Show All** button to navigate to the All Apps Page.
- Includes a **Contribute** button linking directly to my GitHub profile.

---

## Apps Page

<div align="center">
   <img height="450" alt="Zappify-Apps" src="https://github.com/user-attachments/assets/2b6ba4a5-53ed-4981-8614-366923349e84" />&nbsp;&nbsp;
   <img height="450" alt="Zappify-Apps-Search" src="https://github.com/user-attachments/assets/9127d4cf-9785-467a-92f0-f3a1cc2b66db" />
</div>
 <br>

- Displays all available apps **dynamically**.
- Real-time live search (case-insensitive).
- Displays total number of apps dynamically.
- No App Found message for unmatched queries.
- Clicking any app card redirects to its **App Details Page**, where detailed information and reviews are displayed.

---

## App Details Page

<img width="full" alt="Zappify-App-Details" src="https://github.com/user-attachments/assets/0ba94a04-d19e-40cb-8e61-07deb283b4d1" /> <br>

- Detailed layout featuring app image, title, rating, reviews, and downloads.
- Install button:
  - Changes to **Installed** upon click.
  - Disables automatically.
  - Displays success toast notification.
  - Saves to LocalStorage.
- Responsive bar chart created with Recharts showing rating distribution.

---

## Installation Page

<img width="full" alt="Zappify-Installation" src="https://github.com/user-attachments/assets/adb050f0-03ba-49ed-bad0-53d6f896d5e5" /> <br>

- Displays all installed apps from **LocalStorage**.
- Uninstall button removes apps instantly + shows confirmation toast.
- Supports sorting by download count (High–Low / Low–High).

---

## Error & Loading States

<div align="center">
   <img height="200" alt="Zappify-Page-not-found" src="https://github.com/user-attachments/assets/654cd20d-7c67-4a22-89db-a88f5467e372" />&nbsp;&nbsp;
   <img height="200" alt="Zappify-App-not-Found" src="https://github.com/user-attachments/assets/382d420a-3cb3-43bf-a450-9385798996b7" />&nbsp;&nbsp;
   <img height="200"alt="Zappify-Search-not-Found" src="https://github.com/user-attachments/assets/a8e0d9db-4598-4bd8-9f53-3311c972e0de" />
</div> <br>

- Custom 404 Error Page for invalid routes.
- Loading animations during:
  - Page transitions.
  - Search operations.
- Graceful **App Not Found** UI for missing app details.

---

## 🧰 Tech Stack

Zappify is built using a modern front-end tech stack focused on performance, scalability, and responsiveness.
Each tool plays a key role in ensuring a smooth user experience and maintainable codebase.

| 🏷️ **Category**        | ⚙️ **Technology Used**                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| **Library**            | [React.js](https://react.dev/)                                                           |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com/)                                                 |
| **UI Components**      | [daisyUI](https://daisyui.com/)                                                          |
| **Routing**            | [React Router](https://reactrouter.com/)                                                 |
| **Charts**             | [Recharts](https://recharts.org/en-US/)                                                  |
| **Loading Animations** | [React Spinners](https://www.davidhu.io/react-spinners/)                                 |
| **State Management**   | React Hooks (`useState()`, `useEffect()`, `useNavigate()`, `useLoaderData()`)            |
| **Data Persistence**   | [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| **Deployment**         | [Netlify](https://www.netlify.com/)                                                      |

---

## 🔧 Highlights

- Fully responsive.
- Persistent installs using LocalStorage.
- Toast notifications for user actions.
- Active route highlighting in navbar.
- Custom footer & 404 error page.
- Works flawlessly on reload (no 404 on Netlify routes).

<!-- ## 🌐 Live Demo

https://greennest-syedshafinahmed.pages.dev/ or https://greennest-ssa.web.app

--- -->
