document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav ol li a');
    console.log(links);
    const currentPage = window.location.href;
    console.log(currentPage);

    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        console.log(linkHref);
            link.classList.add('active');
    });
});

const sections = document.body.getElementsByTagName("section");

function openMenu() {
    document.getElementById("mobile_container").style.right="0%";
    document.getElementById("mobile_menu").style.opacity="1";
    hide(sections)
    
}

function hide(sections2) {
    for(var i = 0; i < sections2.length; i++) {
        sections2[i].style.display="none";
    }

}function show(sections2) {
    for(var i = 0; i < sections2.length; i++) {
        sections2[i].style.display="block";
    }
}

function closeMenu() {
    document.getElementById("mobile_container").style.right="100%";
    document.getElementById("mobile_menu").style.opacity="0";
    show(sections)
}
