const filter = () => {
    const wrapper = document.querySelector('.portfolio-wrapper'),
          all = wrapper.querySelectorAll('.all'),
          girl = wrapper.querySelectorAll('.girl'),
          lovers = wrapper.querySelectorAll('.lovers'),
          guy = wrapper.querySelectorAll('.guy'),
          boss = wrapper.querySelectorAll('.chef'),
          
          menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          allM = menu.querySelector('.all'),
          loversM = menu.querySelector('.lovers'),
          chef = menu.querySelector('.chef'),
          girlM = menu.querySelector('.girl'),
          guyM = menu.querySelector('.guy'),
          no = document.querySelectorAll('.portfolio-no'),
          grandmother = menu.querySelector('.grandmother'),
          granddad = menu.querySelector('.granddad');
    all.forEach(item=>item.style.display = 'none');

    function filterFunc (elem){
        all.forEach(item=>{
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeOutDown');
        });
        
        if(elem){
            elem.forEach(item => {
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            });
        }else{
            elem.forEach(item => {
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn');
            });
        }
    }
    
    allM.addEventListener('click', ()=>{
        filterFunc(all);
    });
    girlM.addEventListener('click', ()=>{
        filterFunc(girl);
    });
    loversM.addEventListener('click', ()=>{
        filterFunc(lovers);
    });
    guyM.addEventListener('click', ()=>{
        filterFunc(guy);
    });
    chef.addEventListener('click', ()=>{
        filterFunc(boss);
    });
    grandmother.addEventListener('click', ()=>{
        filterFunc(no);
    });
    granddad.addEventListener('click', ()=>{
        filterFunc(no);
    });
    menu.addEventListener('click', (e)=>{
        if(e.target && e.target.tagName == 'LI'){
            items.forEach(item => {
                item.classList.remove('active');
                e.target.classList.add('active');
            });
        }
    });
};
export default filter;