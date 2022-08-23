(function(){
    var propSlider = {
        slider: document.getElementById('slider'),
        primerSlide: null
    }
    
    var metSlider = {
        inicio: function(){
            setInterval(metSlider.moverSlide,4000);
        },
    
        moverSlide:function(){
            propSlider.slider.style.transition='all 1s ease';
            propSlider.slider.style.marginLeft='-100%';
    
            setTimeout(function(){
                propSlider.primerSlide = propSlider.slider.firstElementChild;
    
                propSlider.slider.appendChild(propSlider.primerSlide);
    
                propSlider.slider.style.transition='unset';
    
                propSlider.slider.style.marginLeft='0';
            },1000);
        }
    }
    
    metSlider.inicio();
}())

