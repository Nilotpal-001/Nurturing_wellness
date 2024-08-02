// BMI Calculator
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('bmi-result').innerText = 'Please enter valid height and weight values.';
        return;
    }

    let bmi = weight / (height * height);
    let category = '';
    let suggestion = '';
    let weightChange = 0;

    if (bmi < 18.5) {
        category = 'Underweight';
        weightChange = 18.5 * (height * height) - weight;
        suggestion = `You may need to gain at least ${weightChange.toFixed(2)} kg to reach a Normal Weight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        suggestion = 'You are at a healthy weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        weightChange = weight - 24.9 * (height * height);
        suggestion = `You may need to lose at least ${weightChange.toFixed(2)} kg to reach a Normal Weight.`;
    } else {
        category = 'Obese';
        weightChange = weight - 24.9 * (height * height);
        suggestion = `You may need to lose at least ${weightChange.toFixed(2)} kg to reach a Normal Weight.`;
    }

    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category}). ${suggestion}`;
});

// Pedometer
function startPedometer() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateSteps);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function updateSteps(position) {
    let steps = Math.floor(position.coords.speed * 100); // Mock calculation
    document.getElementById('steps-today').innerText = steps;
}

// Calorie Counter
document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let calories = parseInt(document.getElementById('calories').value);

    if (isNaN(calories) || calories <= 0) {
        document.getElementById('calorie-result').innerText = 'Please enter a valid calorie amount.';
        return;
    }

    let totalCalories = parseInt(localStorage.getItem('totalCalories') || '0') + calories;
    localStorage.setItem('totalCalories', totalCalories);
    document.getElementById('calorie-result').innerText = `Total Calories Consumed Today: ${totalCalories}`;
});

// Sleep Tracker
document.getElementById('sleep-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let sleep = parseInt(document.getElementById('sleep').value);

    if (isNaN(sleep) || sleep <= 0) {
        document.getElementById('sleep-result').innerText = 'Please enter valid hours of sleep.';
        return;
    }

    document.getElementById('sleep-result').innerText = `You have logged ${sleep} hours of sleep.`;
});
// Example user data storage (you would replace this with actual database interactions)
const userData = {
    email: '',
    password: '',
    age: null,
    height: null,
    weight: null,
    gender: '',
    bedSchedule: '',
    steps: null,
    heartPoints: null
};

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Perform login (this should be a request to your backend)
    if (email === userData.email && password === userData.password) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});

// Register form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    userData.email = document.getElementById('register-email').value;
    userData.password = document.getElementById('register-password').value;

    // Perform registration (this should be a request to your backend)
    alert('Registration successful!');
});

// Details form submission
document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();

    userData.age = parseInt(document.getElementById('age').value);
    userData.height = parseFloat(document.getElementById('height').value);
    userData.weight = parseFloat(document.getElementById('weight').value);
    userData.gender = document.getElementById('gender').value;
    userData.bedSchedule = document.getElementById('bed-schedule').value;
    userData.steps = parseInt(document.getElementById('steps').value);
    userData.heartPoints = parseInt(document.getElementById('heart-points').value);

    // Save details (this should be a request to your backend)
    alert('Details saved successfully!');
});