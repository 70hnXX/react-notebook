import React,{Component} from 'react'

class CreateElementDemo extends Component {
    render() {
        return (
            // 第一种
            <ul className="list">
                <li>hello</li>
                <li>world</li>
            </ul>
        )
        // 第二种
        var child1 = React.createElement('li',null,'hello')
        var child2 = React.createElement('li',null,'world')
        var root = React.createElement('ul',{className:'list'},child1,child2)
    }
}
export default CreateElementDemo