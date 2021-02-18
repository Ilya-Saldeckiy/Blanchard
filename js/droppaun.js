document.addEventListener('DOMContentLoaded', function() {
    window.onclick = function(event) {
        if(!event.target.matches('.under-menu-btn')){
            var dropdowns = document.getElementsByClassName('droppaun');
            var button = document.getElementsByClassName('under-menu-btn');
            var i;
            for (i = 0; i < dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                var activeBtn = button[i];
                if (openDropdown.classList.contains('tab-content-active')){
                    openDropdown.classList.remove('tab-content-active')
                }
                if (activeBtn.classList.contains('btn-active')){
                    activeBtn.classList.remove('btn-active')
                }
            }
        }
    }
    document.querySelectorAll('.under-menu-btn').forEach(function(drop){
        drop.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            drop.classList.toggle('btn-active')

            const closeMenu = () => {
                document.querySelector(`[data-target='${path}']`).classList.remove('tab-content-active')
                drop.classList.remove('btn-active')
            }

            document.querySelector(`[data-target='${path}']`).classList.toggle('tab-content-active')

            document.addEventListener('keydown', (event) => {
                if (event.code === 'Escape') {
                    closeMenu();
                }
            })
        })
    })
})