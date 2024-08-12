import React, { Component } from "react";
import './Home.css';  // Import the CSS file

class Home extends Component {
    state = {
        productContainer: [], // Store products in state
    }

    add = (e) => {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page
        const productName = document.getElementById("name").value;
        const productType = document.getElementById("type").value;
        const productPrice = document.getElementById("price").value;
        const productCount = document.getElementById("count").value;

        let productContainer = [...this.state.productContainer];

        const product = {
            name: productName,
            type: productType,
            price: productPrice,
            count: productCount,
        };

        if (product.count > 0) {
            for (let j = 0; j < product.count; j++) {
                productContainer.push(product);
            }
        } else {
            productContainer.push(product);
        }

        this.setState({ productContainer }); // Update state with the new product list
    }

    render() {
        return (
            <div className="container">
                <form action="" className="row ">
                    <input type="text" id="name" placeholder="enter name" className="m-2" />
                    <input type="text" id="type" placeholder="enter type" className="m-2" />
                    <input type="number" id="price" placeholder="enter price" className="m-2" />
                    <input type="number" id="count" placeholder="enter count" className="m-2" />
                    <button className="btn btn-primary" onClick={this.add}>Submit</button>
                </form>
                <div className="row mt-5">
                    {this.state.productContainer.map((product, index) => (
                        <div className="col-lg-4 card" key={index}>
                            <h1> Name: {product.name}</h1>
                            <h2> TYPE: {product.type}</h2>
                            <h3> Price: {product.price}</h3>
                            <h3> Count: {product.count}</h3>
                            <button className="btn w-100 btn-danger mt-2" onClick={() => this.delete(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
