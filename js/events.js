window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.event-btn').addEventListener('click', function () {
        document.querySelector('.events__list').classList.add('event-active') && document.querySelector('.events__list').classList.remove('event-disable')
        document.querySelector('.event-btn').classList.add('event-disable')
    })
})