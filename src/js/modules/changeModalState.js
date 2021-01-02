import checkNumInputs from "./checkNumInputs";


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

        const bindActionToElem = (elem, event, prop) => {
            elem.forEach((el, i) => {
                el.addEventListener(event, () => {
                    switch (el.nodeName) {
                        case 'INPUT':
                            if (el.getAttribute('type') === 'checkbox') {
                                i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                                elem.forEach((item, j) => {
                                    item.checked = false;
                                    if ( i === j) {
                                        item.checked = true;
                                    }
                                })
                            } else {
                                state[prop] = el.value
                            }
                            break;
                        case 'SPAN':
                            state[prop] = i;
                            break;
                        case 'SELECT':
                            state[prop] = el.value
                            break;
                    }
                    console.log(state)
                })
            })
        }

    bindActionToElem(windowForm, 'click', 'form');
    bindActionToElem(windowHeight, 'input', 'height');
    bindActionToElem(windowWidth, 'input', 'width');
    bindActionToElem(windowType, 'change', 'type');
    bindActionToElem(windowProfile, 'change', 'profile')

    checkNumInputs('#height');
    checkNumInputs('#width');
};

export default changeModalState;