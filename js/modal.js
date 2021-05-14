document.querySelectorAll('.gallery-slide').forEach(function(modal){
    modal.addEventListener('click', function(event){
        const path = event.currentTarget.dataset.path
        console.log(path)

        const closeModal = () => {
            document.querySelector(`[data-target='${path}']`).classList.remove('modal__active')
            document.querySelector('.body').classList.remove('scroll-hidden')
            document.querySelector('.body').classList.remove('modal__fade')
        }

        // document.querySelector(`[data-target='${path}']`).classList.toggle('dropdown-active')

        document.querySelector(`[data-target='${path}']`).classList.add('modal__active')
        document.querySelector('.body').classList.add('scroll-hidden')
        document.querySelector('.body').classList.add('modal__fade')

        document.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                closeModal();
            }
        })

        document.querySelectorAll('.modal__btn').forEach(function(btn){
            btn.addEventListener('click', function(event){
                document.querySelector(`[data-target='${path}']`).classList.remove('modal__active')
                document.querySelector('.body').classList.remove('scroll-hidden')
                document.querySelector('.body').classList.remove('modal__fade')
            })
        })
        
    })
})

jQuery(function($){
    $(document).mouseup(function (e){
        var modalWindow = $(".gellary__modal");
        var body = $(".body");
        if (!modalWindow.is(e.target)
            && modalWindow.has(e.target).length === 0) {
                modalWindow.removeClass('modal__active');
                body.removeClass('scroll-hidden');
                body.removeClass('modal__fade'); 
        }
    });
    $(document).mouseup(function (e){
        var menu = $(".tablet-menu__active");
        if (!menu.is(e.target)
            && menu.has(e.target).length === 0) {
                menu.removeClass('tablet-menu__active');
        }
    });
});