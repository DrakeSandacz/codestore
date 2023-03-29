import React, { Component } from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import '../../css/comment/commentInput.css'
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';

@inject('ProductStore', 'AuthStore')
@observer
export default class CommentInput extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {

        };
    }

    componentWillMount(){
    }

    render() {

        const {ProductStore, AuthStore} = this.props;

        const formats = [
            'header', 'size', 'bold', 'italic', 'underline',
            'strike', 'blockquote', 'list', 'bullet', 'code-block', 'indent', 'link', 'clean',
        ];

        const modules = {
            toolbar: [[{ 'header': '1'}, {'header': '2'}], [{size: []}], ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], ['code-block'], ['link'],  ['clean'],
            ],
        };



        return (
            <div className="commentInputContainer">

                <ReactQuill
                    className="commentQuill"
                    theme="snow"
                    onChange={ProductStore.handleCommentText}
                    value={ProductStore.commentText}
                    modules={modules}
                    formats={formats}
                    bounds={'.commentDiscussionContainer'}
                    placeholder={'Ask a question or add a comment!'}
                />

                <div className="commentInputFooter">
                    <button className="postButton" onClick={() => ProductStore.handleCommentUpload(this.props.templateId, AuthStore.user)}>POST</button>
                </div>


            </div>
        );
    }
};



