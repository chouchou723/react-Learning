import React from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import createHistory from 'history/createHashHistory';

import './index.less'

const FormItem = Form.Item;
const history = createHistory();

class LoginPage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();

        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if (n === '123' && p === '123') {
            // 表单的路由处理
            history.push('/index');
            localStorage.setItem('login','1')
        } else {
            this.openNotificationWithIcon('info');
        }
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: '用户名&密码',
                 description: '都是：123',
                 duration: 6,
                 icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
               })
    }

    componentDidMount() {
        console.log(this.props)
        this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
         const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>Welcome to the ReactChouSpa</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                           
                            <FormItem  {...formItemLayout} label="用户名">
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                   <Input placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem  {...formItemLayout} label="密码">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;