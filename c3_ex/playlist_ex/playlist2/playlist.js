/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	var button = document.getElementById("deleteAllButton");
	button.onclick = handleButtonClick1;
	// 추가1
	var button = document.getElementById("deleteButton");
	button.onclick = handleButtonClick2;

	loadPlaylist();
}

function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	//alert("Adding " + songName);


	if (songName == "") {
		alert("곡을 입력하세요");
	} else {
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		save(songName);
	}
}


function handleButtonClick1(e) {
	removeAll();
}

//추가2
function handleButtonClick2(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;

	if (songName == "") {
		alert("삭제할 곡을 선택해주세요");
	} else {
		remove(songName);
	}
}