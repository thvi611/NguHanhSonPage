import React, { Component } from 'react'
import './PostDetail.css'

export default class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            post: null,
            comments: [],
        };
        this.addComment = {
            name: '',
            content: '',
            post_id: 1,
            image: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    componentDidMount() {
        fetch("http://localhost:80/api/post/1")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                post: json,
                comments: json.comments,
            });
        })
    }

    renderPost(post) {
        if (post != null)
            return(
                <div id="content">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    handleClick() {
        fetch('http://localhost:8080/api/comment', {
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(this.addComment)
        })
    }
    
    render() {
        const Comments = this.state.comments.map((comment) => {
            return (
                <div className="cmt">
                    <div className="nd">
                        <p className="name d-flex justify-content-start">{comment.name}</p>
                        <p className="cmt-content d-flex justify-content-start">{comment.content}</p>
                    </div>
                </div>
            );
        });

        return (
            <div id="main">
                <div id="post">
                    <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Nui-Ngu-Hanh-Son.png" alt=''/>
                    {this.renderPost(this.state.post)}
                </div>
                <div id="comment">
                    <div id="cmt-box" className='container-fluid'>
                        <form style={{paddingTop: 30}}>
                                <div className="row">
                                    <div className="form-group col-9">
                                        <label className='d-flex justify-content-start'>Họ và tên</label>
                                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange}></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary col-3" style={{height: 38, marginTop:24, width:160.5}}>Đăng nhập Google</button>
                                </div>
                                <div className="form-group mt-2">
                                    <label className='d-flex justify-content-start'>Nội dung</label>
                                    <textarea className="form-control" rows="3" value={this.addComment.content}></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary d-flex justify-content-start" style={{marginTop: 10}} onClick={this.handleClick}>Gửi</button>
                        </form>
                    </div>
                    <div id="cmt-box" className='container-fluid d-flex flex-column align-items-start'>
                        {Comments}
                    </div>
                </div>
            </div>
        )
    }
}