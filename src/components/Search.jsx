import React from 'react';
import { Input } from 'antd';
import { Radio } from 'antd';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  setValuesInSearch = (e) => {
    if ((e && e.key === 'Enter') || !e?.key) {
      this.props.searchFilms(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        this.props.searchFilms(this.state.search, this.state.type);
      },
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="search-action">
            <Input.Search
              placeholder="Введите название фильма/сериала..."
              onSearch={this.setValuesInSearch}
              enterButton
              onChange={(e) => this.setState({ search: e.target.value })}
              loading={this.props.loading}
            />
          </div>
        </div>

        <Radio.Group
          className="search-filter"
          onChange={(e) => this.handleFilter(e)}
          value={this.state.type}>
          <Radio value={'all'}>All</Radio>
          <Radio value={'movie'}>Movies</Radio>
          <Radio value={'series'}>Series</Radio>
        </Radio.Group>
      </div>
    );
  }
}

export { Search };
