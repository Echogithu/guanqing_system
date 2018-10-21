import React from 'react'
import {Card, Col, Row, BackTop} from 'antd'
import PanelList from './Panel'



class CollapseDemo extends React.Component {
  render () {

    return (
      <div >
        <Row  type="flex" justify="center">
          <Col span={16} >
            <Card bordered={false} className='card-item' title='近期活动' >
              <PanelList />
            </Card>
          </Col>
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}



export default CollapseDemo
