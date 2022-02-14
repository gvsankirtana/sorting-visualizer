export function getInsertionSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        let keyIndex = i;
        for (var j = i - 1; j >= 0; j--) {
          animations.push([keyIndex, j]);
          animations.push([keyIndex, j]);
          if (array[j] > array[keyIndex]) {
            animations.push([j, array[keyIndex]]);
            animations.push([keyIndex,array[j]]);
            var temp = array[j];
            array[j] = array[keyIndex];
            array[keyIndex] = temp;
            keyIndex = j;
          } 
          else {
            animations.push([j, array[j]]);
            animations.push([j, array[j]]);
            break;
          }
        }
    }
    return animations;
}
