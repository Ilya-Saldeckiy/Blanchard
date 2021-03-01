document.addEventListener('DOMContentLoaded', function() {
    window.onclick = function(event) {
        if(!event.target.matches('.under-menu__btn')){
            var dropdowns = document.getElementsByClassName('dropdown');
            var button = document.getElementsByClassName('under-menu__btn');
            var i;
            for (i = 0; i < dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                var activeBtn = button[i];
                if (openDropdown.classList.contains('dropdown-active')){
                    openDropdown.classList.remove('dropdown-active')
                }
                if (activeBtn.classList.contains('btn-active')){
                    activeBtn.classList.remove('btn-active')
                }
            }
        }
    }
    document.querySelectorAll('.under-menu__btn').forEach(function(drop){
        drop.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            drop.classList.toggle('btn-active')

            const closeMenu = () => {
                document.querySelector(`[data-target='${path}']`).classList.remove('dropdown-active')
                drop.classList.remove('btn-active')
            }

            document.querySelector(`[data-target='${path}']`).classList.toggle('dropdown-active')

            document.addEventListener('keydown', (event) => {
                if (event.code === 'Escape') {
                    closeMenu();
                }
            })
        })
    })
})