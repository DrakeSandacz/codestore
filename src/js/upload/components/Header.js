import React, {Component} from 'react';
import '../../../css/upload/components/UploadPageHeader.css'
import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

import {inject, observer} from 'mobx-react';

@inject('UploadStore', 'AuthStore')
@observer
export default class UploadPageHeader extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {

        };
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {


        const {UploadStore, AuthStore} = this.props;
        // const userId = AuthStore;


        return (
            <div className="uploadPageHeader">
                <div className="row">
                    <h4>Submit Your Product</h4>
                </div>

                <div className="row">
                    <div className="saveForLaterButton"><p>Save for later</p></div>

                    <div onClick={() => UploadStore.uploadTemplate(AuthStore.user)} className="publishButton"><p>Publish</p></div>

                </div>
            </div>
        );
    }
}
