document.addEventListener("DOMContentLoaded", function() {
    console.log("Web stranica je potpuno učitana");
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Web stranica je potpuno učitana");

    // Pronalazi linkove za "Početna", "O meni" i "Kontakt"
    var homeLink = document.querySelector('a[href="#home"]');
    var aboutLink = document.querySelector('a[href="#about"]');
    var contactLink = document.querySelector('a[href="#contact"]');
    // Pronalazi sekcije "Početna", "O meni" i "Kontakt"
    var homeSection = document.getElementById('home');
    var aboutSection = document.getElementById('about');
    var contactSection = document.getElementById('contact');

    // Dodaje event listener koji će sakriti sekcije "O meni" i "Kontakt", a prikazati sekciju "Početna" kada se klikne na link "Početna"
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();

        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';

        homeSection.style.display = 'block';
    });

    // Dodaje event listener koji će sakriti sekcije "Početna" i "Kontakt", a prikazati sekciju "O meni" kada se klikne na link "O meni"
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();

        homeSection.style.display = 'none';
        contactSection.style.display = 'none';

        aboutSection.style.display = 'block';
    });

    // Dodaje event listener koji će sakriti sekcije "O meni" i "Početna", a prikazati sekciju "Kontakt" kada se klikne na link "Kontakt"
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();

        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';

        contactSection.style.display = 'block';
    });
});
