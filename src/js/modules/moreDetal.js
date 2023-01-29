const moreDetal = (contentSelector, items) => {
    const content = document.querySelectorAll(contentSelector),
          btn = document.querySelectorAll(items);
          
    
    function hideContent (){
        content.forEach(item => {
            item.classList.remove('animated', 'fadeOutUp');
            item.classList.add('animated', 'fadeInUp');
        });
        btn.forEach(item => {
            item.classList.remove('active');
        });
    }
    hideContent();
    btn.forEach(item=>{
        item.addEventListener('click', function(){
            if (!this.classList.contains('active')){
                hideContent();
                btn.forEach(item => {
                    item.classList.remove('active',  'super-active');
                });
                this.classList.add('active', 'super-active');
            }else{
                content.forEach(item => {
                    item.classList.remove('animated', 'fadeInUp');
                    item.classList.add('animated', 'fadeOutUp');
                });
                this.classList.remove('active', 'super-active');
            }
       });
    });
    
};
export default moreDetal;