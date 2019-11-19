import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import PropTypes from 'prop-types';

import styles from './view.module.css';

class TableInfo extends Component {
  state = { filteredInfo: {} };

  handleChange = (pagination, filters) => {
    this.setState({
      filteredInfo: filters,
    });
  };

  render() {
    const { filteredInfo = {} } = this.state;
    const { buildingInfo } = this.props;
    const columns = [
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        filters: [
          { text: 'Morecambe', value: 'Morecambe' },
          { text: 'Hastings', value: 'Hastings' },
        ],
        filteredValue: filteredInfo.location || null,
        onFilter: (value, record) => record.location.includes(value),
      },
      {
        title: 'Previous use',
        dataIndex: 'previousUse',
        key: 'previousUse',
        filters: [
          { text: 'Residential building', value: 'Residential building' },
          { text: 'Retail building', value: 'Retail building' },
          { text: 'Office building', value: 'Office building' },
          { text: 'Community building', value: 'Community building' },
        ],
        filteredValue: filteredInfo.previousUse || null,
        onFilter: (value, record) => {
          return record.previousUse.includes(value);
        },
      },
      {
        title: 'Preferred Use',
        dataIndex: 'preferredUse',
        key: 'preferredUse',
      },
      {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
      },
      {
        title: 'Empty Since',
        dataIndex: 'emptyPeriod',
        key: 'emptyPeriod',
      },
      {
        title: 'Recieved',
        dataIndex: 'approved',
        key: 'approved',
        render: record =>
          record ? (
            <Tag className={styles.approved__tag} color="green">
              Recieved
            </Tag>
          ) : (
            <Tag className={styles.approved__tag} color="red">
              Pending
            </Tag>
          ),
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={buildingInfo}
        onChange={this.handleChange}
        rowKey={record => record.id}
      />
    );
  }
}

TableInfo.propTypes = {
  buildingInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
export default TableInfo;
