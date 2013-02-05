function RunTest(a,b,c){console.time(c);for(var i=0;i<b;i++){a(i)}console.timeEnd(c)}


/**
 * 
 */
RunTest(function(cycleNum) {
	Point2f({x: 10, y: 20}, '-', {x: 5, y: 10});
}, 100000, 'Point2f');

/**
 * 
 */
RunTest(function(cycleNum) {
	Point2fEval({x: 10, y: 20}, '-', {x: 5, y: 10});
}, 100000, 'Point2fEval');

/**
 * 
 */
function Point2fEval(start, type, end) {
	return eval("[start.x " +type + " end.x, start.y " +type + " end.y]");
}


function Point2f(start, type, end) {
	if(type == '-') {
		return [start.x - end.x, start.y - end.y]
	}
}

