import React, {Component} from 'react';
import Content from './Content'
import {Radio} from 'antd';
import 'antd/dist/antd.css';
import './tab.css';

const tabsArr =[
    {header:"Tab 1",content:"Tab 1 content is showing here"},
    {header:"Tab 2",content:"Tab 2 content is showing here"},
    {header:"Tab 3",content:"Tab 3 content is showing here"}
    ]
class Tab extends Component{
    constructor(props){
        super(props);
        this.state={
            tabSelected: 0,
        }
    }
    onChange = e => {
        alert("You have selected "+tabsArr[e.target.value].header);
        this.setState({
            tabSelected: e.target.value,
        });

    };

    render(){

        return(
            <div>
                <Radio.Group onChange={this.onChange} defaultValue="0" buttonStyle="solid">
                    <Radio.Button value="0">{tabsArr[0].header}</Radio.Button>
                    <Radio.Button value="1">{tabsArr[1].header}</Radio.Button>
                    <Radio.Button value="2">{tabsArr[2].header}</Radio.Button>
                </Radio.Group>

                <Content content ={tabsArr[this.state.tabSelected].content} />
                
                
            </div>
        )
    }
}

export default Tab;