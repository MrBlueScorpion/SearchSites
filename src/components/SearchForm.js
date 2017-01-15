/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSite } from '../actions';
import SiteList from './SiteList';

export class SearchForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  handleChange(e) {
    this.props.searchSite(e.target.value);
  }

  renderResult() {
    if (!this.props.sites.length && this.props.keyword.length) {
      return (
        <p style={style.error}>We currently don't have any results for your search, try another</p>
      );
    }

    return <SiteList sites={this.props.sites} />;
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
          {this.renderResult()}
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  sites: PropTypes.arrayOf(PropTypes.object),
  keyword: PropTypes.string,
  searchSite: PropTypes.func
};

SearchForm.defaultProps = {
  sites: [],
  keyword: '',
  searchSite: () => {}
};

const mapDispatchToProps = dispatch => bindActionCreators({ searchSite: searchSite }, dispatch);
const mapStateToProps = state => state.result;

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
  },
  error: {
    fontSize: '1.2em',
    color: '#a0a2a3',
    textAlign: 'center'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
