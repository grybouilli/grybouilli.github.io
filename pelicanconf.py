import os


def read_file(article):
    with open(article.source_path, "r") as f:
        return f.read()


JINJA_FILTERS = {"read_file": read_file}

AUTHOR = "Nicolas Gry"
SITENAME = "Nicolas Gry"
SITEURL = ""

PATH = "content"

TIMEZONE = "Europe/Paris"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Publications", "/category/publications.html"),
    ("Projects", "/category/projects.html"),
    ("Courses", "/category/courses.html"),
    ("Resume", "/pages/resume.html"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

THEME = "pelican-alchemy/alchemy"

# Short tagline shown under your name
SITESUBTITLE = "PhD Student in Computer Science · Inria de Lyon"

BIO = """
I'm Nicolas Gry, PhD Student at Inria de Lyon, France. My research focuses on AI-based audio DSPs used in real-time embedded platforms.
"""

STATIC_PATHS = ["static", "images", "extra"]
RELATIVE_URLS = True
DISPLAY_PAGES_ON_MENU = False
THEME_CSS_OVERRIDES = ["theme/css/pulse.css"]
EXTRA_PATH_METADATA = {}
