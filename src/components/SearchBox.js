/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSite } from '../actions';
import SiteList from './SiteList';

export class SearchBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.searchSite(e.target.value);
  }

  render() {
    return (
      <div style={style.container}>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <input
              type="text"
              style={style.searchInput}
              placeholder="Search Publisher"
              onChange={this.handleChange}
            />
            <i className="icon-search" style={style.searchIcon} />
          </div>
          <SiteList/>
        </form>
      </div>

    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ searchSite: searchSite }, dispatch);

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  searchInput: {
    marginTop: 20,
    height: 80,
    width: 1170,
    boxSizing: 'border-box',
    fontSize: '1.2em',
    paddingLeft: 20
  },
  searchIcon: {
    marginLeft: -20,
    marginTop: 3,
    color: '#818285Z'
  }
};

export default connect(null, mapDispatchToProps)(SearchBox);
