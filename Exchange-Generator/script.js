const firstSelector = document.getElementById('first-select');
const secondSelector = document.getElementById('second-select');

fetch('https://api.exchangerate-api.com/v4/latest/EUR')
        .then(response => response.json())
        .then(rate => {
            const rates = rate.rates;
            const nameValues = Object.getOwnPropertyNames(rates);
            const values = Object.values(rates);
            const euro = document.createElement('option');
            euro.textContent = nameValues[0];
            firstSelector.appendChild(euro);

            for(let i = 0; i < nameValues.length; i++) { 
                const secondOption = document.createElement('option');
                secondOption.textContent = nameValues[i];
                secondSelector.appendChild(secondOption);
            }

            for (let i = 0; i < values.length; i++) {
                const optionCreated = document.querySelectorAll('#second-select option');
                optionCreated.getAttribute = 'value';
                optionCreated[i].value = values[i];                
            }

            const convert = document.getElementsByTagName('button');
            const firstInput = document.querySelector('#inputs input:first-of-type');
            const secondInput = document.querySelector('#inputs input:nth-of-type(2)');
            firstInput.value = values[0];

            convert[0].addEventListener('click', function(e){
                e.preventDefault();
                const selectedValue = secondSelector[secondSelector.selectedIndex].value;
                secondInput.value = firstInput.value * selectedValue;
            })
        })
        .catch(error => {console.log('error', error)}); 