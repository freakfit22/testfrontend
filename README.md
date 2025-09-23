<<<<<<< HEAD
# React + Vite
<!-- ✅ Required Dependencies -->
cd FreakFit
npm install
npm run dev
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom



| Package                     | Purpose                                     
| ------------------------------------------------------------------- |
| `react`                        | React core    
---------------------------------------------------------------------|                  
| `react-dom`               | Renders React into the DOM           
---------------------------------------------------------------------|       
| `react-router-dom`    | For client-side routing/navigation    
---------------------------------------------------------------------|       
| `tailwindcss`               | Utility-first CSS framework (v4.1)   
---------------------------------------------------------------------|       
| `autoprefixer`             | CSS autoprefixing for cross-browser support 
---------------------------------------------------------------------|       
| `postcss`                     | Required for Tailwind CSS  
---------------------------------------------------------------------|       
| `vite`                           | Development server and bundler 
---------------------------------------------------------------------|       

<!-- Change in index.css: -->

@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- 🧩 Install Tailwind CSS Manually (If not already set) -->
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



<!-- Then add this in your tailwind.config.js: -->
content: ["./index.html", "./src/**/*.{js,jsx}"]



  <!-- Tech Stack Used -->

<!-- 🔧 Frontend -->
- React (with Vite) –   Fast build & dev server setup.

- Tailwind CSS v4.1 –   Utility-first modern styling.

- Manual Tailwind Setup –   Tailwind integrated without using CDN or CLI toolkits; directly configured in project for custom control.

- React Router DOM–    For handling client-side routing.

---

<!-- 🎨 UI Features -->

- Hero Section- with gradient backgrounds and animated title

<!-- - **Navigation Bar**   -->
  - Logo with custom highlight (`FreakFit-` and `Describe`)
  - Responsive design with navigation links (`Home`, `Product`, `Contact`, `Login`)
  
<!-- - **Personal Trainer Section**   -->
  - About Us info
  - Strength training card layout
  - Large image box with styled container

<!-- - **Team Members Showcase**   -->
  - 8 trainers displayed in two sections
  - Dynamic layout using grid
  - Team data loaded via external JSON

<!-- - **Login Button UI**   -->
  - Hover effects
  - Custom gradient background


<!-- 📁 Project Folder Structure -->
FreakFit/
├── public/
│ └── img/
│ ├── member1.jpg
│ ├── member2.jpg
│ ├── ... (up to member8.jpg)
│ └── vite.svg
│
├── src/
│ ├── assets/
│ │ ├── Gym.jpg
│ │ ├── logo2.png
│ │ └── react.svg
│ │
│ ├── components/
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ └── Login.jsx
│ │
│ ├── data/
│ │ └── teamMembers.json
│ │
│ ├── pages/
│ │ ├── Contact.jsx
│ │ ├── Hero.jsx
│ │ └── Product.jsx
│ │
│ ├── sections/
│ │ ├── ChooseSection.jsx
│ │ ├── LevelUp.jsx
│ │ ├── MemberUsSection.jsx
│ │ ├── PersonalTrainer.jsx
│ │ ├── PricingSection.jsx
│ │ ├── ProgramSection.jsx
│ │ └── TrainingAbout.jsx
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── node_modules/
├── package.json
├── tailwind.config.js
└── vite.config.js
=======
# FreakFitWeb
>>>>>>> 7f4b45e97f0b7947f0f4519b4e024ef834fc6ac9
