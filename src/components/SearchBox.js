/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
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
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text"
                 className="form-control"
                 placeholder="Search Publisher"
                 onChange={this.handleChange.bind(this)}
          />
        </form>
        <SiteList/>
      </div>

    );
  }
}
const  mapDispatchToProps = (dispatch) => {
  return bindActionCreators({searchSite: searchSite}, dispatch);
};

SearchBox.propTypes = {
  searchSite: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SearchBox);


