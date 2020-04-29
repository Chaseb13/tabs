let tabContent = document.querySelectorAll(".tab-content"),
	tabHeading = document.querySelectorAll(".tab-heading"),
	currentTab = 0;

function reset() {
	for(let i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
}

function displayTab() {
	reset();
	for(let i = 0; i < tabHeading.length; i++) {
		tabHeading[i].addEventListener('click', function() {
		displayTab();
		tabContent[i].style.display = "block";
});

	}
	
}

displayTab();
