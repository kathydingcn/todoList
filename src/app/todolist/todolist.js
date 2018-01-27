import React from 'react';

import AddItemComponent from './addItem';
import DelItemComponent from './delItem';
import DoneItemComponent from './doneItem';

export default class TodoList extends  React.Component {
    constructor(){
        super();
        this.state={
            itemList: [{itemMsg:"item1", id:0, done: false},{itemMsg:"item2", id:1, done: false},{itemMsg:"item3",id:2,done: false}],
            currentId: 3,
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleDone = this.handleDone.bind(this);

    }
    handleChange(e){
        this.setState({
            itemList: this.state.itemList ,
            currentId: this.state.currentId,
            inputValue: e.target.value,
        });
    }
    handleAdd(){
        console.log(this.state.inputValue);

        this.setState({
            itemList:[...this.state.itemList, {itemMsg:this.state.inputValue, id:this.state.currentId, done: false}],
            currentId: this.state.currentId + 1 ,
            inputValue: this.state.inputValue
        });
    }

    handleDel(e){

        this.setState({
            itemList: this.state.itemList.filter((item,index)=>{return item.id!=e.target.value}),
            currentId: this.state.currentId ,
            inputValue: this.state.inputValue
        });
    }
    handleDone(e){
        console.log(e.target.value);

        var newState = {...this.state};
        newState.itemList.filter((item,index)=>{  console.log(item.id);
                if(e.target.value == item.id){
                    console.log("matched");
                    newState.itemList[index].done = true;
                }
            }
        );
        newState.currentId = this.state.currentId;
        newState.inputValue = this.state.inputValue;

        this.setState(newState);
        e.target.innerHTML = "finished";
    }
    render() {

        let itemList = this.state.itemList.map((item,index)=>{
            return <li key={item.id}  >{item.itemMsg}


                <DelItemComponent myHandleDel={this.handleDel} itemId={item.id} />
                <DoneItemComponent myHandleDone={this.handleDone} itemId={item.id}/>

            </li>
        });
        return (
            <div>

                <AddItemComponent myHandleAdd={this.handleAdd} myHandleChange={this.handleChange} />
                <ul>
                    {itemList}
                </ul>


            </div>
        );
    }
}
