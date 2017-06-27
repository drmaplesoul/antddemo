/**
 * Created by Administrator on 2017/6/18 0018.
 */


class HelloWorld extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="container">
            <h1>
                Hello! React World!
            </h1>
        </div>
    }
}
module.exports = HelloWorld;

const app = document.createElement("div");
document.body.appendChild(app);
ReactDOM.render(<HelloWorld/>,app);