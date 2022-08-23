(function(){
    //Objetos con propiedades del efecto lightbox
var propLightbox={
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc:null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container:null, 
    modal:null,
    icono:null,
    animacion:'fade'
}

//Objetos con metodos del efecto lightbox
var metLightbox={
    inicio: function(){
        for (let i = 0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener('click',metLightbox.capturaImagen);
        }
    },

    capturaImagen:function(){
        propLightbox.imagen=this;
        metLightbox.lightbox(propLightbox.imagen);
    },

    lightbox:function(imagen){
        propLightbox.imagenSrc = window.getComputedStyle(imagen,null).backgroundImage.slice(5,-2);
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id','lightbox_container');
        propLightbox.lightbox_container=document.getElementById('lightbox_container');
        propLightbox.lightbox_container.setAttribute('class','lightbox_container');

        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','modal');
        propLightbox.modal=document.getElementById('modal');
        propLightbox.modal.style.height='100%';
        
        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src',propLightbox.imagenSrc);

        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class','imagen-modal');

        if(propLightbox.animacion=='fade'){
            document.getElementsByClassName('imagen-modal')[0].style.opacity=0;

            setTimeout(function(){
                document.getElementsByClassName('imagen-modal')[0].style.opacity=1;
            },50);
        }

        propLightbox.modal.innerHTML+='<i id="cerrar_modal" class="bi bi-x"></i>';

        propLightbox.icono=document.getElementById('cerrar_modal');

        propLightbox.icono.addEventListener('click',metLightbox.cerrarModal);
    },

    cerrarModal:function(){
        propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);
    }
}


metLightbox.inicio();

}())
