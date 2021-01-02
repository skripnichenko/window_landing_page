import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]')

    const message = {
        successMessage: 'Спасибо! Мы скоро с Вами свяжемся!',
        loadingMessage: 'Загрузка...',
        errorMessage: 'Произошла ошибка, попробуйте еще раз!'
    };

    const postData = async (url, data) => {
        document.querySelectorAll('.status').textContent = message.loadingMessage;
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }

    form.forEach(el => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            el.appendChild(statusMessage);

            const formData = new FormData(el);
            if (el.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.successMessage;
                    console.log(res);
                }).catch(() => statusMessage.textContent = message.errorMessage)
                .finally(() => {
                    input.forEach(el => {
                        el.value = '';
                    });
                    setTimeout(() => statusMessage.remove(), 5000)
                })
        })
    })
}

export default forms;