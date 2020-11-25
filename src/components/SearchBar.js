import React from 'react'
import { connect } from 'react-redux'
import { changeSearchText } from "../redux/actions"

const SearchBar = (props) => {
    return (
        <section id="searchbar">
            <form className="searchbar-form">
                <i className="fa fa-search fa-lg"></i>  &nbsp;
                <input
                    type="text"
                    placeholder="search..."
                    name="search"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                    />
                
            </form>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        value: state.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (searchText) => {dispatch(changeSearchText(searchText))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)