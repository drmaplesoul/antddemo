/**
 * Created by Administrator on 2017/6/22 0022.
 */

import React,{PropTypes} from "react";
import { Form ,Input,Icon} from 'antd';
import { Row, Col } from 'antd';
import styles from "./style.scss";

const FormItem = Form.Item;

function FormField({item}){
    /*<Input className={item.className} prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder={item.placeholder}/>*/

    return (
        <Col span={8} key={item.id}>
            <FormItem label="Hello">
                <Input className={item.className} prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder={item.placeholder}/>
            </FormItem>
        </Col>
    );
}
export default FormField;