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