function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemp = '';
    let resultUnit = '';

    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    switch (unit) {
        case 'Celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F<br>
                            Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C<br>
                            Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)} °C<br>
                            Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
    }

    document.getElementById('result').innerHTML = convertedTemp;
}