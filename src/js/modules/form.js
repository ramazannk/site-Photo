const forms =()=>{
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Loading',
        success: 'Thanks success',
        failure: 'Mistake plase try again',
        spiner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        design: 'assets/server.php',
        question: 'assets/question.php'
    };
    upload.forEach(item=>{
        item.addEventListener('input', ()=>{
            let dots;
            const arr = item.files[0].name.split('.');
            if(arr[0].length > 6){
                dots = "...";
            }else{
                dots = '.';
            }
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
         console.log(item.files[0]);
        });
     });

    const getResours = async(url, data)=>{
        let res = await fetch(url,{
            method: 'POST',
            body: data
        });

        return await res.text( );
    };
    function clearInput(){
        inputs.forEach(item =>{
            item.value = "";
        });
        upload.forEach(item =>{
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    }

    forms.forEach(item =>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 200);

            const statusMessage = document.createElement('div');
                  statusMessage.classList.add('status');
                  item.parentNode.append(statusMessage);
            const messageImg = document.createElement('img');
                  messageImg.classList.add('animated', 'fadeInDown');
                  messageImg.setAttribute('src', message.spiner);
                  statusMessage.appendChild(messageImg);
            const textMessag = document.createElement('div');
                  textMessag.classList.add("textMessage");
                  statusMessage.appendChild(textMessag);
                  textMessag.textContent = message.loading;

            const formData = new FormData(item);
            let api;
            if(item.closest('.popup-design') || item.classList.contains('calc_form')){
                api = path.design;
            }else{
                api = path.question;
            }
            // item.closest('.popup-design') ? api = path.design : api = path.question;
            console.log(api);

            getResours(api, formData)
            .then(res=>{
                console.log(res);
                messageImg.setAttribute('src', message.ok);
                textMessag.textContent = message.success;
            })
            .catch(()=>{
                messageImg.setAttribute('src', message.ok);
                textMessag.textContent = message.failure;
            }).finally(()=>{
                setTimeout(() => {
                    clearInput();
                    item.style.display = 'block';
                    item.classList.remove('animated', 'fadeOutUp');
                    item.classList.add('animated', 'fadeInUp');
                    statusMessage.remove();
                }, 3000);
            });

        });
    });
};
export default forms;