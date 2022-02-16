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
const ANIMATION_SPEED_MS_SBC = 0.5;
const ANIMATION_SPEED_MS_ISC = 1.5;
const ANIMATION_SPEED_MS_MQH = 5;
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
          array.push(randomIntFromInterval(5,435));
      }
      this.setState({array});
  }
  toggleButtons(select){
    const newBtn = document.getElementById('buttonc');
    const newBtn1 = document.getElementById('buttonc1');
    const newBtn2 = document.getElementById('buttonc2');
    const newBtn3 = document.getElementById('buttonc3');
    const newBtn4= document.getElementById('buttonc4');
    const newBtn5 = document.getElementById('buttonc5');
    const newBtn6 = document.getElementById('buttonc6');
    const newBtn7 = document.getElementById('buttonc7');
    const newBtn8 = document.getElementById('buttonc8');
    const newBtn9 = document.getElementById('buttonc9');
    newBtn.disabled = select;
    newBtn1.disabled = select;
    newBtn2.disabled = select;
    newBtn3.disabled = select;
    newBtn4.disabled = select;
    newBtn5.disabled = select;
    newBtn6.disabled = select;
    newBtn7.disabled = select;
    newBtn8.disabled = select;
    newBtn9.disabled = select;
}
  mergesort(){
    this.toggleButtons(true);
    const [animations] = getMergeSortAnimations(this.state.array);
    var time = 0;
  for (let i = 0; i < animations.length; i++) {
    const [desc, barOneIdx, barTwoIdx] = animations[i];
      const ColorChange = desc === "compare1" || desc === "compare2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (ColorChange) {
          const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          time = i * ANIMATION_SPEED_MS_MQH;
          setTimeout(() => {
              barOneStyle.background = color;
              barTwoStyle.background = color;
          }, i * ANIMATION_SPEED_MS_MQH);
      }
      else {
        time = i * ANIMATION_SPEED_MS_MQH;
          const [, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS_MQH);  
      }
  }
  setTimeout(() => {
    this.toggleButtons(false);
}, time)
}

