import React from 'react';

export default class TodoList extends  React.Component {
    constructor(){
        super();
        this.state={
            itemList: [{itemMsg:"item1", id:0},{itemMsg:"item2", id:1},{itemMsg:"item3",id:2}],
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

    }
    handleChange(e){
        const name = e.target.name;
/*        if(name === "itemAdd"){
            this.setState({
                itemList:[...this.state.itemList, {itemMsg:"item4", id:3}],
                inputValue: e.target.value
            });
        }*/
        this.setState({
            itemList: this.state.itemList ,
            inputValue: e.target.value
        });

      /*  this.setState({
            itemList: ?[...this.state.itemList,{itemMsg:"lls",id:3}]:this.state.itemList,
            // itemList:  [...this.state.itemList,{itemMsg:"lls",id:3}],
            [name]: e.target.value  /!* 4 inputs name and their values*!/,*/

        // });
/*
        if(name === "itemAdd"){
            console.log(this.state.itemInput);
            this.setState({
                itemList: [...this.state.itemList,{itemMsg:this.state.itemInput, id: 3}],
                [name]: e.target.value
            });
            // console.log(this.state.itemList);
        }*/


    }
    handleAdd(){
        console.log(this.state.inputValue);
        this.setState({
            itemList:[...this.state.itemList, {itemMsg:this.state.inputValue, id:3}],
            inputValue: this.state.inputValue
        });
    }

    handleDel(e){
        console.log("del");
    }
    render() {

        console.log("before render",this.state);
        let itemList = this.state.itemList.map((item,index)=>{
            return <li >{item.itemMsg} <button onClick={this.handleDel}>X</button></li>
        });


        return (
            <div>
                <form action="" >
                    <label htmlFor="itemInput">Please Enter Item:</label>
                    <input type="text" id="itemInput" name="itemInput" onChange={this.handleChange}  />
                    <input type="button" value="Add Item" onClick={this.handleAdd}/>
                    {/*<button name="itemAdd" onChange={this.handleChange}> Add Item </button>*/}
                    <ul>
                        {itemList}
                    </ul>
                </form>

            </div>
        );
    }
}
