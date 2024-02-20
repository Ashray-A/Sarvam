

import { getDatabase, ref, push, onValue } from "firebase/database";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBa7P7NeiOKOimWSzBLvWqLHveXDus6cPw",
  authDomain: "sarvamchat-704cd.firebaseapp.com",
  databaseURL: "https://sarvamchat-704cd-default-rtdb.firebaseio.com",
  projectId: "sarvamchat-704cd",
  storageBucket: "sarvamchat-704cd.appspot.com",
  messagingSenderId: "355418008535",
  appId: "1:355418008535:web:6ccb4cef79eab74ffbf992",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const messagesRef = ref(database, 'messages');

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        push(messagesRef, {
            text: messageText,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        messageInput.value = '';
    }
});

// Listen for new messages
onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    for (const key in data) {
        const message = data[key];
        displayMessage(message);
    }
});

function displayMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.innerText = message.text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
