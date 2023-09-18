let displayValue = '';

        function appendToDisplay(value) {
            displayValue += value;
            document.querySelector('.result').textContent = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.querySelector('.result').textContent = '0';
        }

        function calculateResult() {
            try {
                const result = eval(displayValue);
                document.querySelector('.result').textContent = result;
                displayValue = String(result);
            } catch (error) {
                document.querySelector('.result').textContent = 'Error';
                displayValue = '';
            }
        }