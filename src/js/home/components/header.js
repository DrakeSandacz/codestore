import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import '../../../css/home/components/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTerminal } from '@fortawesome/free-solid-svg-icons'
import history from '../../history';
import FeaturedItem from './FeaturedItem';

import Carousel from 'nuka-carousel';



export default class Header extends Component {

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {

        };

    }

    componentDidMount(){

    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    navigateToAuthor = () => {
        history.push('/author');
    };

    navigateToCategories = (category, page) => {
        const navUrl ='/category/' + category + '/' + page;
        history.push(navUrl);
    };


    // autoplay={true} autoplayInterval={3000}
    render() {
        return (
            <div className="homeHeader">


                <Carousel width={"90%"} wrapAround={true} autoplay={true} autoplayInterval={3000} >
                    <FeaturedItem
                        imageUrl={"https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fshrine-s320181013-4-1a5hjp9.jpg?alt=media&token=9a348eb6-ed09-4f97-80e1-9ec9f8519f02"}
                        title={"Foody"}
                        description={"Foody is the perfect starter kit for creating a culinary app"}
                    />


                    <FeaturedItem
                        imageUrl={"https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fshrine-s320180612-4-1o5ag8e.png?alt=media&token=c3e9ffcd-ddfd-4cba-9ad0-658495372313"}
                        title={"Atom Icons Kit"}
                        description={"Icons for all of your needs"}
                    />

                    <FeaturedItem
                        imageUrl={"https://firebasestorage.googleapis.com/v0/b/code-store-cac5b.appspot.com/o/images%2Fshrine-s320181219-4-54dbin.jpg?alt=media&token=c073aa4d-1c6d-4fd2-a105-cff3c0a1f013"}
                        title={"Simply Styled Templates"}
                        description={"Simple page website templates"}
                    />
                </Carousel>




                <div className="headerTabsContainer">

                    <div className="tabContainer">
                        <div className="tabOne" onClick={() => this.navigateToCategories('all', 0)} >
                            <FontAwesomeIcon className="headerTabIcon" color="white" icon={faTh}/>
                            <h4 className="headerTabText">Explore Categories</h4>
                        </div>

                    </div>


                    <div className="tabContainer">
                        <div className="tabTwo" onClick={this.navigateToAuthor}>
                            <FontAwesomeIcon className="headerTabIcon" color="white" icon={faTerminal}/>
                            <h4 className="headerTabText">Open A Shop</h4>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}



