import React from "react";
import ReactDOM from "react-dom";
import ButtonList from "./components/ButtonList/ButtonList.jsx";
import FormGroup from "./components/FormGroup/FormGroup.jsx";
import uuid from 'uuid';

var btns=[
    {text:"保存",id:"btn1"},
    {text:"提交",id:"btn2"}
];

ReactDOM.render(
    <ButtonList items={btns}/>,
    document.getElementById("buttonListDiv")
);

var items= [
    {header:"申请编号",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"条码",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"客户经理",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"入账机构",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"入账机构",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"入账机构",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"入账机构",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},
    {header:"入账机构",type:"Input",className:"input-normal",placeholder:"Username",id:uuid.v4()},

];
ReactDOM.render(
    <FormGroup items={items}/>,
    document.getElementById("FormDiv")
);

var items2= [
    {header:"渠道类型",type:"Input",className:"input-normal",placeholder:"渠道类型",id:uuid.v4()},
    {header:"商圈号",type:"Input",className:"input-normal",placeholder:"商圈号",id:uuid.v4()},
    {header:"业务品种",type:"Input",className:"input-normal",placeholder:"业务品种",id:uuid.v4()},
];
const form2 = document.createElement('div');
document.body.appendChild(form2);
ReactDOM.render(
    <FormGroup items={items2}/>,
    form2
);