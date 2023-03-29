import React, { Component } from 'react';
import '../../../css/home/components/filter.css';


export default class Filter extends Component {

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
            <div className="homeFilter">
                <div onClick={this.props.allFunc} className={this.props.filter === 0 ? "filterButton filterButtonActive" : "filterButton filterButtonInactive"}>
                    <h4>All</h4>
                </div>

                <div onClick={this.props.webFunc} className={this.props.filter === 1 ? "filterButton filterButtonActive" : "filterButton filterButtonInactive"}>
                    <h4>Web</h4>
                </div>

                <div onClick={this.props.appFunc} className={this.props.filter === 2 ? "filterButton filterButtonActive" : "filterButton filterButtonInactive"}>
                    <h4>App</h4>
                </div>
            </div>
        );
    }
};
