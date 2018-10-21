import React from 'react'
import {Button, Modal, Icon} from 'antd'
import FormDemo1 from './Form'

class Enroll extends React.Component {
  state = {
    visible2: false,
    ModalText: <FormDemo1 />,
    confirmLoading: false,
    staus:'success',
  }

  closeModal (a) {
    this.setState({
      [a]: false,
    })
  }

  asynModalOnOk = (a) => {
    this.setState({
      confirmLoading: true,
      ModalText:'',
    })
    setTimeout(() => this.setState({
      [a]: false,
      confirmLoading: false,
      ModalText: '您已经报名成功！',
    }), 1000)
  }



  render () {
    const {visible2,  ModalText, confirmLoading} = this.state

    return (
      <div>
          <Button type="primary" style={{marginTop:20}} onClick={() => this.setState({visible2: true})}>工作人员报名<Icon type="right" /></Button>
          <Modal
            visible={visible2}
            title='工作人员报名'
            onOk={() => this.asynModalOnOk('visible2')}
            onCancel={() => this.closeModal('visible2')}
            footer={
              <div>
                <Button onClick={() => this.closeModal('visible2')}>Return</Button>
                <Button type="primary" loading={confirmLoading} onClick={() => this.asynModalOnOk('visible2')}>
                  完成
                </Button>
              </div>}
          >
            <p>{ModalText}</p>
          </Modal>
      </div>
    )
  }
}

// const styles = {
//   modalVertical: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%,-50%)'
//   }
// }

export default Enroll
