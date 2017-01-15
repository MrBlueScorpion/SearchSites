/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSite } from '../actions';
import { bindActionCreators } from 'redux';
import SiteList from './SiteList';

class SearchBox extends Component {

  handleChange(e) {
    this.props.searchSite(e.target.value);
  }

  render() {
    return (
      <div style={style.container}>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <input type="text"
                   style={style.searchInput}
                   placeholder="Search Publisher"
                   onChange={this.handleChange.bind(this)}
            />
            <i className="icon-search" style={style.searchIcon} />
          </div>
          <SiteList/>
        </form>
      </div>

    );
  }
}
const  mapDispatchToProps = (dispatch) => {
  return bindActionCreators({searchSite: searchSite}, dispatch);
};



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
    fontSize: 1.2 + 'em',
    paddingLeft: 20
  },
  searchIcon: {
    marginLeft: -20,
    marginTop: 3,
    color: '#818285Z'
  }
};

export default connect(null, mapDispatchToProps)(SearchBox);


