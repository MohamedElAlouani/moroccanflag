$(document).ready(function() {
	function animateOne() {

		var lines = ["#innerfirstLine", "#innersecondLine", "#innerthirdLine", "#innerfourthLine", "#innerfifthLine"];

			var startLineIndex = Math.floor(Math.random() * 5);

			function innerAnimateOne (itirator) {

				var index = j > 4 ? j - 5 : j;
				var heightOrWidth = index === 3 ? "width" : "height";

				setTimeout(function() {		
					$(lines[index]).css(heightOrWidth, "0%");
				}, (j - startLineIndex) * 500)
			}

			for (var j = startLineIndex; j < startLineIndex + 5; j++) {
				innerAnimateOne(j)
			}

			setTimeout(function() {
				$("#flag").css("background-color", "red");
			}, 2500);
	
		}
	

	

	animateOne()

});