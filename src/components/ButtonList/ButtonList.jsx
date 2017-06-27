/**
 * Created by Administrator on 2017/6/18 0018.
 */
import React,{PropTypes} from "react";
import { Button,Col,Row } from 'antd';
import styles from "./style.scss";

function ButtonList({items}){
    items = items.map(item =>(
        <Col span="3" key={item.id}>
            <Button type="primary">
                {item.text}
            </Button>
        </Col>
    ));

    return (
        <div className="ButtonList">
            <Row>
                {items}
             </Row>
        </div>
    );
}
export default ButtonList;