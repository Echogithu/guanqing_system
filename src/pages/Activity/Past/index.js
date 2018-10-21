import { List, Avatar, Row, Col} from 'antd';
import axios from 'axios';
// const data = [
//   {
//     title: '讲座回顾 | “三体不应是昙花一现”',
//     description:"2018年4月19日晚，《莞工青年论坛》第122期讲座如期在东莞理工学院松山湖校区学术交流中心报告厅举行。本次讲座我们有幸邀请到吴岩老师为我们讲述《三体》背后隐藏的故事。",
//     img:"http://gmw.dgut.edu.cn/attachment/1804/thread/7_9_9172a1a6765ea13.bmp",
//     href:'http://gmw.dgut.edu.cn/read.php?fid=7&tid=2066',
//   },
//   {
//     title: 'Ant Design Title 2',
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];


class Past extends React.Component {
  constructor() {
    super();
    this.state ={
      error: null,
      isLoaded: false,
      dataSource:[],
    }
  }


  componentDidMount() {
    axios.get("http://mock-api.com/JVKy96Kw.mock/history/lecture").then(
      response => this.setState({
        isLoaded: true,
        dataSource:response.data,
      })
    ).catch(
      error => this.setState({
        isLoaded: true,
        error
      })
    )
  }

  render (){
    const { error, isLoaded,dataSource} = this.state;
    return (
      <div>
        <Row  type="flex" justify="center">
          <Col  span={18}>
          <List
            itemLayout="horizontal"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={dataSource}
            renderItem={item => (
              <List.Item
              style={{
                "background":"#fff",
                "paddingLeft":'20px',
                "paddingRight":'20px',
              }}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      size="large"
                      style={{"marginTop":"10px"}}
                      src={item.img}
                    />
                  }
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
          </Col>
        </Row>
      </div>
    )
    }
}

export default Past
