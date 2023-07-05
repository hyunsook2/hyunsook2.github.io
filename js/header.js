// Project 버튼 클릭 시 index.html로 이동 후 Project 섹션으로 이동
document.querySelector('.menu-a[href="#project-section"]').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 중단
});

// Skills 버튼 클릭 시 index.html로 이동 후 Skills 섹션으로 이동
document.querySelector('.menu-a[href="#skills-section"]').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 중단
});