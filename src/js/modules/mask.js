const mask =(even)=>{
    let setCursorPosition = (pos, elem) => {
        elem.focus();
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    let inputs = document.querySelectorAll(even);
    function phoneMask(event){
        let matrix = '+996 (___) __ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if(def.length >= val.length){
            val = def;
        }
        this.value = matrix.replace(/./g, (a)=>{
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
        if(event.type == 'blur'){
            if(this.value.length == 3){
                this.value = '';
            }
        }else{
            setCursorPosition(this.value.length, this);
        }
    }
    inputs.forEach(item =>{
        item.addEventListener('input', phoneMask);
        item.addEventListener('blur', phoneMask);
        item.addEventListener('focus', phoneMask);
    });
    
};
export default mask;

