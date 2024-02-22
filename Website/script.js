// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Config Firebase
const firebaseConfig = {
    apiKey: "AIzaSyABhhTqCOX-Cq3Miwzh62Tyxzy6DGq-lvc",
    authDomain: "profileapp-b8e5f.firebaseapp.com",
    databaseURL: "https://profileapp-b8e5f-default-rtdb.firebaseio.com",
    projectId: "profileapp-b8e5f",
    storageBucket: "profileapp-b8e5f.appspot.com",
    messagingSenderId: "700349795490",
    appId: "1:700349795490:web:b61cdce454e12c3c119bfb",
    measurementId: "G-VQQBCCFSFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Reference to the Realtime Database
const database = firebase.database();

// Hardcoded IDs for the first two users
const userIds = ['user1', 'user2'];

// Retrieve profile data for the first two users
userIds.forEach(userId => {
    database.ref('users/' + userId).once('value')
        .then(snapshot => {
            const userData = snapshot.val();
            if (userData) {
                document.getElementById(userId).innerHTML = `
                    <p>Name: ${userData.name}</p>
                    <p>Email: ${userData.email}</p>
                    <!-- Add more profile information as needed -->
                `;
            } else {
                document.getElementById(userId).innerHTML = 'User not found';
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
});
