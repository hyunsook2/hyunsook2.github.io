window.onload = function() {
    loadHeader();
    loadFooter();
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
