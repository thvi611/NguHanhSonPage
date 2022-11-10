import React, { Component } from 'react'
import './CreatePost.css'

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortByDate :true
        }
    }
    
    render() {
        return (
            <div class="testbox">
                <form action="/">
                    <div class="item">
                        <label for="banner">Banner<span>*</span></label>
                    </div>
                    <div class="banner">
                        <button class="plus-button plus-button--large"></button>
                    </div>
                    <div class="item">
                        <label for="title">Title<span>*</span></label>
                        <input id="title" type="text" name="title" required/>
                    </div>
                    <div class="item">
                        <label for="content">Content<span>*</span></label>
                        <textarea rows="10"></textarea>
                    </div>
                    <div class="item">
                        <label for="title">Title<span>*</span></label>
                        <select required>
                            <option value="guide">Guide</option>
                            <option value="history">History</option>
                            <option value="culture">Culture</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="picture">Upload Picture</label>
                        <input id="picture" type="file" multiple/>
                    </div>
                    <div class="item">
                        <label for="video">Upload Picture</label>
                        <input  id="video" type="file" multiple/>
                    </div>
                    <div class="btn-block">
                        <button type="submit" href="/">SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}