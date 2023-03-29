import React, {Component} from 'react';
import '../../../css/templates/components/templatePreview.css';
import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCloudDownloadAlt, faFileCode, faTrash } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase';
// import history from '../../../js/history';
import history from '../../../js/history';
import {inject, observer} from 'mobx-react';

@inject('ProductStore', 'AuthStore')
@observer
export default class TemplatePreview extends Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            screenshotArray: [],
            uid: null,
        };

    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    navToCategory = (category) => {

        const url = '/category/' + category + '/' + 0;
        history.push(url);
    };

    render() {

        const {ProductStore, AuthStore} = this.props;
        // const image = "https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/placeholder.png?alt=media&token=7e0269c6-f0fc-45f0-a710-01351331ae3f";

        // const linkPath = '/productPage/' + this.props.templateId;


        const PreviewImage = () => {
            if(this.props.previewImage){
                return(
                    <img
                        onClick={() => ProductStore.navToProductPage(this.props.templateId)}
                        src={this.props.previewImage}
                        className="templatePreviewImage"
                        alt="templatePreviewImage"
                    />
                );

            } else {

                return(
                    <img
                        onClick={() => ProductStore.navToProductPage(this.props.templateId)}
                        src="https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2FcodePlaceholder.png?alt=media&token=bd750a6d-1453-46dc-98cf-b95be0dac588"
                        className="templatePreviewImage"
                        alt="templatePreviewImage"
                    />
                );

            }
        };

        return (
            <div className="templatePreviewContainer">
                <PreviewImage/>

                <div className="templateInfoContainer">
                    <div onClick={() => ProductStore.navToProductPage(this.props.templateId)} className="templateNameContainer"><p>{this.props.title}</p></div>
                    <div className="templateAuthorContainer">
                        <p>by <span onClick={() => ProductStore.navToProfile(this.props.authorId)}>{this.props.authorName}</span> in <span onClick={() => this.navToCategory(this.props.category)}>{this.props.category}</span></p>
                    </div>
                    <div onClick={() => ProductStore.navToProductPage(this.props.templateId)} className="templateStatsContainer">


                        <div className="previewStats">
                            <div className="statCountContainer">
                                <FontAwesomeIcon color="#858e98" icon={faCloudDownloadAlt}/>
                                <p>{this.props.downloadCount}</p>
                            </div>

                            <div className="statCountContainer">
                                <FontAwesomeIcon color="#858e98" icon={faHeart}/>
                                <p>{this.props.likeCount}</p>
                            </div>

                            <div className="statCountContainer">
                                <FontAwesomeIcon color="#858e98" icon={faEye}/>
                                <p>{this.props.viewCount}</p>
                            </div>

                            <div className="statCountContainer" onClick={() => ProductStore.deleteTemplate(this.props.templateId)}>
                                <FontAwesomeIcon color="#858e98" icon={faTrash}/>
                            </div>

                        </div>

                        <div className="templatePriceContainer"><p className="pricelol">${this.props.price}</p></div>

                    </div>
                </div>

            </div>

        );
    }
}

// #858e98
