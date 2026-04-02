from django.db import models


class HeroSection(models.Model):
    name = models.CharField(max_length=100, default="Frank Neil Taganili")
    title = models.CharField(max_length=100, default="Graphic Designer")
    tagline = models.CharField(max_length=255, default="Crafting visuals that speak louder than words.")
    cta_button_text = models.CharField(max_length=50, default="View My Work")
    profile_image = models.ImageField(upload_to='hero/', blank=True, null=True)

    class Meta:
        verbose_name = "Hero Section"
        verbose_name_plural = "Hero Section"

    def __str__(self):
        return f"Hero – {self.name}"


class AboutSection(models.Model):
    heading = models.CharField(max_length=100, default="About Me")
    bio = models.TextField(default="I'm an IT student and graphic designer passionate about visual storytelling.")

    class Meta:
        verbose_name = "About Section"
        verbose_name_plural = "About Section"

    def __str__(self):
        return "About Section"


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.title


class EducationSection(models.Model):
    school_name = models.CharField(max_length=200, default="Negros Oriental State University Bayawan-Sta. Catalina Campus")
    student_name = models.CharField(max_length=100, default="Frank Neil Taganili")
    course = models.CharField(max_length=200, default="Bachelor of Science in Information Technology")
    year_level = models.CharField(max_length=50, default="3rd Year")
    description = models.TextField(
        default="An IT student with a strong passion for graphic design and digital arts, combining technical skills with creativity to produce visually engaging designs."
    )

    class Meta:
        verbose_name = "Education Section"
        verbose_name_plural = "Education Section"

    def __str__(self):
        return f"{self.student_name} – {self.course}"


class Skill(models.Model):
    name = models.CharField(max_length=100)
    icon_class = models.CharField(max_length=100, blank=True, help_text="FontAwesome class, e.g. fa-brands fa-adobe")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self):
        return self.name


class ContactSection(models.Model):
    email = models.EmailField(default="frankneiltaag@email.com")
    facebook_url = models.URLField(blank=True, default="https://facebook.com/")
    instagram_url = models.URLField(blank=True, default="https://instagram.com/")

    class Meta:
        verbose_name = "Contact Section"
        verbose_name_plural = "Contact Section"

    def __str__(self):
        return "Contact Section"