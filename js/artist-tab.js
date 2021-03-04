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
    document.querySelectorAll('.france-artists__btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            if (path !== undefined){

                document.querySelectorAll('.france-biographi-state').forEach(function(tabContent) {
                    tabContent.classList.remove('open-biograph')
                })
                
                document.querySelector(`[data-target='${path}']`).classList.add('open-biograph')

            }
        })
    })

    document.querySelectorAll('.germani-artists__btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            if (path !== undefined){

                document.querySelectorAll('.germani-biographi-state').forEach(function(tabContent) {
                    tabContent.classList.remove('open-biograph')
                })
                document.querySelector(`[data-target='${path}']`).classList.add('open-biograph')

            }
        })
    })

    document.querySelectorAll('.italy-artists__btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            if (path !== undefined){

                document.querySelectorAll('.italy-biographi-state').forEach(function(tabContent) {
                    tabContent.classList.remove('open-biograph')
                })
                document.querySelector(`[data-target='${path}']`).classList.add('open-biograph')

            }
        })
    })

    document.querySelectorAll('.russia-artists__btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            if (path !== undefined){

                document.querySelectorAll('.russia-biographi-state').forEach(function(tabContent) {
                    tabContent.classList.remove('open-biograph')
                })
                document.querySelector(`[data-target='${path}']`).classList.add('open-biograph')

            }
        })
    })

    document.querySelectorAll('.belgia-artists__btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            if (path !== undefined){

                document.querySelectorAll('.belgia-biographi-state').forEach(function(tabContent) {
                    tabContent.classList.remove('open-biograph')
                })
                document.querySelector(`[data-target='${path}']`).classList.add('open-biograph')
            
            }
        })
    })

    $('.tabs-btn').click(function(){
        const path = event.currentTarget.dataset.path
        $(this).addClass('open');
        $('.tabs-btn').not(this).removeClass('open');
    })

    $('.france-artists__btn').click(function(){
        const path = event.currentTarget.dataset.path
        if (path !== undefined){
            $(this).toggleClass('active-btn');
            $('.france-artists__btn').not(this).removeClass('active-btn');
        }
    })

    $('.germani-artists__btn').click(function(){
        const path = event.currentTarget.dataset.path
        if (path !== undefined){
            $(this).toggleClass('active-btn');
            $('.germani-artists__btn').not(this).removeClass('active-btn');
        }
    })

    $('.italy-artists__btn').click(function(){
        const path = event.currentTarget.dataset.path
        if (path !== undefined){
            $(this).toggleClass('active-btn');
            $('.italy-artists__btn').not(this).removeClass('active-btn');
        }
    })

    $('.russia-artists__btn').click(function(){
        const path = event.currentTarget.dataset.path
        if (path !== undefined){
            $(this).toggleClass('active-btn');
            $('.russia-artists__btn').not(this).removeClass('active-btn');
        }
    })

    $('.belgia-artists__btn').click(function(){
        const path = event.currentTarget.dataset.path
        if (path !== undefined){
            $(this).toggleClass('active-btn');
            $('.belgia-artists__btn').not(this).removeClass('active-btn');
        }
    })
})
