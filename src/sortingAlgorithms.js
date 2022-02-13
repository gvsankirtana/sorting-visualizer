export function mergeSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice;
    mergeSortHelper(array,0,array.length-1,auxiliaryArray,animations);
    return animations;
}
function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,){
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(auxiliaryArray,startIdx,middleIdx,mainArray,animations);
    mergeSortHelper(auxiliaryArray,middleIdx+1,endIdx,mainArray,animations);
    doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations);
}
function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations,){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx+1;
    while(i<=middleIdx && j<=endIdx){
        const animation = {};
        animation.comparison = [i,j];
        if(auxiliaryArray[i]<=auxiliaryArray[j]){
            animation.swap = [k,auxiliaryArray[i]];
            mainArray[k++] = auxiliaryArray[i++];
        }
        else{
            animation.swap = [k,auxiliaryArray[j]];
            mainArray[k++] = auxiliaryArray[j++];
        }
        animations.push(animation);
    }
    while(i<=middleIdx){
        animations.push({
            comparison : [i,i],
            swap: [k,auxiliaryArray[i]],
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while(j<=endIdx){
        animations.push({
            comparison : [j,j],
            swap: [k,auxiliaryArray[j]],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}
export function selectionSort(array) {
    const animations = [];
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1; j < array.length; j++){
            animations.push([i, j]);
            animations.push([i, j]);
            
            if (array[i] > array[j]){
                [array[i], array[j]] = [array[j], array[i]];
                animations.push([i, array[i]]);
                animations.push([j, array[j]]);
            } else {
                animations.push([i, array[i]]);
                animations.push([j, array[j]]);
            }
        }
    }
    return animations;
}