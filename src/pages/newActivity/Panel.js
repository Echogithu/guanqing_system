import React from 'react'
import {Card, Collapse,Icon,Button} from 'antd'
import axios from 'axios'
const Panel = Collapse.Panel

class PanelList extends React.Component {
  constructor () {
    super ()
    this.state = {
      "error": null,
      "isLoaded": false,
      "cardContext": [],
    }
  }

  componentDidMount () {
    axios.get("https://5ba338f98da2f20014654b97.mockapi.io/api/v1/cardContext").then(
      response => this.setState({
        cardContext: response.data,
        isLoaded:true,
      })
    ).catch(
      error => this.setState({
        isLoaded:true,
        error,
      })
    )
  }

  render () {
    const { error, isLoaded} = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Collapse defaultActiveKey={['1']}>
          {this.state.cardContext.map((cardContext) =>
              <Panel header={cardContext.title} key={cardContext.id}  cardContext={cardContext} >
                <Card style={{ width: '90%',margin:'auto',border:'none'}} >
                  <img src={cardContext.img} style={{height:'145px'}}/>
                  <div style={{marginLeft:'30px',display:'inline-block'}}>
                    <h2 style={{fontSize:16 ,color:'#002766'}}>
                      {cardContext.title}
                    </h2>
                    <Icon type="clock-circle" theme="outlined" /> {cardContext.time}
                    <Icon type="environment" theme="outlined"  style={{marginLeft:20}}/> {cardContext.place}
                    <Icon type="user" theme="outlined"  style={{marginLeft:20}}/> {cardContext.guest}
                    <br/>
                    <Button type="primary" size="small" style={{marginTop:10}}>更多<Icon type="right" /></Button>
                  </div>
                </Card>
              </Panel>
          )}
        </Collapse>
      )
    }
  }
}



export default PanelList
