const burger = () => {
    function burgerFunc (btnSelector, menuSelector){
        const btn = document.querySelector(btnSelector),
              menu = document.querySelector(menuSelector);

              menu.style.display = 'none';
        btn.addEventListener('click', () => {
            if(menu.style.display == "none" && window.screen.availWidth < 993){
                menu.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }else{
                menu.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        window.addEventListener('resize', ()=>{
            if(window.screen.availWidth > 992){
                menu.style.display = 'none';
            }
        });
    }
    burgerFunc('.burger', '.burger-menu');
};
export default burger;