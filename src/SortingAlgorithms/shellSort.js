
export function getShellSortAnimations(arr)
{
    const animations = [];
	let n = arr.length;
		for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
		{
			for (let i = gap; i < n; i += 1)
			{
				let temp = arr[i];
				let j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap){
                    animations.push(["compare1",gap,i,j]);
                    animations.push(["compare2",gap,i,j]);
                    arr[j] = arr[j - gap];
                    animations.push(["swap",j,arr[j - gap]]);
                }
				arr[j] = temp;
                animations.push(["swap",j,temp]);
			}
		}
		return [animations];
}

