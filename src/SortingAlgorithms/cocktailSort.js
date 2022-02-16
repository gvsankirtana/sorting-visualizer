export function getCocktailSortAnimations(a)
	{
		const animations = [];
		let swapped = true;
		let start = 0;
		let end = a.length;
		while (swapped == true) {
			swapped = false;
			for (let i = start; i < end - 1; ++i) {
				animations.push(["compare1",i,i+1]);
				animations.push(["compare2",i,i+1]);
				if (a[i] > a[i + 1]) {
					animations.push(["swap",i,a[i+1]]);
					animations.push(["swap",i+1,a[i]]);
					let temp = a[i];
					a[i] = a[i + 1];
					a[i + 1] = temp;
					swapped = true;
				}
			}
			if (swapped == false)break;
			swapped = false;
			end = end - 1;
			for (let i = end - 1; i >= start; i--) {
				animations.push(["compare1",i,i+1]);
				animations.push(["compare2",i,i+1]);
				if (a[i] > a[i + 1]) {
					animations.push(["swap",i,a[i+1]]);
					animations.push(["swap",i+1,a[i]]);
					let temp = a[i];
					a[i] = a[i + 1];
					a[i + 1] = temp;
					swapped = true;
				}
			}
			start = start + 1;
		}
		return [animations];
	}
	
	
