if ('serviceWorker' in navigator) {
window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
});
}

function pushMessage( message ){
    Push.create("UWI GYM",{
        body: message,
        icon: 'img/icons/icon1-72x72.png',
        timeout: 4000,
        onClick: function () {
            window.focus();
            this.close();
        }
    })
}