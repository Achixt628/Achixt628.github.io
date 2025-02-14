document.getElementById("predict-btn").addEventListener("click", function() {
    fetch("http://127.0.0.1:5000/predict-traffic")
        .then(response => response.json())
        .then(data => {
            document.getElementById("traffic-prediction").innerHTML = `
                <p>Predicted Traffic Flow: ${data.prediction}</p>
            `;
        })
        .catch(error => console.error('Error fetching traffic prediction:', error));
});

window.onload = function() {
    fetchTrafficData();
};

function fetchTrafficData() {
    fetch("http://127.0.0.1:5000/traffic-status")
        .then(response => response.json())
        .then(data => {
            document.getElementById("traffic-data").innerHTML = `
                <p>Current Traffic Status: ${data.status}</p>
            `;
        })
        .catch(error => console.error('Error fetching traffic data:', error));
}
