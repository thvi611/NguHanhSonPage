import React, { Component } from 'react'
import './PostDetail.css'

export default class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortByDate :true
        }
    }
    
    render() {
        return (
            <div id="main">
                <div id="post">
                    <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Nui-Ngu-Hanh-Son.png" alt=''/>
                    <div id="content">
                        <h3>DU LICH NGU HANH SON</h3>
                        <p>Hien nay du lich Ngu Hanh SOn la mot trong nhung hoat dong pho bien....</p>
                    </div>
                </div>
                <div id="comment">
                    <div id="cmt-box" className='container-fluid'>
                        <form style={{paddingTop: 30}}>
                                <div className="row">
                                    <div className="form-group col-9">
                                        <label className='d-flex justify-content-start'>Họ và tên</label>
                                        <input type="text" name="name" className="form-control"></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary col-3" style={{height: 38, marginTop:24, width:160.5}}>Đăng nhập Google</button>
                                </div>
                                <div className="form-group mt-2">
                                    <label className='d-flex justify-content-start'>Nội dung</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary d-flex justify-content-start" style={{marginTop: 10}}>Gửi</button>
                        </form>
                    </div>
                    <div id="cmt-box" className='container-fluid d-flex flex-column align-items-start'>
                        <div className="cmt">
                            <div className="nd">
                                <p className="name d-flex justify-content-start">Conan</p>
                                <p className="cmt-content d-flex justify-content-start">Dep vay ta</p>
                            </div>
                        </div>
                        <div className="cmt">
                            <div className="nd">
                                <p className="name d-flex justify-content-start">Tran Van Ne</p>
                                <p className="cmt-content d-flex justify-content-start">Toi thuc su danh gia cao bai viet nay</p>
                            </div>
                        </div>
                        <div className="cmt">
                            <div className="nd">
                                <p className="name d-flex justify-content-start">Luat su</p>
                                <p className="cmt-content d-flex justify-content-start">Xung dang</p>
                            </div>
                        </div>
                        <div className="cmt">
                            <div className="nd">
                                <p className="name d-flex justify-content-start">Conan</p>
                                <p className="cmt-content d-flex justify-content-start">Dep vay ta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}