import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "../../../../../style.scss";

class Search extends Component {
    render() {
        return (
            <div className="main-aside-search">
                <input type="text" className="main-aside-search-field"/>
                <Button color="primary" className="main-aside-search-button">
                    Search
                </Button>
           </div>
        )
    }
}

export default Search;