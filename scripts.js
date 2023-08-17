// Fetch data from the local raspberry pi and display it
fetch('http://192.168.2.28:5000/get_sensor_data')
    .then(response => response.json())
    .then(data => displaySensorData(data))
    .catch(error => console.error('Error fetching data:', error));

function displaySensorData(data) {
	console.log(data); // for debugging 
    const sensorDataDiv = document.getElementById('sensorData');
    let html = '<h2>Sensor Data:</h2><ul>';
    data.forEach(item => {
        html += `<li>Timestamp: ${item.time}, Temperature: ${item.temperature}, Humidity: ${item.humidity}, Gas Resistance: ${item["gas-resistance"]}}</li>`;
    }); //need to use different notation for gas resistance as it contains a dash

    html += '</ul>';
    sensorDataDiv.innerHTML = html;
}
function getCurrentData(){
    console.log("clicked");
    const currentData = document.getElementById('current-data');
    fetch('http://192.168.2.28:5000/get_current_data')
        .then(response => response.json())
        .then(data => currentData.innerText = `Timestamp: ${data.time}, Temperature: ${data.temperature}, Humidity: ${data.humidity}, Gas Resistance: ${data["gas-resistance"]}}`
    )
        .catch(error => console.error('Error fetching data:', error));
            
}