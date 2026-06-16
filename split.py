import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

header_match = re.search(r'(.*?)(?=<!-- ---------------------------------------\s*ABOUT SECTION)', content, re.DOTALL)
header = header_match.group(1)

footer_match = re.search(r'(<!-- ---------------------------------------\s*FOOTER.*)', content, re.DOTALL)
footer = footer_match.group(1)

about_match = re.search(r'(<!-- ---------------------------------------\s*ABOUT SECTION.*?</section>)', content, re.DOTALL)
about_section = about_match.group(1)

services_match = re.search(r'(<!-- ---------------------------------------\s*SERVICES SECTION.*?</section>)', content, re.DOTALL)
services_section = services_match.group(1)

showcase_match = re.search(r'(<!-- ---------------------------------------\s*SHOWCASE / PORTFOLIO SECTION.*?</section>)', content, re.DOTALL)
showcase_section = showcase_match.group(1)

process_match = re.search(r'(<!-- ---------------------------------------\s*HOW WE WORK.*?</section>)', content, re.DOTALL)
process_section = process_match.group(1)

pricing_match = re.search(r'(<!-- ---------------------------------------\s*PRICING SECTION.*?</section>)', content, re.DOTALL)
pricing_section = pricing_match.group(1)

contact_match = re.search(r'(<!-- ---------------------------------------\s*CONTACT & CTA SECTION.*?</section>)', content, re.DOTALL)
contact_section = contact_match.group(1)

def update_nav(html_str):
    html_str = re.sub(r'<a href="#home" class="nav-link" data-section="home">Home</a>', '<a href="index.html" class="nav-link">Home</a>', html_str)
    html_str = re.sub(r'<a href="#about" class="nav-link" data-section="about">About</a>', '<a href="about.html" class="nav-link">About</a>', html_str)
    html_str = re.sub(r'<a href="#services" class="nav-link" data-section="services">Services</a>', '<a href="services.html" class="nav-link">Services</a>', html_str)
    html_str = re.sub(r'<a href="#showcase" class="nav-link" data-section="showcase">Demos</a>', '<a href="services.html#showcase" class="nav-link">Demos</a>', html_str)
    html_str = re.sub(r'<a href="#portfolio" class="nav-link" data-section="portfolio">Work</a>', '<a href="services.html#showcase" class="nav-link">Work</a>', html_str)
    html_str = re.sub(r'<a href="#pricing" class="nav-link" data-section="pricing">Pricing</a>', '<a href="services.html#pricing" class="nav-link">Pricing</a>', html_str)
    html_str = re.sub(r'<a href="#contact" class="nav-link" data-section="contact">Contact</a>', '<a href="contact.html" class="nav-link">Contact</a>', html_str)
    
    html_str = re.sub(r'<a href="#home" class="mbn-item(.*?)" data-section="home">', r'<a href="index.html" class="mbn-item\1">', html_str)
    html_str = re.sub(r'<a href="#services" class="mbn-item(.*?)" data-section="services">', r'<a href="services.html" class="mbn-item\1">', html_str)
    html_str = re.sub(r'<a href="#about" class="mbn-item(.*?)" data-section="about">', r'<a href="about.html" class="mbn-item\1">', html_str)
    html_str = re.sub(r'<a href="#contact" class="mbn-item(.*?)" data-section="contact">', r'<a href="contact.html" class="mbn-item\1">', html_str)
    return html_str

new_header = update_nav(header)
new_footer = update_nav(footer)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(new_header + "\n" + new_footer)

with open("about.html", "w", encoding="utf-8") as f:
    f.write(new_header + "\n" + about_section + "\n" + new_footer)

with open("services.html", "w", encoding="utf-8") as f:
    f.write(new_header + "\n" + services_section + "\n" + showcase_section + "\n" + process_section + "\n" + pricing_section + "\n" + new_footer)

with open("contact.html", "w", encoding="utf-8") as f:
    f.write(new_header + "\n" + contact_section + "\n" + new_footer)

print("Done")
