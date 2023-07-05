window.onload = function() {
    loadHeader();
    loadFooter();
    loadHeader2();
    loadHeader3();
    roulette_header();
}

function loadHeader() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });
}

function loadFooter() {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
}

function loadHeader2() {
    fetch('header2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header2').innerHTML = data;
    });
}

function loadHeader3() {
    fetch('projectHeader.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header3').innerHTML = data;
    });
}

function roulette_header() {
    fetch('roulette_header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('roulette_header').innerHTML = data;
    });
}
