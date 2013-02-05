/**
 * RunTest(function(cycleNum) {
 * 		console.log(cycleNum);
 * 
 * }, 1000, 'cycle');
 */

function RunTest(callback, cycles, name) {
	console.time(name);
	
	for(var i=0; i < cycles; i++) {
		callback(i);
	}
	
	console.timeEnd(name);
}