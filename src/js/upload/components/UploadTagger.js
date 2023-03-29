import React, {Component} from 'react';
import '../../../css/upload/components/UploadTagger.css';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css';

import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'

import firebase from 'firebase';



// import history from '../../../js/history';
import {inject, observer} from 'mobx-react';

@inject('UploadStore')
@observer
export default class UploadTagger extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            tags: [],

        };
        this.handleChange = this.handleChange.bind(this);



    }

    componentDidMount(){
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    handleChange(tags) {
        this.setState({tags})
    }



    render() {
        const {UploadStore} = this.props;
        return (
            <div className="uploadTaggerContainer">

                <div className="uploadTaggerHeader">
                    <p>Tags:</p>
                </div>

                <TagsInput
                    value={UploadStore.tags}
                    onChange={UploadStore.handleTagsInput}
                    maxTags={10}
                />






            </div>
        );
    }
}