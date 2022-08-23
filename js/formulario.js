
propFormulario = {
    formulario : document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error:null,
    textoError:null
}


metFormulario = {
    inicio: function(){
        for (let i = 0; i < propFormulario.elementos.length; i++) {
            if(propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' ||  propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusinput);
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurinput);
            }
        }


        propFormulario.formulario.addEventListener('submit',metFormulario.validarInputs);
    },
    focusinput:function(){
        this.parentElement.children[1].className = 'label active';
    },

    blurinput:function(){
        if(this.value == ''){
            this.parentElement.children[1].className = 'label';
        }
    },

    validarInputs: function(e){
        for (let i = 0; i < propFormulario.elementos.length; i++) {
            if(propFormulario.elementos[i].value == ''){
                e.preventDefault();

                if(propFormulario.elementos[i].parentElement.children.length < 3){
                   
                    propFormulario.error = document.createElement('p');
                    propFormulario.textoError=document.createTextNode('Por favor llena el campo con tu '+ propFormulario.elementos[i].name);
                    propFormulario.error.appendChild(propFormulario.textoError);
                    propFormulario.error.className= 'error';
    
                    propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
                }
                
            }else{
                if(propFormulario.elementos[i].parentElement.children.length >= 3){
                    propFormulario.error = propFormulario.elementos[i].parentElement.getElementByTagName('p')[0];
                    propFormulario.elementos[i].parentElement.RemoveChild(propFormulario.error);
                }
            }
            
        }
    }


}

metFormulario.inicio();