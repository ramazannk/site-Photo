const imgSize = () =>{
    function imgFunc (selector, blockSelector){
        const parentSelector = document.querySelector(selector),
              block = parentSelector.querySelectorAll(blockSelector);

        function imgFunc (elem){
            const img = elem.querySelector('img');
            img.src = img.src.slice(0, -4) + '-1.png';
            elem.querySelectorAll('p').forEach(item =>{
                item.style.display = 'none';
            });
        }
        function Func (elem){
            const img = elem.querySelector('img');
            img.src = img.src.slice(0, -6) + '.png';
            elem.querySelectorAll('p').forEach(item =>{
                item.style.display = 'block';
            });
        }
        block.forEach(item => {
            item.addEventListener('mouseover', ()=> {
                imgFunc(item);
            });
        });
        block.forEach(item => {
            item.addEventListener('mouseout', ()=> {
                Func(item);
            });
        });
    }
    imgFunc('.sizes-wrapper', '.sizes-block');
};
export default imgSize;