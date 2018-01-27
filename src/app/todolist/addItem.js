import React from 'react';
export default class AddItemComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <input type="text" id="itemInput" name="itemInput" onChange={this.props.myHandleChange}  />
                <input type="button" value="Add Item" onClick={this.props.myHandleAdd}/>
            </div>
            )

    }
}
