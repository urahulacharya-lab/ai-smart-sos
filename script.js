document.getElementById("sosBtn").addEventListener("click", function () {

    // 1️⃣ Show alert
    document.getElementById("alertMsg").innerHTML =
        "🚨 ALERT SENT! Emergency services notified (Demo).";

    // 2️⃣ Get live location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML =
            "Geolocation not supported.";
    }

    // 3️⃣ Show nearest police stations (Demo data)
    showPoliceStations();
});

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    document.getElementById("location").innerHTML =
        "📍 Your Location:<br>Latitude: " + lat + "<br>Longitude: " + lon;
}

function showError(error) {
    document.getElementById("location").innerHTML =
        "⚠️ Location access denied.";
}

function showPoliceStations() {
    document.getElementById("policeList").innerHTML = `
        <h3>🚓 Nearest Police Stations (Demo)</h3>
        <ul>
            <li>City Police Station – 1.2 km</li>
            <li>Women Safety Cell – 2.5 km</li>
            <li>Traffic Police HQ – 3.1 km</li>
        </ul>
    `;
}
