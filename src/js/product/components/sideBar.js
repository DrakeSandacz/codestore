import React, { Component } from 'react';

import header from '../../../css/product/header.css';
import firebase from 'firebase';
import Sidebar from '../../../css/product/sideBar.css';
import ScrollProgress from 'scrollprogress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



import {inject, observer} from 'mobx-react';

const tags = ['tag', 'long tag', 'react-native', 'react-js', 'php', 'really long tag'];



const windowWidth = window.innerWidth;
@inject('ProductStore', 'AuthStore')
@observer
export default class SideBar extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            hideSidebarMobile:false,


        };

    }

    componentDidMount() {

        console.log(windowWidth);

        const progressObserver = new ScrollProgress((x, y) => {

            if(y >= 0.05 && windowWidth <= 1023){
                this.setState({
                    hideSidebarMobile: true,
                });
            } else if (y < 0.05 && this.state.hideSidebarMobile){
                this.setState({
                    hideSidebarMobile: false,
                });
            } else {}
        });
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const {ProductStore, AuthStore} = this.props;

        const TagsContainer = () => {
            if(this.props.tags){
                return (
                <div className="sidebarTagsContainer">
                    <h4>Tags</h4>
                    <div className="tagList">
                        {this.props.tags.map((tag, i) => <div key={i} className="sidebarTag"> <p>{tag}</p></div>)}
                    </div>
                </div>
                );

            } else  {
                return null;
            }

        };


        const shouldStop = this.state.scrollY === this.props.yPoint ? true : false;
        // const tagList = this.props.tags ? this.props.tags.map((tag, i) => <div key={i} className="sidebarTag"> <p>{tag}</p></div>) : null;
        const likeHandler = () => this.props.liked ? ProductStore.handleUnlike(AuthStore.user, this.props.templateId) : ProductStore.handleLike(AuthStore.user, this.props.templateId);



        return (
            <div style={this.props.loading ? {display: 'none'} : {display: 'flex'}} className={this.state.hideSidebarMobile ? "sideBarContainer hideSidebarMobile" : "sideBarContainer" } >
                <h4 className="sidebarTemplateName">{this.props.title}</h4>
                <p onClick={() => ProductStore.navToProfile(this.props.authorId)} className="sidebarAuthorName">by <span>{this.props.authorName}</span></p>


                <div className="sidebarDownloadSaveContainer">
                    <div className="buttonRow">
                        <div className="downloadButtonContainer">
                            <div className="price"><p>${this.props.price}</p></div>
                            <div className="downloadButton"><p>Download</p></div>
                        </div>
                    </div>
                    <div  className="buttonRow">
                        <div onClick={likeHandler} className={this.props.liked ? "saveButtonActive" : "saveButton"}>
                            <FontAwesomeIcon color="#808080" icon={faHeart}/>
                        </div>
                    </div>
                </div>


                <TagsContainer/>


            </div>
        );
    }
};

