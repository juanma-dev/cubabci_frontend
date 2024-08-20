function openSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function spanish(){
    [].forEach.call(document.querySelectorAll('.en'), function (el) {
            el.style.display = "none";
        });
    [].forEach.call(document.querySelectorAll('.es'), function (el) {
            el.style.display = "block";
        });
}
function english(){
    [].forEach.call(document.querySelectorAll('.es'), function (el) {
            el.style.display = "none";
        });
    [].forEach.call(document.querySelectorAll('.en'), function (el) {
            el.style.display = "block";
        });
}