import React, { Component } from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import '../../css/comment/commentDiscussion.css';
import Comment from './Comment';
import CommentInput from './CommentInput';



@inject('ProductStore')
@observer
export default class CommentDiscussion extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
        };
    }

    componentDidMount(){

        console.log('component did mount comment discussion' + this.props.templateId);

        // while(!this.props.templateId){
        //    console.log('no id');
        //
        // }

    }

    componentWillMount(){

    }

    componentWillUnmount(){
        // commentListener();
    }


    render() {

        const {ProductStore} = this.props;
        const comments = this.props.comments ? this.props.comments.map((comment, i) => <Comment key={i} authorUsername={comment.authorName} authorId={comment.authorId} date={comment.dateCreated} text={comment.text}/>) : null;
        // ProductStore.getProductComments(this.props.templateId);
        // const comments = ProductStore.templateComments ? ProductStore.templateComments.map((comment, i) => <Comment key={i} authorUsername={comment.authorName} authorId={comment.authorId} date={comment.dateCreated} text={comment.text}/>) : null;






        return (
            <div className="commentDiscussionContainer">
                {comments}
                <CommentInput templateId={this.props.templateId}/>
            </div>
        );
    }
};


