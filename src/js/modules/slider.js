const slide =()=>{
    function slides(selector, dir, next, prev){
        const slider = document.querySelectorAll(selector),
              nextBtn = document.querySelector(next),
              prevBtn = document.querySelector(prev);

        let index = 1,
            pused = false;

        showSliders(index);
        function showSliders(n){
            if(n > slider.length){
                index = 1;
            }

            if(n < 1){
                index = slider.length;
            }

            slider.forEach(item=>{
                item.classList.add('animated');
                item.style.display = 'none';
            });
            slider[index - 1].style.display = 'block';
        }

        try{
            nextBtn.addEventListener('click', ()=>{
                pulsSlider(1);
                console.log(1);
                slider[index - 1].classList.remove('slideInRight');
                slider[index - 1].classList.add('slideInLeft');
            });
            prevBtn.addEventListener('click', ()=>{
                pulsSlider(-1);
                slider[index - 1].classList.add('slideInRight');
                slider[index - 1].classList.remove('slideInLeft');
            });
        }catch(e){

        }
        function activeSlides(){
            if(dir == 'vertical'){
                pused = setInterval(()=>{
                    pulsSlider(1);
                    slider[index - 1].classList.add('slideInDown');
                }, 3000);
            }else{
                pused = setInterval(()=>{
                    pulsSlider(1);
                    slider[index - 1].classList.remove('slideInRight');
                    slider[index - 1].classList.add('slideInLeft');
                }, 3000);
            }
        }
        activeSlides();
        slider[0].parentNode.addEventListener('mouseenter', ()=>{
            clearInterval(pused);
        });
        slider[0].parentNode.addEventListener('mouseleave', ()=>{
            activeSlides();
        });

        function pulsSlider(n){
            showSliders(index += n);
        }
        
    
    }
    slides('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    slides('.main-slider-item', "vertical");
};
export default slide;