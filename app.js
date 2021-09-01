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
var my_turn = '0';
var my_time = '0';

db.ref("/turn-table").on("value", function(changedSnapshot) {

	var new_turn = changedSnapshot.child("turn").val();
	var my_time = changedSnapshot.child("time").val();

	if (my_turn = '0' && new_turn == '1'){
		console.log('turn 0->1');
		db.ref("/turn-table").update({
		    "turn":0
		});
	}

	my_turn = new_turn;

});
