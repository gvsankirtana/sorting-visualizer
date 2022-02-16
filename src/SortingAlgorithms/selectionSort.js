export function getSelectionSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            animations.push(["compare1",i, j]);
            animations.push(["compare2",i, j]);
            if (array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
                animations.push(["swap",i, array[i]]);
                animations.push(["swap",j, array[j]]);
            } else {
                animations.push(["swap",i, array[i]]);
                animations.push(["swap",j, array[j]]);
            }
        }
    }
    return [animations];
}