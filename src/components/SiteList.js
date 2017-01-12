/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component } from 'react';
import ListItem from './ListItem';
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

export default connect(mapStateToProps)(SiteList);