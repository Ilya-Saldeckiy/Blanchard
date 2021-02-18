window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.event-btn').addEventListener('click', function () {
        document.querySelector('.open-all-events').classList.toggle('event-active') && document.querySelector('.open-all-events').classList.remove('event-disable')
        document.querySelector('.event-btn').classList.add('event-disable')
    })
})