import React, { Component } from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
 
import '../App.css';
class Products extends Component{
    render() {
            const {posts} = this.props
            const post = posts.length ? (
              posts.map(myPosts => {
               return (
                <div className="generalBox col-sm ml-1 bg-light rounded " key={myPosts.id} >
                <img className="card-img-top h-50 mt-2" src={myPosts.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{myPosts.title}</h5>
                    <p className="card-text">{myPosts.body}</p>
                 
                    <Link to={'/'+myPosts.id} className="btn btn-primary">Go Somewhere</Link>
                </div>
                </div>
               )
              })

            ) : (<div className="alert alert-danger">Herhangi bir veri bulunamadı.</div>)
  
    return (
        <div className="container productsContainer"  >
            <div className="generalHeader" id="products">
                <h5>Products</h5>
                <hr className="line" />
                <p>Lorem ipsum lorean fload.</p>
            </div>

            <div className="products col-md-12 d-flex justify-content-center flex-sm-column">
             <div className="row center w-100 ">
                {post}
             </div>
            </div>
        </div>

    )
}
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Products);