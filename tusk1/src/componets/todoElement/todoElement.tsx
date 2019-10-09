import React from 'react';
import './todoElement.css';


interface TodoElementInp {
    title: string
    completed: boolean
}
class TodoElement extends React.Component<TodoElementInp> {
    constructor(props: any) {
        super(props);
        this.state = {
            ans: "sd",
        };
    }
    render() {
        return (
            <div className="TodoElement">
                {this.props.completed ?
                    <div className="Ellipse-completed"></div> :
                    <div className="Ellipse-uncompleted"> </div>}
                <div className="texter">{this.props.title}</div>
            </div>
        );
    }
}


export default TodoElement;