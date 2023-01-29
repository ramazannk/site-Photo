const modal = () =>{
    let clickBtn = false;
   function getModal(btnSelector, modalSelector, closeSelector, distroy = false){
    const btn = document.querySelectorAll(btnSelector),
        close = document.querySelector(closeSelector),
        modal = document.querySelector(modalSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();

    function showModal(){
        clearTimeout(setTimerId);
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        windows.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        }
    function closeModal(){
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
        windows.forEach(item => {
            item.style.display = 'none';
        });
        modal.style.display = 'none';
    }
        close.addEventListener('click', ()=>{
            closeModal();  
        });

        modal.addEventListener('click',(e)=>{
            if(e.target == modal){
                closeModal();
            }
            
        });

        btn.forEach(item=>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }
                showModal();
                if(distroy){
                    item.remove();
                }
                clickBtn = true;
            });
        });
    
    }
    function setTimerId(selector, timeOut){
         setTimeout(() => {
            let display;
            document.querySelectorAll(selector).forEach(item=>{
                let scroll = calcScroll();
                if(getComputedStyle(item).display !== 'none'){
                    item.style.display = 'block';
                }

                if(!display){
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                    
                }
            });    
        }, timeOut);
    }
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    function scrolHeight(selector){
        window.addEventListener('scroll', ()=>{
            if(!clickBtn && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                document.querySelector(selector).click();
            }
        });
    }
    scrolHeight('.fixed-gift');
    // setTimerId('.popup-design', 5000);
    getModal('.button-design', '.popup-design', '.popup-design .popup-close');
    getModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    getModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    getModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

};
export default modal;