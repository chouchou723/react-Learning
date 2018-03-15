import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from 'images/minren.jpg';
import b2 from 'images/zuozu.jpg';
import b3 from 'images/xiaoying.jpg';
import b4 from 'images/chutian.jpg';
import './index.less'
// const FormItem = Form.Item;
 
 const Greeting = () => <div>Hi there!</div>;
 class index extends React.Component {
    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     let n = this.props.form.getFieldsValue().username;
    //     let p = this.props.form.getFieldsValue().password;
    //     if (n === '123' && p === '123') {
    //         // 表单的路由处理
    //         history.push('/index');
    //     } else {
    //         this.openNotificationWithIcon('info');
    //     }
    // }

    // 返回一个弹框对象，提示用户名和密码
    // openNotificationWithIcon = (type) => {
    //     return notification[type]({
    //              message: '用户名&密码',
    //              description: '都是：123',
    //              duration: 6,
    //              icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    //            })
    // }

    componentDidMount() {
        console.log(this.props)
        // this.openNotificationWithIcon('info');
    }

    render() {

         // const { getFieldDecorator } = this.props.form;
    //      const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 6 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 18 },
    //   },
    // };
        return (
            <div>
             <Greeting />
                <Row gutter={10}>
                    <Col span={4}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">云数据</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="cloud-box">
                            <Card className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>建站日志</h3>
                                    <small>2个待完成，1个正在进行中</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <Timeline>
                                    <Timeline.Item color="#108ee9">
                                        <p>更多模块开发中</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>使用ts重构(正在开发)</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green">引人Redux,Fetch</Timeline.Item>
                                    <Timeline.Item color="green">引人Less,React-Router(4.x)</Timeline.Item>
                                    <Timeline.Item color="green">初始化项目</Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>消息栏</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">鸣人</a>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b2} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">佐助</a>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b3} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">小樱</a>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b4} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">雏田</a>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                    
                </Row>
            </div>
        )
    }
}
export default index;
