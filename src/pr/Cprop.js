import React from "react";
export default class Cprop extends React.Component
{
    render(){
        return (
        <>
        <h1>{this.props.data}</h1>
        <h1>{this.props.text.name}</h1>
        </>
        )
    }
}