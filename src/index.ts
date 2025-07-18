const keys = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


function insertionSort(nums: number[]): number[] {
	for (let i = 1; i < nums.length; ++i) {
		let key = nums[i]
		for (let j = i - 1; j > -1; j--) {
			if (key < nums[j]) {
				swap(nums, j + 1, j)
			}
		}
	}
	console.log(nums)
	return nums
}

function swap(arr: number[], a: number, b: number) {
	arr[a] = arr[a] + arr[b]
	arr[b] = arr[a] - arr[b]
	arr[a] = arr[a] - arr[b]
}


insertionSort(keys)
