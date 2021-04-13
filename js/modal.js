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

        window.addEventListener('click', function (e) {
            if (!modal.contains(e.target)) {
                closeModal();
            }
        });
        
    })
})