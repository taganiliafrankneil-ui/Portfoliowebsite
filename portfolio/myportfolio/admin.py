from django.contrib import admin
from .models import HeroSection, AboutSection, Project, EducationSection, Skill, ContactSection


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'tagline')


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ('heading',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'order')
    list_editable = ('order',)


@admin.register(EducationSection)
class EducationSectionAdmin(admin.ModelAdmin):
    list_display = ('student_name', 'course', 'year_level')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon_class', 'order')
    list_editable = ('order',)


@admin.register(ContactSection)
class ContactSectionAdmin(admin.ModelAdmin):
    list_display = ('email', 'facebook_url', 'instagram_url')