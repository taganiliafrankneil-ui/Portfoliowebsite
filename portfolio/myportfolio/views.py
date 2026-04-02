from django.shortcuts import render
from .models import HeroSection, AboutSection, Project, EducationSection, Skill, ContactSection


def home(request):
    hero      = HeroSection.objects.first()
    about     = AboutSection.objects.first()
    projects  = Project.objects.all()
    education = EducationSection.objects.first()
    skills    = Skill.objects.all()
    contact   = ContactSection.objects.first()

    context = {
        'hero':      hero,
        'about':     about,
        'projects':  projects,
        'education': education,
        'skills':    skills,
        'contact':   contact,
    }
    return render(request, 'home.html', context)