import React from 'react';
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
  /*Quick Sort.
Bubble Sort.
Merge Sort.
Insertion Sort.
Selection Sort.
Heap Sort.
Radix Sort.
Bucket Sort.*/
  restArray(){
      const array = [];
      for(let i=0;i<270;i++){
          array.push(randomIntFromInterval(5,1000));
      }
      this.setState({array});
  }
  mergesort(){

  }
  quicksort(){

  }
  heapsort(){

  }
  bubblesort(){

  }
  radixsort(){

 }
 insertionsort(){

 }
 selectionsort(){

 }
 shellsort(){

 }
 countingsort(){

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
       <button onClick={() => this.quicksort()}>Quick Sort</button>
       <button onClick={() => this.heapsort()}>Heap Sort</button>
       <button onClick={() => this.bubblesort()}>Bubble Sort</button>
       <button onClick={() => this.radixsort()}>Radix Sort</button>
       <button onClick={() => this.insertionsort()}>Insertion Sort</button>
       <button onClick={() => this.selectionsort()}>Selection Sort</button>
       <button onClick={() => this.shellsort()}>Shell Sort</button>
       <button onClick={() => this.countingsort()}>Counting Sort</button>
          </div>
      );
  }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}