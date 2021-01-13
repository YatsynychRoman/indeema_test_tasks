const [body] = document.getElementsByTagName('body');
const button = document.getElementById('btn');

button.addEventListener('click', e => showModal(e))

function showModal (e) {
    const modalWindow = document.createElement('div');
    const modalHeading = document.createElement('h1');
    const modalParagraph = document.createElement('p');
    const modalCloseButton = document.createElement('button');

    modalWindow.className = 'modal-main';

    modalHeading.innerHTML = 'Modal window';
    modalParagraph.innerHTML = 'To close modal window click the X button above (also you can make a lot of modal windows)';

    modalWindow.append(modalCloseButton);
    modalWindow.append(modalHeading);
    modalWindow.append(modalParagraph);

    modalWindow.style.top = '-100vw';
    setTimeout(() => {modalWindow.style.top = '5vw'}, 0);

    body.append(modalWindow);

    modalCloseButton.innerHTML = 'X';
    modalCloseButton.addEventListener('click', (e) => closeModal(e));
    e.preventDefault();
}

function closeModal (e) {
    const modalWindow = Array.from(document.getElementsByClassName('modal-main'));
    modalWindow.forEach(item => {
        item.style.top = '-100vw';
        setTimeout(() => body.removeChild(item), 300);
    });
    e.preventDefault();
}