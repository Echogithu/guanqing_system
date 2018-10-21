import { Form, Input,Row, Col, DatePicker, TimePicker,Upload,Button,Icon, Select, Cascader, InputNumber,Radio,} from 'antd';

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const { RangePicker } = DatePicker
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};


@Form.create()
class Setting extends React.Component{
  render (){
    const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    }

    return(
      <Row  type="flex" justify="center">
        <Col  span={12} >
        <Form
        style={{"background":"#fff","padding":20,"boxShadow":"1px 1px 15px #a5a5a5"}}
        >
          <FormItem
            {...formItemLayout}
            label="旧密码"
            required
          >
            <Input placeholder="请输入旧密码" id="oldpassword" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="新密码"
            required
          >
            <Input placeholder="请输入新密码" id="newpassword" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="新密码确认"
            required
          >
            <Input placeholder="请输入新密码确认" id="confirmpassword" />
          </FormItem>

          <FormItem
            wrapperCol={{ span:12,offset: 6}}
          >
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>

        </Form>
      </Col>
    </Row>

    )
  }
};
export default Setting
