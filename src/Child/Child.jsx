import React, { Component } from "react";
export default class Child extends Component {


    render() {
        let { id, name, type, price, sale, count } = this.props.details



        return (
            <div className="col-lg-4" >
                <div className="card">
                    <h1> Name: {name}</h1>
                    <h2> TYPE: {type}</h2>
                    <h3> Price: {price}</h3>
                    <h3> count: {count}</h3>
                    {sale === "true" ? <p className="bg-danger p-2 position-absolute top-0 end-0">sale</p> : null}
                    <button className="btn w-100 btn-warning mt-2" onClick={() => this.props.update(this.props.productIndex, 1)} >+</button>
                    <button className="btn w-100 btn-warning mt-2" onClick={() => this.props.update(this.props.productIndex, -1)} >-</button>
                    <button className="btn w-100 btn-danger mt-2" onClick={() => this.props.delete(id)}> Delete</button>
                </div>
            </div>
        );
    }
}