bubblesort(){
    this.toggleButtons(true);
  const [animations] = getBubbleSortAnimations(this.state.array);
  var time = 0;
  for (let i = 0; i < animations.length; i++) {
    const [desc, barOneIdx, barTwoIdx] = animations[i];
      const ColorChange = desc === "compare1" || desc === "compare2";
      const arrayBars = document.getElementsByClassName('array-bar');
      if (ColorChange) {
          const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          time = i * ANIMATION_SPEED_MS_SBC;
          setTimeout(() => {
              barOneStyle.background = color;
              barTwoStyle.background = color;
          }, i * ANIMATION_SPEED_MS_SBC);
      }
      else {
        time = i * ANIMATION_SPEED_MS_SBC;
          const [, barIndex, newHeight] = animations[i];
          const barStyle = arrayBars[barIndex].style;
          setTimeout(() => {
              barStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS_SBC);  
      }
  }
  setTimeout(() => {
    this.toggleButtons(false);
}, time)
 }
  selectionSort(){
    this.toggleButtons(true);
    const [animations] = getSelectionSortAnimations(this.state.array);
    var time = 0;
    for (let i = 0; i < animations.length; i++) {
      const [desc, barOneIdx, barTwoIdx] = animations[i];
        const ColorChange = desc === "compare1" || desc === "compare2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if (ColorChange) {
            const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            time = i * ANIMATION_SPEED_MS_SBC;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_MS_SBC);
        }
        else {
            time = i * ANIMATION_SPEED_MS_SBC;
            const [, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS_SBC);  
        }
    }
    setTimeout(() => {
        this.toggleButtons(false);
    }, time)
   }
   insertionsort(){
    this.toggleButtons(true);
    const [animations] = getInsertionSortAnimations(this.state.array);
    var time = 0;
    for (let i = 0; i < animations.length; i++) {
        const [desc, barOneIdx, barTwoIdx] = animations[i];
        const ColorChange = desc === "compare1" || desc === "compare2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if (ColorChange) {
            const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            time = i * ANIMATION_SPEED_MS_ISC;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_MS_ISC);
        }
        else {
            time = i * ANIMATION_SPEED_MS_ISC;
            const [, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS_ISC);  
        }
    }
    setTimeout(() => {
        this.toggleButtons(false);
    }, time)
}
cocktailsort(){
    this.toggleButtons(true);
const [animations] = getCocktailSortAnimations(this.state.array);
var time = 0;
    for (let i = 0; i < animations.length; i++) {
      const [desc, barOneIdx, barTwoIdx] = animations[i];
        const ColorChange = desc === "compare1" || desc === "compare2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if (ColorChange) {
            const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            time = i * ANIMATION_SPEED_MS_SBC;
            setTimeout(() => {
                barOneStyle.background = color;
                barTwoStyle.background = color;
            }, i * ANIMATION_SPEED_MS_SBC);
        }
        else {
            time = i * ANIMATION_SPEED_MS_SBC;
            const [, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS_SBC);  
        }
    }
    setTimeout(() => {
        this.toggleButtons(false);
    }, time)
   }
   quicksort(){
    this.toggleButtons(true);
    const [animations] = getQuickSortAnimations(this.state.array);
    var time = 0;
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
                time = i * ANIMATION_SPEED_MS_MQH;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                    barpivot.background = color1;
                }, i * ANIMATION_SPEED_MS_MQH);
            }
            else {
                time = i * ANIMATION_SPEED_MS_MQH;
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS_MQH);  
            }
        }
        setTimeout(() => {
            this.toggleButtons(false);
        }, time)
  }
  heapSort() {
    this.toggleButtons(true);
    const [animations] = getHeapSortAnimations(this.state.array);
    var time = 0;
        for (let i = 0; i < animations.length; i++) {
          const [desc, barOneIdx, barTwoIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2" ;
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                time = i * ANIMATION_SPEED_MS_MQH;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * ANIMATION_SPEED_MS_MQH);
            }
            else {
                time = i * ANIMATION_SPEED_MS_MQH;
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                    barStyle.backgroundColor= '#015c5c';
                }, i * ANIMATION_SPEED_MS_MQH);  
            }
        }
        setTimeout(() => {
            this.toggleButtons(false);
        }, time)
  }
  combSort(){
    this.toggleButtons(true);
    const [animations] = getCombSortAnimations(this.state.array);
    var time = 0;
        for (let i = 0; i < animations.length; i++) {
            const [desc, barOneIdx, barTwoIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                time = i * ANIMATION_SPEED_MS_ISC;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * ANIMATION_SPEED_MS_ISC);
            }
            else {
                time = i * ANIMATION_SPEED_MS_ISC;
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS_ISC);  
            }
        }
        setTimeout(() => {
            this.toggleButtons(false);
        }, time)
  }
  cocktailsort(){
    this.toggleButtons(true);
    const [animations] = getCocktailSortAnimations(this.state.array);
    var time = 0;
        for (let i = 0; i < animations.length; i++) {
          const [desc, barOneIdx, barTwoIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                time = i * ANIMATION_SPEED_MS_SBC;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                }, i * ANIMATION_SPEED_MS_SBC);
            }
            else {
                const [, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                time = i * ANIMATION_SPEED_MS_SBC;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS_SBC);  
            }
        }
        setTimeout(() => {
            this.toggleButtons(false);
        }, time)
  }
  shellsort(){
    this.toggleButtons(true);
    const [animations] = getShellSortAnimations(this.state.array);
    var time = 0;
        for (let i = 0; i < animations.length; i++) {
          const [desc, barOneIdx, barTwoIdx,barThreeIdx] = animations[i];
            const ColorChange = desc === "compare1" || desc === "compare2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if (ColorChange) {
                const color = (desc === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const barThreeStyle = arrayBars[barThreeIdx].style;
                time = i * ANIMATION_SPEED_MS_ISC;
                setTimeout(() => {
                    barOneStyle.background = color;
                    barTwoStyle.background = color;
                    barThreeStyle.background = color;
                }, i * ANIMATION_SPEED_MS_ISC);
            }
            else {
                time = i * ANIMATION_SPEED_MS_ISC;
                const [, barIndex, newHeight,] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                    barStyle.backgroundColor= '#015c5c';
                }, i * ANIMATION_SPEED_MS_ISC);  
            }
        }
        setTimeout(() => {
            this.toggleButtons(false);
        }, time)
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
       <button id="buttonc" className="primary-btn" onClick={()=>this.showcatweb()}>Reset Array</button>
       <button id="buttonc1" onClick={() => this.mergesort()}>Merge Sort</button>
       <button id="buttonc2" onClick={() => this.selectionSort()}>Selection Sort</button>
       <button id="buttonc3" onClick={() => this.bubblesort()}>Bubble Sort</button>
       <button id="buttonc4" onClick={() => this.insertionsort()}>Insertion Sort</button>
       <button id="buttonc5" onClick={() => this.shellsort()}>Shell Sort</button>
       <button id="buttonc6" onClick={() => this.combSort()}>Comb Sort</button>
       <button id="buttonc7" onClick={() => this.cocktailsort()}>Cocktail Sort</button>
       <button id="buttonc8" onClick={() => this.quicksort()}>Quick Sort</button>
       <button id="buttonc9" onClick={() => this.heapSort()}>Heap Sort</button>
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