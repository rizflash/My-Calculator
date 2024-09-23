        function clearDisplay() {
            document.getElementById('display').value = '';
            document.getElementById('resultText').innerText = '';
        }

        function appendNumber(number) {
            document.getElementById('display').value += number;
        }

        function appendOperator(operator) {
            document.getElementById('display').value += operator;
        }

        function backspace() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }

        function calculateResult() {
            document.getElementById('resultText').innerText = 'Kontol';
        }
