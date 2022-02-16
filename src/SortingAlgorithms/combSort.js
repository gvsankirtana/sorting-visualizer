export function getCombSortAnimations(array) {
    let animations = [];
    let auxiliaryArray = array.slice();
    combSort(auxiliaryArray, animations);

    array = auxiliaryArray;
    console.log([animations]);
    return [animations];
}

function combSort(auxiliaryArray, animations) {
  let gap = auxiliaryArray.length;
  let swap = true;
  while (gap > 1 || swap === true) {
    gap = combSortHelper(gap);
    swap = false;
    for (let i = 0; i < auxiliaryArray.length - gap; i++) {
        animations.push(["compare1", i, i + gap]);
        animations.push(["compare2", i, i + gap]);
      if (auxiliaryArray[i] > auxiliaryArray[i + gap]) {
        animations.push(["swap", i, auxiliaryArray[i + gap]]);
        animations.push(["swap", i + gap, auxiliaryArray[i]]);
        let temp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[i + gap];
        auxiliaryArray[i + gap] = temp;
        swap = true;
      }
    }
    gap = Math.floor(gap / 1.3);
  }
  return auxiliaryArray;
}

function combSortHelper(gap) {
    gap = Math.floor(gap / 1.3);
    return (gap <=1? 1 : gap);
}