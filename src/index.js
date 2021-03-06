module.exports = function getZerosCount(number) {
	var zeros = 0;

	for (var i = 5; i <= number; i += 5) {
		if (i % 5 == 0) zeros += checkFives(i);
	}

	function checkFives(num) {
		var fives = 0;

		if (num % 5 == 0) {
			fives++;
			fives += checkFives(num/5);
		}

		return fives;
	}

	return zeros;
}