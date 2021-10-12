import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    setValuesInSearch = (e) => {
        if ((e && e.key === 'Enter') || !e?.key)  {
            this.props.searchFilms(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.value}), () => {
            this.props.searchFilms(this.state.search, this.state.type)
        })


    }

    render() {
        return (<div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder='search'
                        type="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.setValuesInSearch}
                    />
                    <button className="btn search-btn" onClick={this.setValuesInSearch}>Search</button>
                </div>
            </div>

            <div >
                <p>
                    <label>
                        <input onChange={e => this.handleFilter(e)} value="all" name="group1" type="radio" checked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input onChange={e => this.handleFilter(e)} value="movies" name="group1" type="radio" checked={this.state.type === 'movies'}/>
                        <span>Movies</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input onChange={e => this.handleFilter(e)} value="series" className="with-gap" name="group1" type="radio" checked={this.state.type === 'series'}/>
                        <span>Series</span>
                    </label>
                </p>
            </div>
        </div>)
    }
}

export {Search}