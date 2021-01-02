const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;