function threeSum(arr, target) {
	let gap = Infinite, ans = -1; 
	for(let i = 0; i < arr.length- 2; i++){
		for(let j = i+1; j < arr.length - 1; j++){
			for(let k = j + 1; j < arr.length ; k++){
				let currentSum = arr[i] + arr[j] + arr[k] ;
				let diff = Math.abs(currentSum - target);
				if(diff < gap){
					gap = diff ;
					ans = currentSum;
				}
			}
		}
	}

	return ans ;
}

module.exports = threeSum;
