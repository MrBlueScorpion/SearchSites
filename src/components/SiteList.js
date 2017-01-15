/**
 * Created by Lixing on 12/1/17.
 */
import React, { Component, PropTypes } from 'react';

class SiteList extends Component {
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
    return (
      <ul style={style.container}>
        {this.renderList()}
      </ul>
    );
  }
}

SiteList.propTypes = {
  sites: PropTypes.arrayOf(PropTypes.object).isRequired
};

const style = {
  container: {
    paddingLeft: 0
  },
  list: {
    marginBottom: 20,
    listStyleType: 'none'
  },
  description: {
    margin: 1
  }
};

export default SiteList;
