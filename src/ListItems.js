import React, {useState, useRef} from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
function ListItems(props){
const [dragging,setDragging]= useState(false);
const dragItem = useRef();
const dragNode = useRef(); 
const list = props.items;


function getIndex(value, list, prop) {
    for(var i = 0; i < list.length; i++) {
        if(list[i][prop] === value) {
            return i;
        }
    }
    return -1;
}
const handleDragStart = (e ,params) => {
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(()=>{
            setDragging(true)
        },0) 
    }


const handleDragEnd = () => {
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current=null;
        dragNode.current= null;
    }

const handleDragEnter = (e,item) => {
        const currentItem = dragItem.current.item
        if (e.target !== dragNode.current){
            var nodeIndex = getIndex(item.key,list,'key')
            var dragIndex = getIndex(currentItem.key,list,'key')
            let temp = list[nodeIndex];
            list[nodeIndex]=list[dragIndex]
            list[dragIndex]=temp
        }
    }

const getStyles=(params)=>{
        const currentItem = dragItem.current.item;
        if(currentItem.key===params.item.key){
            return 'drag'
        }
        return ''
    }


    const items = props.items;
    const listItems = items.map(item=>
        {
            return <div className = "list" key = {item.key}>
                <p draggable 
                
                onDragStart={(e)=>{handleDragStart(e,{item})}}
                onDragEnter = {dragging? (e)=>{handleDragEnter(e,item)}:null}
                id={dragging?getStyles({item}):null}
                >
                    <input 
                    id = {item.key} 
                    value={item.text}
                    onChange={
                        (e) =>  {props.setUpdateItem(e.target.value, item.key)}} /> <span>
                <FontAwesomeIcon className='faicons' icon='trash'
                onClick={() => props.deleteItem(item.key)}
                />
                </span>
                </p>
                
               
            </div>

        })

    return(
        <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    )
}


export default ListItems;