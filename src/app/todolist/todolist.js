import React from 'react';

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
        this.handleUpdate = this.handleUpdate.bind(this);

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
        // console.log(e.target.name);

        this.setState({
            itemList: this.state.itemList.filter((item,index)=>{return item.id!==e.target.value}),
            currentId: this.state.currentId ,
            inputValue: this.state.inputValue
        });

    }
    handleUpdate(e){
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
        console.log(this.state);

    }
    render() {
        let doneStyle = {backgroundColor:"green"};
        let undoneStyle = {backgroundColor:"yellow"};
        // console.log("before render",this.state);

        let itemList = this.state.itemList.map((item,index)=>{
            return <li key={item.id}  >{item.itemMsg}

            <button value={item.id} name="delBtn" onClick={this.handleDel}>X</button>
            <button value={item.id} name="updateBtn" onClick={this.handleUpdate}>done?</button>
            </li>
        });

        return (
            <div>
                <form action="" >
                    <label htmlFor="itemInput">Please Enter Item:</label>
                    <input type="text" id="itemInput" name="itemInput" onChange={this.handleChange}  />
                    <input type="button" value="Add Item" onClick={this.handleAdd}/>
                    <ul>
                        {itemList}
                    </ul>
                </form>

            </div>
        );
    }
}
