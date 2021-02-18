ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75846306898368,37.601079499999905],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'map-marcker.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42],
    });
    
    myMap.geoObjects.add(myPlacemark);
    
}