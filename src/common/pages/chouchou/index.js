/**
 * Created by hao.cheng on 2017/5/6.
 */
import React from 'react';
import {Table, Switch, Radio, Form,DatePicker,Select ,Modal } from 'antd';
import {observer,inject} from 'mobx-react';
// import astore from '../../mobx/index.js'
const { MonthPicker, RangePicker } = DatePicker;
const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const FormItem = Form.Item;

// const aaaa = new astore();

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };


class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {
              tt :'aaa'
        }
    }
    // abc = this.props.tfn
    componentWillMount(){
        // console.log(this.props.Astore);

    }
    componentWillReceiveProps(nextProps) {//父级改变props之后 的第一步,state改变不会产生这步
        console.log(nextProps);
         this.setState({ tt: nextProps.conOne});
          alert("componentWillReceiveProps");

    }
    shouldComponentUpdate() {//父级改变props之后 的第二步,可以改为false,让子组件不进行更新,当页面不会随着props变化页面布局的时候
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }
     componentWillUpdate() {//父级改变props之后 的第三步
        alert("componentWillUpdate");
        // console.log(aaaa.tolist)
    }
   componentDidUpdate() {//父级改变props之后 的第三步之后 会先进入子组件的render,之后到该步
        alert("componentDidUpdate");
    }
    state = {
        tt :this.props.tname + this.props.tlname
    }
    render(){
        const a = this.props.tfn
        return (
            <h2 onClick={this.props.onRemover}>{a}</h2>
            )
    }
}

@inject("store") @observer 
class Demo extends React.Component {
    constructor(){
        super();
        this.state = {
    bordered: true,
    loading: false,
    pagination: true,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    data:[],
    Slite:[{value:1},{value:2}],
    visible: false,
    conOne:'aa'
  }
    }
  // state = {
  //   bordered: false,
  //   loading: false,
  //   pagination: true,
  //   size: 'default',
  //   expandedRowRender,
  //   // title,
  //   showHeader,
  //   footer,
  //   rowSelection: {},
  //   scroll: undefined,
  //   data:[]
  // }

//THUNK和saga对比
// export const detailFetch = link =>
//   dispatch => {
//       dispatch({type: LOADING_ON})
//       fetch(`${baseUrl}/api/detail/${link}`)
//       .then(res => res.json())
//       .then(json => {
//           dispatch({
//             type: DETAIL_FETCH,
//             data: json
//           })
//           dispatch({type: LOADING_OFF})
//         }
//       )
//   }
// function* authorize(link) {
//   try {
//     const data = yield call(Api.authorize, link)
//     yield put({type: 'DETAIL_FETCH',data});
//     yield put({type: 'LOADING_OFF'});
//   } catch(error) {
//     yield put({type: 'LOADING_ERROR', error})
//   }
// }

// function* detailFetch(){
//   const {link} = yield take('GETDETAIL');
//     yield put({type: 'LOADING_ON'})
//     yield fork(authorize,link);
//      yield take('LOADING_ERROR');
//      yield call(Api.clear)

// }

componentWillMount(){
    let data = [{value:1,text:'a'},{value:2,text:'b'}]
this.setState({data})
}

componentDidMount(){
   console.log(this.props);

}
  handleToggle = (prop) => {
    return (enable) => {
      this.setState({ [prop]: enable });
    };
  }

  handleSizeChange = (e) => {
    let a = 'conOne'//可能通过某种操作之后获取到的
    let conOne = '123'
    // this.setState({ size: e.target.value });
    this.setState({
       [a]:conOne//字面量定义对象
    });
    // console.log(this.state)

  }

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  }

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  }

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  }

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  }

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  }

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  }
  conOne=()=>{
    console.log('one')
  }
    onChange=(date, dateString)=> {

      console.log(date, dateString);
    }
    handleChange=(value)=> {
      console.log(`selected ${value}`);
    }
    showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const state = this.state;
    const options = state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <span onClick={this.showModal}>{text}</span>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
     　<a >编辑</a>
        　　<a >删除</a>
    </span>
  ),
}];
    return (
      <div>
        <Title tname={state.title()} tlname={state.title()} tfn={state.conOne} onRemover={this.conOne}/>
        <div className="components-table-demo-control-bar">
          <Form layout="inline">
            <FormItem label="Bordered">
              <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
            </FormItem>
            <FormItem label="loading">
              <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
            </FormItem>
            <FormItem label="Pagination">
              <Switch checked={state.pagination} onChange={this.handleToggle('pagination')} />
            </FormItem>
            <FormItem label="Title">
              <Switch checked={!!state.title} onChange={this.handleTitleChange} />
            </FormItem>
            <FormItem label="Column Header">
              <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
            </FormItem>
            <FormItem label="Footer">
              <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
            </FormItem>
            <FormItem label="Expandable">
              <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
            </FormItem>
            <FormItem label="Checkbox">
              <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
            </FormItem>
            <FormItem label="Fixed Header">
              <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
            </FormItem>
            <FormItem label="Size">
              <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="middle">Middle</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </FormItem>
          </Form>
        </div>
         <div>
    <DatePicker onChange={this.onChange} />
     <MonthPicker onChange={this.onChange} placeholder="Select month" />
      <RangePicker onChange={this.onChange} />
        <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
     {options}
    </Select>
  </div>
  <div>
      {this.state.Slite.map((item,index)=><li key={index}>{item.value}</li>)}
  </div>
        <Table {...this.state} columns={columns} dataSource={data} />
        <div>
              <Modal
          title="Basic Modal"
          visible={state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </div>
      </div>
    );
  }
}
export default Demo