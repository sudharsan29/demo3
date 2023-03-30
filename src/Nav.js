import React from "react"

export default class Nav extends React.Component
{
    componentWillUnmount()
    {
        console.warn("componentWillUnmount");
    }
    
    render()
    {
        return(
        <h3> nav bar</h3>
        )
        
    }
}
