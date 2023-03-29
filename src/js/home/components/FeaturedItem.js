import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import '../../../css/home/components/featuredItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faTerminal } from '@fortawesome/free-solid-svg-icons'





export default class FeaturedItem extends Component {

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





    render() {


        return (

            <div onClick={() => console.log('clicked')} style={{backgroundImage: "url(" + this.props.imageUrl + ")"}} className="featuredItem">

                <div className="featuredItemInfoContainer">
                    <div className="titleContainer">
                        <h4>{this.props.title}</h4>
                    </div>

                    <div className="descriptionContainer">
                        <p>{this.props.description}</p>
                    </div>

                    <div className="buttonContainer">
                        <div onClick={() => console.log("pressed")} className="featButton">
                            <p>View</p>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}



