window.addEventListener('DOMContentLoaded', function() {
    if(window.innerWidth > 768){
        document.querySelector('.event-btn').addEventListener('click', function () {
            document.querySelector('.events__list').classList.add('event-active') && document.querySelector('.events__list').classList.remove('event-disable')
            document.querySelector('.event-btn').classList.add('event-disable')
        })
    }

    if(window.innerWidth < 768){
        document.querySelector('.form-publications-categori').addEventListener('click', function() {
            this.classList.toggle('checkbox__btn--active')
            document.querySelector('.publications-form__mobile').classList.toggle('checkbox__list--reveal')
            document.querySelectorAll('.label').forEach(function(item) {
              item.classList.toggle('checkbox__item--visible')
            })
        })
    
        document.querySelectorAll('.checkbox').forEach(function(box) {
            box.addEventListener('change', function() {
              if (this.checked) {
                this.parentElement.classList.add('checkbox__active')
              } else {
                this.parentElement.classList.remove('checkbox__active')
              }
            })
        })
    
        document.querySelectorAll('.checkbox:checked').forEach(function(input) {
            input.parentElement.classList.add('checkbox__item--active')
        })
    }
})