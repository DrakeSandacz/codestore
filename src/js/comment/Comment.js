import React, { Component } from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import '../../css/comment/comment.css'

@inject('ProductStore')
@observer
export default class Comments extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            username: null,
            templateId: null,
            comments: null,
        };
    }

    componentWillMount(){
    }

    render() {

        const {ProductStore} = this.props;


        return (
            <div className="commentContainer">
                <div className="commentNameContainer">
                    <p>{this.props.authorUsername}</p>
                    <p className="commentDate">{this.props.date.toDateString()}</p>
                </div>

                <div className="commentTextContainer">
                    <div style={{textAlign: 'left'}} dangerouslySetInnerHTML={{__html: this.props.text}}>
                    </div>
                </div>



            </div>
        );
    }
};

