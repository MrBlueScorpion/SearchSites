/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SiteList extends Component {
  renderList() {
    return this.props.sites.map((site) => {
      return(
        <li key={site.id}>
          <a href={'//' + site.siteUrl}>{site.siteName}</a>
          <p>{site.description}</p>
          </li>
      )
    });
  }
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { sites : state.sites }
};

SiteList.propTypes = {
  sites: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(SiteList);