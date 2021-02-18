const element = document.querySelector('#selectCustom');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
});

// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.label').forEach(function(el){
//         el.addEventListener('click', function(event){
//             event.target.classList.toggle('label-active')
//         })
//     })
// })
