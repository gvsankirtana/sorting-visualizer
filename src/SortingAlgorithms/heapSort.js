export function getHeapSortAnimations(array){
    const animations = [];
    heapSort(array,animations);
    return [animations];
}

function swap(array,firstIdx,secondIdx){
    const temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
}

function heapSort(array,animations){
    var last = array.length;
    
    for(let i = Math.floor(array.length/2) - 1; i >= 0; i--){
        heapDown(array,array.length,i,animations);
    }

    for(let k = array.length -1; k > 0; k--){
        animations.push(['swap',0,array[k]]);
        animations.push(['swap',k,array[0]]);
        swap(array,0,k);
        heapDown(array,k,0,animations);
    }
}
function heapDown(arr, length, index,animations){
    var largest = index;
    var left = 2 * index + 1;
    var right = 2 * index + 2;

    if(left < length && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < length && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != index){
        animations.push(['compare1',index,largest]);
        animations.push(['compare2',index,largest]);
        animations.push(['swap',index,arr[largest]]);
        animations.push(['swap',largest,arr[index]]);
        swap(arr,largest,index);
        heapDown(arr,length,largest,animations);
    }
}