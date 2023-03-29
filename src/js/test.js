import React, {Component} from 'react';
import firebase from 'firebase';

import {EditorState} from 'draft-js';
import Editor from 'draft-js-plugins-editor';


import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'





// import history from '../../../js/history';
import {inject, observer} from 'mobx-react';

@inject('ProductStore')
@observer
export default class Test extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            // editorState: EditorState.createEmpty(),

        };


    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    // onChange = (editorState) => {
    //     this.setState({editorState});
    // };

    // handleKeyCommand = (command) => {
    //     const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    //
    //     if (newState) {
    //         this.onChange(newState);
    //         return 'handled';
    //     }
    //
    //     return 'not-handled';
    // };

    // onUnderlineClick = () => {
    //     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    // };
    //
    // onToggleCode = () => {
    //     this.onChange(RichUtils.toggleCode(this.state.editorState));
    // };

    getTemplate = () => {
        console.log('calling');

        firebase.firestore().collection('templates').doc('AY8bznNTryeYBoa582nB').get()
                .then((doc) => {
                doc.ref.collection('comments').get().then((comments) => {
                    comments.forEach((comment) => {
                        console.log(comment.data().text);
                    });
                })
            })
            .catch((error) => console.log(error))
    }


    addComment = () => {
        firebase.firestore().collection('templates').doc('5KWZs1vkPOveIwlw4uBw').collection('comments').add({
            text: 'hello this is a test'
        });
    }


    render() {

        const {ProductStore} = this.props;

        const testHtml = "<h1>Big text</h1><h2><strong>Bold text</strong></h2><p>normal text</p><p><br></p><ul><li>list bullet 1</li><li>list bullet 2</li><li>list bullet 3</li></ul>";



        return (
            <div className="testContainer">

            </div>







        );
    }
}
