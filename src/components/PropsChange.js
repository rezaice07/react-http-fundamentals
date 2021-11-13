import React, { Component } from 'react'

class PropsChange extends Component {

    state={
        changedCartItems:0
    }
    componentDidMount=()=>{
        console.log(`Props changed`)
    }

    static getDerivedStateFromProps=(props,state)=>{   
        console.log('getDerivedStateFromProps')     
        console.log(props.count)
        return {
            changedCartItems:props.count??0         
          };
    }

    render() {     

        return (
            <div>
                Changed Cart Items {this.state.changedCartItems}
            </div>
        )
    }
}

export default PropsChange
