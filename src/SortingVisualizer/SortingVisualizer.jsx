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
          </div>
      );
  }
}
function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}