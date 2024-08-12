import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
    state = {
        allproducts: [
            {
                id: 1,
                name: "IPHONE",
                type: "one",
                price: 100,
                sale: "false",
                count: 7
            }
            , {
                id: 2,
                name: "IPHONE x",
                type: "two",
                price: 200,
                sale: "true",
                count: 2
            }
            , {
                id: 3,
                name: "IPHONE 11",
                type: "three",
                price: 300,
                sale: "true",
                count: 5
            }
        ]

    }

    delete = (productID) => {
        //deep copy
        let myProduct = [...this.state.allproducts]
        //update state
        myProduct = myProduct.filter((product) => product.id !== productID)
        //set state
        this.setState({ allproducts: myProduct })

    }
    updadeProduct = (productIndex, step) => {
        let newProduct = [...this.state.allproducts]
        newProduct[productIndex].count += step
        this.setState({ allproducts: newProduct })

    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5">
                        {
                            this.state.allproducts.map((product, index) =>
                                <Child key={index} update={this.updadeProduct} delete={this.delete} details={product} productIndex={index} />

                            )

                        }

                    </div>
                </div>
            </>

        );
    }



}
