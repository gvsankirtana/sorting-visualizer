export function getBubbleSortAnimations(array) {
    const animations = [];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            animations.push(["compare1",j,j+1]);
            animations.push(["compare2",j,j+1]);
           if(array[j]>array[j+1]){
            animations.push(["swap",j, array[j+1]]);
            animations.push(["swap",j+1,array[j]]);
            var temp = array[j];
            array[j] = array[j + 1];
            array[j+1] = temp;
           }
           else{
            animations.push(["swap",j, array[j]]);
            animations.push(["swap",j,array[j]]);
           }
        }
    }
    return [animations];
}
