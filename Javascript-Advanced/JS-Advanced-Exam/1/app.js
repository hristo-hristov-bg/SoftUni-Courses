window.addEventListener('load', solve);

function solve() {
    const descriptionField = document.getElementById('description');
    const nameField = document.getElementById('client-name');
    const phoneField = document.getElementById('client-phone');
    const receivedOrdersField = document.getElementById('received-orders');
    const completedOrdersField = document.getElementById('completed-orders');

    const sendFormBtn = document.querySelector('#right button');
    sendFormBtn.addEventListener('click', sendForm);

    const selectOption = document.getElementById('type-product');
    //const option = selectOption.value;



    function sendForm(event) {
        event.preventDefault();

        if (descriptionField.value != '' || nameField.value != '' || phoneField.value != '') {
            
            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `
            <h2>Product type for repair: ${selectOption.value}</h2>
            <h3>Client Information: ${nameField.value}, ${phoneField.value}</h3>
            <h4>Description of the problem: ${descriptionField.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>`;

            receivedOrdersField.appendChild(div);

            const startBtn = document.querySelector('.start-btn');
            const finishBtn = document.querySelector('.finish-btn');

            startBtn.addEventListener('click', startRepair);
            finishBtn.addEventListener('click', finishRepair.bind(null, div));

        }



        descriptionField.value = '';
        nameField.value = '';
        phoneField.value = '';

    }

    function startRepair(e) {
        const startBtn = document.querySelector('.start-btn');
        const finishBtn = document.querySelector('.finish-btn');

        if (e.target.textContent == 'Start repair') {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        } else {
            startBtn.disabled = false;
            finishBtn.disabled = true;
        }

    }
    function finishRepair(div) {
        
        const finishDiv = document.createElement('div');
        finishDiv.classList.add('container');
        finishDiv.innerHTML = `
        <h2>Product type for repair: ${selectOption.value}</h2>
        <h3>Client Information: ${nameField.value}, ${phoneField.value}</h3>
        <h4>Description of the problem: ${descriptionField.value}</h4>
        `;
        
        completedOrdersField.appendChild(finishDiv);
        
        const clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', clearField.bind(null,finishDiv));
        
        div.remove();
        
    }

    function clearField(finishDiv) {
        finishDiv.remove();
    }
}