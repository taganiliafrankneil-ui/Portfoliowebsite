# 🎨 FrankPortfolio

A personal portfolio website for **Frank Neil Taganili** — Graphic Designer & IT Student.  
Built with **Django**, **Bootstrap 5**, and a custom pink editorial design theme.

---

## 📁 Project Structure

```
FrankPortfolio/
├── .venv/                        # Virtual environment
├── portfolio/                    # Django project folder
│   ├── settings.py               # Project settings
│   ├── urls.py                   # Root URL configuration
│   ├── wsgi.py
│   └── myportfolio/              # Django app
│       ├── migrations/           # Database migrations
│       ├── static/               # Static assets
│       │   ├── css/
│       │   │   └── style.css     # Main stylesheet
│       │   └── js/
│       │       └── main.js       # Scroll animations & navbar
│       ├── templates/            # HTML templates
│       │   ├── components/
│       │   │   ├── navbar.html   # Sticky navigation bar
│       │   │   └── footer.html   # Site footer
│       │   ├── base.html         # Base layout template
│       │   └── home.html         # Main single-page portfolio
│       ├── admin.py              # Django admin registrations
│       ├── apps.py
│       ├── models.py             # Database models (all sections)
│       ├── views.py              # View functions
│       └── urls.py               # App URL patterns
├── manage.py
├── db.sqlite3                    # SQLite database (auto-generated)
├── staticfiles/                  # Collected static files (after collectstatic)
├── media/                        # Uploaded images (auto-generated)
├── .env                          # Environment variables
├── .gitignore
├── Requirements.txt              # Python dependencies
└── README.md
```

---

## ✨ Features

- **Single-page layout** with smooth scroll navigation
- **6 fully editable sections** via Django Admin:
  - Hero, About, Portfolio, Education, Skills, Contact
- **Responsive design** — mobile-friendly with Bootstrap 5
- **Fade-in scroll animations** using IntersectionObserver
- **Sticky navbar** with active link highlighting
- **Image upload support** for Hero and About sections
- **Elegant pink editorial theme** — Cormorant Garamond + Jost fonts

---

## 🗄️ Admin-Editable Models

| Model | Section | What You Can Edit |
|---|---|---|
| `HeroSection` | Home | Name, title, tagline, CTA button text, profile image |
| `AboutSection` | About | Heading, bio text, profile image |
| `Project` | Portfolio | Title, description, image, display order |
| `EducationSection` | Education | School, course, year level, description |
| `Skill` | Skills | Skill name, FontAwesome icon class, display order |
| `ContactSection` | Contact | Email, Facebook URL, Instagram URL |

> **Note:** Hero, About, Education, and Contact are **single-record** models — create only one entry each in the admin. Projects and Skills support multiple entries.

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/FrankPortfolio.git
cd FrankPortfolio
```

### 2. Create and activate virtual environment

```bash
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r Requirements.txt
```

### 4. Set up environment variables

Create a `.env` file in the root of the project:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
```

### 5. Run migrations

```bash
python manage.py makemigrations myportfolio
python manage.py migrate
```

### 6. Create a superuser

```bash
python manage.py createsuperuser
```

### 7. Run the development server

```bash
python manage.py runserver
```

Visit **http://127.0.0.1:8000** to view the portfolio.  
Visit **http://127.0.0.1:8000/admin** to manage content.

---

## 🖼️ Adding Content via Admin

1. Go to `http://127.0.0.1:8000/admin/`
2. Log in with your superuser credentials
3. Fill in each section:
   - **Hero Section** → your name, title, tagline, and optional photo
   - **About Section** → bio text and optional photo
   - **Projects** → add as many projects as you want with images
   - **Education Section** → your school and course details
   - **Skills** → add skills with optional FontAwesome icon classes
   - **Contact Section** → your email, Facebook, and Instagram links

### FontAwesome Icon Examples for Skills

| Skill | Icon Class |
|---|---|
| Adobe Photoshop | `fa-brands fa-adobe` |
| Figma | `fa-brands fa-figma` |
| HTML & CSS | `fa-brands fa-html5` |
| Video Editing | `fa-solid fa-film` |
| Typography | `fa-solid fa-font` |
| Branding | `fa-solid fa-star` |
| UI Design | `fa-solid fa-pen-nib` |

---

## 🚀 Deploying to PythonAnywhere

### 1. Upload your project

Upload or clone your project into PythonAnywhere via the **Files** tab or Bash console:

```bash
git clone https://github.com/yourusername/FrankPortfolio.git
```

### 2. Create a virtual environment

```bash
mkvirtualenv --python=/usr/bin/python3 frankportfolio
pip install -r Requirements.txt
```

### 3. Update `settings.py`

```python
DEBUG = False

ALLOWED_HOSTS = [
    'yourusername.pythonanywhere.com',
]
```

### 4. Collect static files

```bash
python manage.py collectstatic
```

### 5. Run migrations

```bash
python manage.py migrate
python manage.py createsuperuser
```

### 6. Configure the Web tab on PythonAnywhere

| Field | Value |
|---|---|
| Source code | `/home/yourusername/FrankPortfolio` |
| Working directory | `/home/yourusername/FrankPortfolio` |
| WSGI file | Point to `portfolio/wsgi.py` |
| Static files URL | `/static/` |
| Static files Dir | `/home/yourusername/FrankPortfolio/staticfiles` |
| Media files URL | `/media/` |
| Media files Dir | `/home/yourusername/FrankPortfolio/media` |

Reload the web app

Click Reload in the PythonAnywhere Web tab.  
Your site will be live at `https://yourusername.pythonanywhere.com`

---

 Design System

| Property | Value |
|---|---|
| Primary background | `#fce8ec` (soft pink) |
| Accent color | `#c2556a` (deep rose) |
| Black | `#111111` |
| Gray (body text) | `#6b6b6b` |
| Display font | Cormorant Garamond (Google Fonts) |
| Body font | Jost (Google Fonts) |
| Border radius | `18px` (cards) |
| Card shadow | `0 8px 32px rgba(194,85,106,0.12)` |

---

## 📦 Dependencies

```
django
python-dotenv
pillow          # Required for ImageField (profile/project images)
```

Install all with:

```bash
pip install -r Requirements.txt
```

Make sure your `Requirements.txt` includes at minimum:

```
Django>=4.2
python-dotenv
Pillow


 Security Notes

- Never commit your `.env` file — it's listed in `.gitignore`
- Set `DEBUG = False` in production
- Generate a new `SECRET_KEY` before deploying:




 Author

**Frank Neil Taganile**  
Graphic Designer & IT Student  
Negros Oriental State University — Bayawan-Sta. Catalina Campus  
Bachelor of Science in Information Technology, 3rd Year

---

*Built with Django & ❤️*
