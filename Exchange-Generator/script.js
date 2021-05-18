const firstSelector = document.getElementById('first-select');
const secondSelector = document.getElementById('second-select');

fetch('https://api.exchangerate-api.com/v4/latest/EUR')
        .then(response => response.json())
        .then(rate => {
            const rates = rate.rates;
            const nameValues = Object.getOwnPropertyNames(rates);
            const values = Object.values(rates);
            const option = document.createElement('option');
            option.textContent = nameValues[0];
            firstSelector.appendChild(option);

            for(let i = 0; i < nameValues.length; i++) { 
                const option2 = document.createElement('option');
                option2.textContent = nameValues[i];
                secondSelector.appendChild(option2);
            }

            for (let i = 0; i < values.length; i++) {
                const optionCreated = document.querySelectorAll('#second-select option');
                optionCreated.getAttribute = 'value';
                optionCreated[i].value = values[i];                
            }

            const convert = document.getElementsByTagName('button');
            const input1 = document.querySelector('#inputs input:first-of-type');
            const input2 = document.querySelector('#inputs input:nth-of-type(2)');
            input1.value = values[0];

            convert[0].addEventListener('click', function(e){
                e.preventDefault();
                const selectedValue = secondSelector[secondSelector.selectedIndex].value;
                input2.value = input1.value * selectedValue;
            })
        });