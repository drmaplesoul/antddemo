/**
 * Created by Administrator on 2017/6/22 0022.
 */

import React,{PropTypes} from "react";
import { Form ,Input,Icon} from 'antd';
import { Row, Col } from 'antd';
import styles from "./style.scss";
import FormField from "../FormField/FormField";

const FormItem = Form.Item;

function FormGroup({items}){
    /*<Input className={item.className} prefix={<Icon type="user" style={{ fontSize: 13}} />} placeholder={item.placeholder}/>*/
    let formItems = items.map(item=>(
        <FormField item={item}/>
    ));
    return (
        <div className="formcontainer">
            <Form>
                <Row>
                    {formItems}
                </Row>
            </Form>
        </div>
    );
}
export default FormGroup;