import React from 'react';
import * as sortingAlgorithms from './sortingAlgorithms.js';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          array : [],
      };
  }
  componentDidMount(){
      this.restArray();
  }
  restArray(){
      const array = [];
      for(let i=0;i<270;i++){
          array.push(randomIntFromInterval(5,500));
      }
      this.setState({array});
  }
  mergesort(){
    const animations = sortingAlgorithms.mergeSort(this.state.array);
    const newAnimations = [];
    for(const animation of animations){
        newAnimations.push(animation.comparison);
        newAnimations.push(animation.comparison);
        newAnimations.push(animation.swap);
    }
    for(let i=0;i<newAnimations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){
            const [barOneIdx,barTwoIdx] = newAnimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'green';
            setTimeout(() => {
             barOneStyle.backgroundColor = color;
             barTwoStyle.backgroundColor = color;
        },i*5);
    }
    else{
        setTimeout(()=> {
            const [barOneIdx,newHeight] = newAnimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
        }, i*5);
    }
}
  }
   selectionSort(){
    const animations = sortingAlgorithms.selectionSort(this.state.array);
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      if(isColorChange) {
        const [barOne, barTwo] = animations[i];
        const barOneStyle = arrayBars[barOne].style;
        const barTwoStyle = arrayBars[barTwo].style;
        const color = i % 4 === 0? 'red' : 'green';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 2);
      } else {
        setTimeout(() => {
          const [barOne, newHeightOne] = animations[i];
          const [barTwo, newHeightTwo] = animations[i];
          const barOneStyle = arrayBars[barOne].style;
          const barTwoStyle = arrayBars[barTwo].style;
          barOneStyle.height = `${newHeightOne}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
        }, i * 2)
      }
    }
   }
   heapsort(){
 
   }
   bubblesort(){
       
   }
   quicksort(){

   }
  render(){
      const{array} = this.state;
      return(
          <div className="array-container">
          {array.map((value,idx) => (
              <div className="array-bar" 
                  key={idx}
                  style={{height:`${value}px`}}>
              </div>
       ))}
       <button onClick={() => this.restArray()}>Generate New Array</button>
       <button onClick={() => this.mergesort()}>Merge Sort</button>
       <button onClick={() => this.selectionSort()}>Selection Sort</button>
       <button onClick={() => this.quicksort()}>quick Sort</button>
       <button onClick={() => this.heapsort()}>Heap Sort</button>
       <button onClick={() => this.bubblesort()}>Bubble Sort</button>
          </div>
      );
  }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}
function arraysAreEqual(arrayOne,arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i=0;i<arrayOne.length;i++){
        if(arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}