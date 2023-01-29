const moreStyle = (btnSelector, wrapper) =>{
    async function getResource(url){
        let res = await fetch(url);

        return await res.json();
    }
    const btns = document.querySelector(btnSelector);

    btns.addEventListener('click', ()=>{
        getResource('http://localhost:3000/styles')
        .then(data=>{
            creatCard(data);
        });
        btns.remove();
    });

    function creatCard(res){
        res.forEach(item=>{
            const cards = document.createElement('div');
                  cards.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
                  cards.classList.add("animated", "fadeInUp");

                cards.innerHTML = `
                    <div class=styles-block>
                        <img src=${item.src} alt>
                        <h4>${item.title}</h4>
                        <a href=${item.link}>Подробнее</a>
                    </div>
                `;
                document.querySelector(wrapper).append(cards);
        });
    }
    
};
export default moreStyle;