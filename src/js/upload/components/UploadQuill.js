import React, {Component} from 'react';
import '../../../css/upload/components/UploadQuill.css';
import {inject, observer} from 'mobx-react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css'; // ES6
import ReactDOM from 'react-dom'

@inject('UploadStore')
@observer
export default class UploadQuill extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            editorHtml: '',
            theme: 'snow'
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (html) {
        this.setState({ editorHtml: html });
    }

    render () {
        const formats = [
            'header', 'size', 'bold', 'italic', 'underline',
            'strike', 'blockquote', 'list', 'bullet', 'code-block', 'indent', 'link', 'clean',
        ];

        const modules = {
            toolbar: [[{ 'header': '1'}, {'header': '2'}], [{size: []}], ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], ['code-block'], ['link'],  ['clean'],
            ],
        };

        const {UploadStore} = this.props;
        return (
                <ReactQuill
                    className="quillTime"
                    theme={this.state.theme}
                    onChange={UploadStore.handleHtmlChange}
                    value={UploadStore.editorHtml}
                    modules={modules}
                    formats={formats}
                    bounds={'.uploadPage'}
                    placeholder={'Describe your product, be sure to include how to implement'}
                />
        )
    }
}


/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */


/*
 * PropType validation
 */
UploadQuill.propTypes = {
    placeholder: PropTypes.string,
};


