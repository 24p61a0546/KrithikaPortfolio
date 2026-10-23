# Krithika Bathula - Personal Portfolio Website 💼🚀

A complete, modern, professional, and responsive personal portfolio website created for **Krithika Bathula**, a III-year Computer Science and Engineering student and aspiring software developer.

Built with **pure semantic HTML5**, **modern CSS3**, and **vanilla JavaScript**—no paid services, external build steps, or bulky frameworks required.

---

## 🎨 Design Philosophy

- **Clean Aesthetic:** Crisp white background with elegant blue accents (`#2563eb` Royal Blue & `#0284c7` Cyan).
- **Modern UI Elements:** Rounded cards (`border-radius: 12px–16px`), soft elevation shadows, and spacious, readable typography.
- **Responsive Layout:** Tailored breakpoints ensuring a seamless experience across mobile phones, tablets, and wide desktop screens.
- **User Experience:** Sticky glassmorphism navigation bar, animated mobile hamburger drawer, smooth scroll-spy active link tracking, and subtle hover interactions.

---

## 📂 Project Structure

```text
SKILLGAPANALYZER/
├── index.html            # Main portfolio markup (semantic HTML5 structure)
├── style.css             # Custom design system, typography, animations, responsive queries
├── script.js             # Vanilla JS: mobile navigation, scroll-spy, smooth scrolling
├── README.md             # Portfolio documentation & local setup guide (this file)
│
├── README_SKILLGAP.md    # Complete technical documentation for the Skill Gap Analyzer backend project
│
├── WebContent/           # Skill Gap Analyzer Java Web Application frontend files
├── src/                  # Java Servlets, DAOs, Services, and DB utility sources
├── database/             # MySQL schema (schema.sql) and benchmark seed data (seed_data.sql)
├── build.xml             # Apache Ant build script for the Java application
└── Dockerfile            # Container definition for Tomcat 9 cloud deployment
```

---

## 📑 Website Sections

| # | Section | Key Details |
|---|---|---|
| **1** | **Home (Hero)** | Welcome greeting, title `"Hi, I'm Krithika Bathula"`, subtitle `"Computer Science Engineering Student \| Aspiring Software Developer"`, summary intro, CTA buttons (*View My Projects* & *Contact Me*), and a modern SVG code illustration. |
| **2** | **About Me** | Background as a III-year CSE student with focus on Java development, relational databases, and enterprise web architectures. Includes four highlight cards for core areas of interest. |
| **3** | **Technical Skills** | 8 styled cards featuring core proficiencies: **Java**, **JDBC**, **Java Servlets**, **HTML**, **CSS**, **JavaScript**, **MySQL**, and **Git & GitHub**. |
| **4** | **Projects** | Showcases the **Skill Gap Analyzer** full-stack web application with tech badges, detailed description, and links to the [GitHub Repository](https://github.com/24p61a0546/SkillGapAnalyzer) and [Live Demo](https://skill-gap-analyzer-jb5a.onrender.com). |
| **5** | **Education** | Academic background: *Bachelor of Technology (B.Tech) in Computer Science and Engineering*, *III Year*, with core CS coursework and placeholders for Institution Name and Graduation Year. |
| **6** | **Contact** | Contact information cards including GitHub profile link (`github.com/24p61a0546`), email placeholder, LinkedIn placeholder, and an interactive "Contact Me" button. |
| **7** | **Footer** | Copyright statement `© 2026 Krithika Bathula. All rights reserved.`, social links, and an instant "Back to Top" navigation button. |

---

## 🚀 How to Run the Portfolio Locally

Because the portfolio is built with standard web technologies (HTML, CSS, JavaScript), you can run it in multiple ways:

### Option 1: Direct File Opening (Easiest — 5 Seconds)
Simply navigate to your project folder and double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari):
```powershell
# Open directly in default browser on Windows
start index.html
```

---

### Option 2: Using Python Simple HTTP Server
If Python is installed on your computer:
```powershell
# Navigate to project folder
cd C:\Users\krithika\OneDrive\Documents\SKILLGAPANALYZER

# Start HTTP server
python -m http.server 3000
```
Open your browser and visit: **`http://localhost:3000`**

---

### Option 3: Using Node.js `npx serve`
If Node.js is installed:
```powershell
npx serve .
```

---

### Option 4: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by *Ritwick Dey*.
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ Customizing Placeholders

You can personalize the designated placeholders in `index.html` whenever you are ready:

- **College Name:** Search for `[Your College / University Name]` in `index.html` (under `#education`) and replace with your institution.
- **Graduation Year:** Search for `[Graduation Year, e.g., 2027]` in `index.html` (under `#education`).
- **Email Address:** Search for `[your-email@example.com]` in `index.html` (under `#contact`) and update the `mailto:` link.
- **LinkedIn Profile:** Search for `[Your LinkedIn Profile URL]` in `index.html` (under `#contact`).

---

## 🔗 Related Documentation

For full architectural, database schema, and deployment documentation for the **Skill Gap Analyzer** Java Servlets & MySQL backend project, see [README_SKILLGAP.md](file:///c:/Users/krithika/OneDrive/Documents/SKILLGAPANALYZER/README_SKILLGAP.md).

---

&copy; 2026 Krithika Bathula. All rights reserved.
