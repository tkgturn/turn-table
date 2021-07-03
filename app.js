var firebase = require("firebase");

//firebase config
var config = {
    apiKey: "AIzaSyDjkxuZYD28iR5WtRE_mSWyp3veTQybET4",
    authDomain: "turn-table-6fed4.firebaseapp.com",
    databaseURL: "https://turn-table-6fed4-default-rtdb.firebaseio.com",
    projectId: "turn-table-6fed4",
    storageBucket: "turn-table-6fed4.appspot.com",
    messagingSenderId: "819191797027",
    appId: "1:819191797027:web:181b285cb972f81feda896",
    measurementId: "G-WBM1SJKZTC"
  };

firebase.initializeApp(config);

var db = firebase.database();
db.ref("/turn-table").on("value", function(changedSnapshot) {
	var time = changedSnapshot.child("time").val();
	console.log('time is ' + time);
});
