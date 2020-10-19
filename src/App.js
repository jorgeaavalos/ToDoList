import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    items:[],
    currentItem:{
    text:'',
    key:'',
    completed:false
    }
  }
  this.handleInput = this.handleInput.bind(this);
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.setUpdateItem = this.setUpdateItem.bind(this);
  this.setCompletedItem=this.setCompletedItem.bind(this);
  this.setUncompletedItem=this.setUncompletedItem.bind(this);
}

handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key:Date.now(),
      completed:false
    }
  })
}


addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  if(newItem.text!==""){
    const newItems = [...this.state.items, newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:'',
        completed:''
      }
    })
  }
}


deleteItem(key){
  const filterItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filterItems
    })
  }



setUpdateItem(text,key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }

setCompletedItem(key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.completed=true;
      }
    })
    this.setState({
      items: items
    })
  }
  setUncompletedItem(key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.completed=false;
      }
    })
    this.setState({
      items: items
    })
  }



render(){
  return (
    <div>
      <header>
      <form id="to-do-form" className="center">
        <input type="text" placeholder="Enter Text"
        value={this.state.currentItem.text}
        onChange={this.handleInput}/>
        <button type ="submit"
        onClick={this.addItem}
        >Add</button>
      </form> 
    </header>


    <div className="list-container">
    <ListItems items = {this.state.items}
    deleteItem = {this.deleteItem}
    setUpdateItem = {this.setUpdateItem}
    setCompletedItem= {this.setCompletedItem}
    setUncompletedItem={this.setUncompletedItem}></ListItems>
    </div>
    </div>
  );
}

}



export default App;
