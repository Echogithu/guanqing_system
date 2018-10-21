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
class Release extends React.Component{
  render (){
    const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    }

    return(
      <Row  type="flex" justify="center">
        <Col  span={12}>
        <Form
        style={{"background":"#fff","padding":20,"boxShadow":"1px 1px 15px #a5a5a5"}}
        >
          <FormItem
            {...formItemLayout}
            label="标题"
            required
          >
            <Input placeholder="title" id="title" />
          </FormItem>

          <FormItem
             {...formItemLayout}
             label="时间"
           >
             {getFieldDecorator('range-time-picker', rangeConfig)(
               <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
             )}
           </FormItem>

           <FormItem
              {...formItemLayout}
              label="校区"
              required
            >
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
            label="地点"
            required
          >
            <Input placeholder="place" id="place" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="嘉宾"
            required
          >
            <Input placeholder="guest" id="guest" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="海报"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </FormItem>

          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>

        </Form>
      </Col>
    </Row>

    )
  }
};
export default Release
