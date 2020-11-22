let list = document.getElementById('nav-list');
let icon = document.getElementById('fa-link');


icon.onclick = function () {
    list.classList.toggle('is-show')
    icon.classList.toggle('is-change')
}
