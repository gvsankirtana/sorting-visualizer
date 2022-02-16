import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort.js';
import {getSelectionSortAnimations} from '../SortingAlgorithms/selectionSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort.js';
import {getInsertionSortAnimations} from '../SortingAlgorithms/insertionSort.js';
import {getQuickSortAnimations} from '../SortingAlgorithms/quickSort.js';
import {getHeapSortAnimations} from '../SortingAlgorithms/heapSort.js';
import {getCocktailSortAnimations} from '../SortingAlgorithms/cocktailSort.js';
import {getCombSortAnimations} from '../SortingAlgorithms/combSort.js';
import {getShellSortAnimations} from '../SortingAlgorithms/shellSort.js';
import './SortingVisualizer.css';
const ANIMATION_SPEED_MS = 20;
const NUMBER_OF_ARRAY_BARS = 101;
const PRIMARY_COLOR = '#015c5c';
const SECONDARY_COLOR = 'red';
export default class SortingVisualizer extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          array : [],
      };
  }
  componentDidMount(){
      this.restArray();
  };
  restArray(){
      const array = [];
      for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
          array.push(randomIntFromInterval(5,467));
      }
      this.setState({array});
  }
  mergesort(){
    const [animations] = getMergeSortAnimations(this.state.array);
  for (let i = 0; i < animations.length; i++) {
    const [desc, barOneIdx, barTwoIdx] = animations[i];
      const ColorChange = desc === "compare1" || desc === "compare2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (ColorChange) {
          const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
              barOneStyle.background = color;
              barTwoStyle.background = color;
          }, i * ANIMATION_SPEED_MS);
      }
      else {
          const [, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
              continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);  
      }
  }
}

bubblesort(){
  const [animations] = getBubbleSortAnimations(this.state.array);
  for (let i = 0; i < animations.length; i++) {
    const [desc, barOneIdx, barTwoIdx] = animations[i];
      const ColorChange = desc === "compare1" || desc === "compare2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (ColorChange) {
          const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
              barOneStyle.background = color;
              barTwoStyle.background = color;
          }, i * ANIMATION_SPEED_MS);
      }
      else {
          const [, barIndex, newHeight] = animations[i];
          if (barIndex === -1) {
              continue;
          }
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);  
      }
  }
 }
  selectionSort(){
    const [animations] = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [desc, barOneIdx, barTwoIdx] = animations[i];
        const ColorChange = desc === "compare1" || desc === "compare2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if (ColorChange) {
            const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_MS);
        }
        else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);  
        }
    }
   }
   insertionsort(){
    const [animations] = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const [desc, barOneIdx, barTwoIdx] = animations[i];
        const ColorChange = desc === "compare1" || desc === "compare2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if (ColorChange) {
            const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_MS);
        }
        else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);  
        }
    }
}
cocktailsort(){
const [animations] = getCocktailSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [desc, barOneIdx, barTwoIdx] = animations[i];
        const ColorChange = desc === "compare1" || desc === "compare2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if (ColorChange) {
            const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_MS);
        }
        else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);  
        }
    }
   }
   quicksort(){
    const [animations] = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const [desc, barOneIdx, barTwoIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2" || desc === "pivot1";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const color1 = (desc === "pivot1") ? 'yellow' : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const barpivot = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                    barpivot.background = color1;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);  
            }
        }
  }
  heapSort() {
    var time = 0;
    var timedelay = 10;
    const animations = getHeapSortAnimations(this.state.array);
    let counter = 1;
    const arrayBars = document.getElementsByClassName('array-bar');
    for(let i = 0; i < animations.length; i++){
        const[firstIdx,secondIdx,desc] = animations[i];
        const barOne = arrayBars[firstIdx];
        const barTwo = arrayBars[secondIdx];
        //swap
        if(i % 2 == 0 && desc == 'reg'){
            time = i* timedelay;
            setTimeout(() => {
                barOne.style.backgroundColor = SECONDARY_COLOR;
                barTwo.style.backgroundColor = SECONDARY_COLOR;
                //swap
                var tempHeight = barOne.style.height;
                barOne.style.height = barTwo.style.height;
                barTwo.style.height = tempHeight;
            }, i * timedelay);
        }
        //comparison
        else if(i % 2 == 1 && desc == 'reg'){
            time = i* timedelay;
            setTimeout(() => {
                barOne.style.backgroundColor = PRIMARY_COLOR;
                barTwo.style.backgroundColor = PRIMARY_COLOR;
            }, i * timedelay);
        }
        //for swapping bars
        if(desc == 'max' && i % 2 == 0){
            time = i* timedelay;
            setTimeout(() => {
              //swap
                const tempHeight = barOne.style.height;
                barOne.style.height = barTwo.style.height;
                barTwo.style.height = tempHeight;
                arrayBars[arrayBars.length - counter].style.backgroundColor = '#015c5c';
                counter++;
            }, i * timedelay);
        }
}
  }
  combSort(){
    const [animations] = getCombSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const [desc, barOneIdx, barTwoIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);  
            }
        }
  }
  cocktailsort(){
    const [animations] = getCocktailSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const [desc, barOneIdx, barTwoIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);  
            }
        }
  }
  shellsort(){
    const [animations] = getShellSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const [desc, barOneIdx, barTwoIdx,barThreeIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const barThreeStyle = arrayBars[barThreeIdx].style;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                    barThreeStyle.background = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                const [, barIndex, newHeight,] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);  
            }
        }
  }
   showcatweb() {
    this.restArray();
    var webs = document.getElementsByClassName('array-bar');
    for (var i = 0; i < webs.length; i++) {
      var imgCnr = webs[i];
      imgCnr.style.backgroundColor ='black'; 
    }
  }
  render(){
      const{array} = this.state;
      return(
        <div >
           <div className="intro-container title">
                <p>SORTING VISUALIZER</p>
            </div>
          <div className="array-container">
          <div className="button-area">
       <button className="primary-btn" onClick={()=>this.showcatweb()}>Reset Array</button>
       <button onClick={() => this.mergesort()}>Merge Sort</button>
       <button onClick={() => this.selectionSort()}>Selection Sort</button>
       <button onClick={() => this.bubblesort()}>Bubble Sort</button>
       <button onClick={() => this.insertionsort()}>Insertion Sort</button>
       <button onClick={() => this.shellsort()}>Shell Sort</button>
       <button onClick={() => this.combSort()}>Comb Sort</button>
       <button onClick={() => this.cocktailsort()}>Cocktail Sort</button>
       <button onClick={() => this.quicksort()}>Quick Sort</button>
       <button onClick={() => this.heapSort()}>Heap Sort</button>
      </div>
          {array.map((value,idx) => (
              <div className="array-bar" 
                  key={idx}
                  style={{height:`${value}px`}}>
              </div>
       ))}
       </div>
       </div>
      );
  }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}