/** @format */

var isFollowed = false;
//Button
function followStatus() {
	isFollowed = true;
	document.querySelector("#btnflw").style.backgroundColor = "#2d3f50";
	document.querySelector("#btnflw").style.color = "#65a1dd";
	document.querySelector("#btnflw").innerText = "Following";

	document.querySelector("#savebtn").style.display = "block";
	document.querySelector("#msg").style.display = "block";

	setTimeout(function () {
		document.querySelector("#msg").style.display = "none";
	}, 2000);
}

function changeText() {
	if (isFollowed) document.querySelector("#btnflw").innerText = "Unfollow";
}

function flwText() {
	if (isFollowed) document.querySelector("#btnflw").innerText = "Following";
}

function save() {
	isFollowed = true;
	document.querySelector("#savebtn").innerText = "Saved";
	document.querySelector("#msg").style.display = "block";
	document.querySelector("#msg").innerText = "you saved this post";

	setTimeout(function () {
		document.querySelector("#msg").style.display = "none";
	}, 2000);
}
