import React from 'react';
import {getMergeSortAnimations} from './mergeSort.js';
import {getSelectionSortAnimations} from './selectionSort.js';
import {getBubbleSortAnimations} from './bubbleSort.js';
import {getInsertionSortAnimations} from './insertionSort.js';
import {getQuickSortAnimations} from './quickSort.js';
import './SortingVisualizer.css';
const ANIMATION_SPEED_MS = 2;
const NUMBER_OF_ARRAY_BARS = 360;
const PRIMARY_COLOR = 'green';
const SECONDARY_COLOR = '#FFF01F';
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
          array.push(randomIntFromInterval(5,500));
      }
      this.setState({array});
  }
  mergesort(){
  const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
}

bubblesort(){
  const animations = getBubbleSortAnimations(this.state.array);
  const arrayBars = document.getElementsByClassName('array-bar');
  for (let i = 0; i < animations.length; i++){
    const isColorChange = (i % 4 === 0 || i % 4 === 1);
    if(isColorChange) {
    const [barOne, barTwo] = animations[i];
     const barOneStyle = arrayBars[barOne].style;
     const barTwoStyle = arrayBars[barTwo].style;
     console.log(barOneStyle);
      const color = i % 4 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOne, newHeightOne] = animations[i];
        const [barTwo, newHeightTwo] = animations[i];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        barOneStyle.height = `${newHeightOne}px`;
       barTwoStyle.height = `${newHeightTwo}px`;
      }, i * ANIMATION_SPEED_MS)
    }
  }
 }
  selectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      if(isColorChange) {
        const [barOne, barTwo] = animations[i];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        const color = i % 4 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOne, newHeightOne] = animations[i];
          const [barTwo, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          barOneStyle.height = `${newHeightOne}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
        }, i * ANIMATION_SPEED_MS)
      }
    }
   }
   insertionsort(){
    const animations = getInsertionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    console.log(animations.length);
    for (let i = 0; i < animations.length; i++){
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      if(isColorChange) {
      const [barOne, barTwo] = animations[i];
       const barOneStyle = arrayBars[barOne].style;
       const barTwoStyle = arrayBars[barTwo].style;
       console.log(barOneStyle);
        const color = i % 4 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOne, newHeightOne] = animations[i];
          const [barTwo, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          barOneStyle.height = `${newHeightOne}px`;
         barTwoStyle.height = `${newHeightTwo}px`;
        }, i * ANIMATION_SPEED_MS)
      }
    }
   }
   quicksort(){
    const animations = getInsertionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    console.log(animations.length);
    for (let i = 0; i < animations.length; i++){
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      if(isColorChange) {
      const [barOne, barTwo] = animations[i];
       const barOneStyle = arrayBars[barOne].style;
       const barTwoStyle = arrayBars[barTwo].style;
       console.log(barOneStyle);
        const color = i % 4 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOne, newHeightOne] = animations[i];
          const [barTwo, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          barOneStyle.height = `${newHeightOne}px`;
         barTwoStyle.height = `${newHeightTwo}px`;
        }, i * ANIMATION_SPEED_MS)
      }
    }
  }
   heapsort(){
    const animations = getInsertionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
    console.log(animations.length);
    for (let i = 0; i < animations.length; i++){
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      if(isColorChange) {
      const [barOne, barTwo] = animations[i];
       const barOneStyle = arrayBars[barOne].style;
       const barTwoStyle = arrayBars[barTwo].style;
       console.log(barOneStyle);
        const color = i % 4 === 0? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOne, newHeightOne] = animations[i];
          const [barTwo, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          barOneStyle.height = `${newHeightOne}px`;
         barTwoStyle.height = `${newHeightTwo}px`;
        }, i * ANIMATION_SPEED_MS)
      }
    }
   }
   showcatweb() {
    this.restArray();
    var webs = document.getElementsByClassName('array-bar');
    for (var i = 0; i < webs.length; i++) {
      var imgCnr = webs[i];
      imgCnr.style.backgroundColor = 'white'; 
    }
  }
  render(){
      const{array} = this.state;
      return(
        <div >
          <div className="array-container">
          {array.map((value,idx) => (
              <div className="array-bar" 
                  key={idx}
                  style={{height:`${value}px`}}>
              </div>
       ))}
       </div>
       <button onClick={()=>this.showcatweb()}>change_Color</button>
       <button onClick={() => this.mergesort()}>Merge Sort</button>
       <button onClick={() => this.selectionSort()}>Selection Sort</button>
       <button onClick={() => this.bubblesort()}>Bubble Sort</button>
       <button onClick={() => this.insertionsort()}>Insertion Sort</button>
       <button onClick={() => this.quicksort()}>Quick Sort</button>
       <button onClick={() => this.heapsort()}>Heap Sort</button>
      </div>
      );
  }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}