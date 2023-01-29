import getResource from "./sever";

const test = ()=>{
    function getJson(size, material, options, promocode, result){
        const sizeBlock = document.querySelector(size),
              materialBlock = document.querySelector(material),
              optionsBlock = document.querySelector(options),
              resultBlock = document.querySelector(result),
              promocodeBlock = document.querySelector(promocode);
        let sum = 0;
        function calcFunc (){
            sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
            if(sizeBlock.value == '' || materialBlock.value == ''){
                resultBlock.textContent = "kjhbibibiububpno";
            }else if (promocodeBlock.value === "IMPOTEND"){
                result.textContent = Math.round(sum * 0.7);
            }else{
                resultBlock.textContent = sum;
            }
        }
        sizeBlock.addEventListener('change', calcFunc);
        materialBlock.addEventListener('change', calcFunc);
        optionsBlock.addEventListener('change', calcFunc);
        promocodeBlock.addEventListener('input', calcFunc);
        

    }
    getJson('#size', '#material', '#options', '.promocode', '.calc-price');

};
export default test;