import React from "react";
import ReactDOM from "react-dom";
import { Form, Row, Col, Input, Button, Icon} from 'antd';

const FormItem = Form.Item;

function AntdForm({item}){
    /*<Input className={item.className} prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder={item.placeholder}/>*/
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
    };
    return (
        <Form>
            <Col span={8}>
                <FormItem label="Hello" {...formItemLayout}>
                    <Input className="input-normal" prefix={<Icon type="user" style={{ fontSize: 13}} />}/>
                </FormItem>
            </Col>
            <Col span={8}>
                <FormItem label="Hello" {...formItemLayout}>
                    <Input className="input-normal" prefix={<Icon type="user" style={{ fontSize: 13}} />}/>
                </FormItem>
            </Col>
            <Col span={8}>
                <FormItem label="Hello" {...formItemLayout}>
                    <Input className="input-normal" prefix={<Icon type="user" style={{ fontSize: 13}} />}/>
                </FormItem>
            </Col>
        </Form>
    );
}
ReactDOM.render(
    <AntdForm/>,document.getElementById("formcontainer")
);