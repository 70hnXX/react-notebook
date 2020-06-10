import React,{Component,Fragment} from 'react'

class DataBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '添加内容',
            contentList: []
        }
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button>添加内容</button>
                </div>
                <ul>
                    <li>内容1</li>
                    <li>内容2</li>
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default DataBind