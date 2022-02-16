export function getInsertionSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        let keyIndex = i;
        for (var j = i - 1; j >= 0; j--) {
          animations.push(["compare1",keyIndex, j]);
          animations.push(["compare2",keyIndex, j]);
          if (array[j] > array[keyIndex]) {
            animations.push(["swap",j, array[keyIndex]]);
            animations.push(["swap",keyIndex,array[j]]);
            var temp = array[j];
            array[j] = array[keyIndex];
            array[keyIndex] = temp;
            keyIndex = j;
          } 
          else {
            animations.push(["swap",j, array[j]]);
            animations.push(["swap",j, array[j]]);
            break;
          }
        }
    }
    return [animations];
}
