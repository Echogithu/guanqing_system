import React from 'react'
import {Card, Button, Icon, Table, BackTop, Input} from 'antd'
import axios from 'axios'


class TableDemo extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: '',
    loading: false,
    data4: [],
    pagination: {
      pageSize:6,
    },
    count: 2,
    editingKey: '',
  }

  componentDidMount () {
    this.getRemoteData()
  }
  handleSearch = (selectedKeys, confirm) => () => {
   confirm()
   this.setState({ searchText: selectedKeys[0] })
 }

 handleReset = clearFilters => () => {
    clearFilters()
    this.setState({ searchText: '' })
  }

  getRemoteData (params) {
    this.setState({
      loading: true,
    })
    axios.get('https://5bb1dc3c6418d70014071cab.mockapi.io/api/v1/menber', {
      params: {
        results: 10,
        size: 200,
        ...params,
      },
    }).then(res => {
      const pagination = {...this.state.pagination}
      pagination.total = 70
      this.setState({
        loading: false,
        data4: res.data,
        pagination,
      })
    })
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = {...this.state.pagination}
    pager.current = pagination.current
    this.setState({
      pagination: pager,
    })
    this.getRemoteData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    })
  }




  render () {
    const columns4 = [
        {
          title: '姓名',
          dataIndex: 'name',
          width: '10%',
          key: 'name',
          filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div  style={styles.customFilterDropdown}>
              <Input
                ref={ele => this.searchInput = ele}
                placeholder="Search name"
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={this.handleSearch(selectedKeys, confirm)}
                style={styles.customFilterDropdownInput}
              />
              <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)} style={styles.customFilterDropdownButton}>Search</Button>
              <Button onClick={this.handleReset(clearFilters)} style={styles.customFilterDropdownButton}>Reset</Button>
            </div>
          ),
          filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
          onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus()
              })
            }
          },
          render: (text) => {
            const { searchText } = this.state
            return searchText ? (
              <span>
                {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                  fragment.toLowerCase() === searchText.toLowerCase()
                    ? <span key={i} style={styles.highlight}>{fragment}</span> : fragment // eslint-disable-line
                ))}
              </span>
            ) : text
          },
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        filters: [
          {text: '男', value: "男"},
          {text: '女', value: "女"},
        ],
        width: '10%',
        onFilter: (value, record) => record.gender.includes(value),
      },
      {
        title: '组别',
        dataIndex: 'group',
        key: 'group',
        filters: [
          {text: '行政组', value: "行政组"},
          {text: '营销组', value: "营销组"},
          {text: '技术组', value: "技术组"},
          {text: '摄制组', value: "摄制组"},
          {text: '资讯组', value: "资讯组"},
          {text: '设计组', value: "设计组"},
          {text: '节目组', value: "节目组"},
        ],
        width: '10%',
        onFilter: (value, record) => record.group.includes(value),
      },
      {
        title: '职位',
        dataIndex: 'position',
        width: '10%',
      },
      {
        title: '院系',
        dataIndex: 'faculty',
        width: '15%',
      },
      {
        title: '年级专业',
        dataIndex: 'major',
        width: '15%',
      },
      {
        title: '手机',
        dataIndex: 'phone',
        width: '10%',
      },
      {
        title: 'QQ',
        dataIndex: 'QQ',
        width: '10%',
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday',
        filters: [
          {text: '01', value: "01"},
          {text: '02', value: "02"},
          {text: '03', value: "03"},
          {text: '04', value: "04"},
          {text: '05', value: "05"},
          {text: '06', value: "06"},
          {text: '07', value: "07"},
          {text: '08', value: "08"},
          {text: '09', value: "09"},
          {text: '10', value: "10"},
          {text: '11', value: "11"},
          {text: '12', value: "12"},
        ],
        width: '10%',
        onFilter: (value, record) => record.birthday.includes(value),
      },
    ]


    return (
      <div>
        <Card bordered={false} title='《莞工青年论坛》办公室v8.0成员通讯录' style={{marginBottom: 10, minHeight: 762}} id='remoteLoading'>
          <Table
                 loading={this.state.loading}
                 dataSource={this.state.data4}
                 pagination={this.state.pagination}
                 onChange={this.handleTableChange}
                 columns={columns4} style={styles.tableStyle}/>
        </Card>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

const styles = {
  tableStyle: {
    width: '100%',
  },
  affixBox: {
    position: 'absolute',
    top: 100,
    right: 50,
    with: 170,
  },

  customFilterDropdown:{
    padding: '8px',
    borderRadius: '6px',
    background:'#fff',
    boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
  },

  customFilterDropdownInput:{
    width: '130px',
    marginRight: '8px',
  },
  customFilterDropdownButton:{
    marginRight:'8px',
  },
  highlight:{
    color: '#f50',
  },
}

export default TableDemo
