function caption(){
document.addEventListener('DOMContentLoaded',function(){
    var imageContainers=document.querySelectorAll('.image-container');

    imageContainers.forEach(function(container){
        var image=container.querySelectorAll('.circular-image');
        var image=container.querySelectorAll('.caption');

        image.addEventListener('click',function(){
            caption.classList.toggle('show');
        });
    });
});
}