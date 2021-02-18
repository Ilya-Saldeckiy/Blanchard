document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs-btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target='${path}']`).classList.add('tab-content-active')
        })
    })
    document.querySelectorAll('.artists-btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.biographi-state').forEach(function(tabContent) {
                tabContent.classList.remove('open-biograph')
            })
            document.querySelector(`[data-target='${path}']`).classList.add('open-biograph')
        })
    })

    $('.tabs-btn').click(function(){
        $(this).toggleClass('open');
        $('.tabs-btn').not(this).removeClass('open');
    })

    $('.artists-btn').click(function(){
        $(this).toggleClass('active-btn');
        $('.artists-btn').not(this).removeClass('active-btn');
    })
})