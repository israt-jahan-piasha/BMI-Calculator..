document.getElementById('bmiForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; 
            const bmi = weight / (height * height);
            let category = '';

            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'Healthy weight';
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'Overweight';
            } else {
                category = 'Obesity';
            }

            document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
        });