import React from 'react'
import {Card, Cascader, Tooltip, Form, Select, Input, Button, message, BackTop,Radio,DatePicker} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const { RangePicker } = DatePicker
const options = [
    {
      label: '行政组',
      value: 'xingzheng',
    },
    {
      label: '营销组',
      value: 'jishu',
    },
    {
      label: '节目组',
      value: 'hubei',
    },
    {
      label: '技术组',
      value: 'hubei',
    },
    {
      label: '设计组',
      value: 'hubei',
    },
    {
      label: '摄制组',
      value: 'hubei',
    },
    {
      label: '资讯组',
      value: 'hubei',
    },
  ]



@Form.create()
class FormDemo1 extends React.Component {
  state = {
    text: '获取验证码',
    disabled: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err) => {
      if (err) {
        message.warning('请先填写正确的表单')
      } else {
        message.success('提交成功')
        // console.log(values)
      }
    })
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 12,
          offset: 4,
        },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: 86,
    })(
      <Select style={{width: 70}}>
        <Option value={86}>+86</Option>
        <Option value={87}>+87</Option>
      </Select>
    )
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    }




    return (
      <div>
        <Card bordered={false} style={{padding:'0px'}}>
          <Form layout='horizontal' style={{width: '100%', margin: '0 auto',padding:'0px'}} onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout}  label={(
              <span>
                姓名&nbsp;
                <Tooltip title='请输入您的姓名'>
                </Tooltip>
              </span>
            )}>
              {
                getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请填写名字',
                    },
                  ],
                })(
                  <Input/>
                )
              }
            </FormItem>
            <FormItem label='组别&nbsp;' {...formItemLayout} required>
              {
                getFieldDecorator('residence', {
                  rules: [
                    {
                      type: 'array',
                      required: true,
                      message: '请选择组别',
                    },
                  ],
                })(
                  <Cascader options={options} expandTrigger="hover" placeholder='' />
                )
              }
            </FormItem>
            <FormItem label='手机&nbsp;' {...formItemLayout}>
              {
                getFieldDecorator('phone', {
                  rules: [
                    {
                      len: 11,
                      pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                      required: true,
                      message: '请输入正确的11位手机号码',
                    },
                  ],
                })(
                  <Input addonBefore={prefixSelector}/>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="校区&nbsp;" required>
             {
               getFieldDecorator('radio-group')(
               <RadioGroup >
                 <Radio value="songshanhu" >松山湖</Radio>
                 <Radio value="guancheng">莞城</Radio>
               </RadioGroup>
             )}
           </FormItem>
           <FormItem
              {...formItemLayout}
              label="空闲时段&nbsp;"
            >
              {getFieldDecorator('range-time-picker', rangeConfig)(
                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
              )}
            </FormItem>
          </Form>
        </Card>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

export default FormDemo1
