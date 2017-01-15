/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class SiteList extends Component {
  renderList() {
    return this.props.sites.map((site) => {
      return (
        <li key={site.id} style={style.list}>
          <a href={'//' + site.siteUrl}>{site.siteName}</a>
          <p style={style.description}>{site.description}</p>
        </li>
      );
    });
  }
  render() {
    if (!this.props.sites.length && this.props.keyword.length) {
      return (
        <p style={style.error}>We currently don't have any results for your search, try another</p>
      );
    }

    return (
      <ul style={style.container}>
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return state.result;
};

const style = {
  container: {
    paddingLeft: 0,
  },
  list: {
    marginBottom: 20,
    listStyleType: 'none'
  },
  description: {
    margin: 1
  },
  error: {
    fontSize: '1.2em',
    color: '#a0a2a3',
    textAlign: 'center'
  }
};

export default connect(mapStateToProps)(SiteList);
