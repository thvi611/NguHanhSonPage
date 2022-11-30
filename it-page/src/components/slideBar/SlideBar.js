import "./slideBar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default class SlideBar extends React.Component {
    constructor(props) {
        super(props);
        const [posts, setPosts] = useState([]);
        const fetchPosts = async () => {
            axios.get(`http://localhost:8080/api/post`)
                .then(res => {
                    const data = res.data;
                    setPosts(data);
                })
                .catch(error => console.log(error));
        }
        useEffect(() => {
            fetchPosts();
        }, [])
        this.state = {
            activeID: 1,
            wrapperStyle: {
                backgroundImage: `url('${this.posts[0].image_path}')`
            },
            panelStyle: {
                background: '#1ABC9C'
            },
            buttonHover: false,
            buttonStyle: {
                color: '#ffffff'
            }
        };
    }
    _changeActive(id) {
        this.setState({
            activeID: this.posts.id,
            wrapperStyle: {
                backgroundImage: `url('${this.posts[id].image_path}')`
            },
            panelStyle: {
                backgroundColor: '#1ABC9C'
            }
        });
    }
    _buttonColour() {
        if (!this.state.buttonHover) {
            this.setState({
                buttonHover: true,
                buttonStyle: {
                    color: '#1ABC9C'
                }
            });
        } else {
            this.setState({
                buttonHover: false,
                buttonStyle: {
                    color: '#ffffff'
                }
            });
        }
    }
    render() {
        return (
            <section className="wrapper" style={this.state.wrapperStyle}>
                <Selectors
                    data={this.posts}
                    activeID={this.state.activeID}
                    _changeActive={this._changeActive.bind(this)}
                />
                <Panel
                    data={this.posts[this.state.activeID]}
                    panelStyle={this.state.panelStyle}
                    buttonStyle={this.state.buttonStyle}
                    _buttonColour={this._buttonColour.bind(this)}
                />
            </section>
        );
    }
}
class Panel extends React.Component {
    render() {
        return (
            <aside className="panel" style={this.props.panelStyle}>
                <h2 className="panel-header">{this.posts.title}</h2>
                <p className="panel-info">{this.posts.content}</p>
                <button className="panel-button"
                    style={this.props.buttonStyle}
                    onMouseEnter={this.props._buttonColour}
                    onMouseLeave={this.props._buttonColour}>
                    Read More
                </button>
            </aside>
        );
    }
}
class Selectors extends React.Component {
    _handleClick(e) {
        if (this.props.id !== this.props.activeID) {
            this.props._changeActive(this.props.id);
        } else {
            return;
        }
    }
    render() {
        return (
            <div className="selectors">
                {this.props.data.map((item) =>
                    <Selector
                        key={item.id}
                        id={item.id}
                        _handleClick={this._handleClick}
                        _changeActive={this.props._changeActive}
                        activeID={this.props.activeID}
                    />
                )}
            </div>
        );
    }
}
class Selector extends React.Component {
    render() {
        let componentClass = 'selector';
        if (this.props.activeID === this.props.id) {
            componentClass = 'selector active';
        }
        return (
            <div className={componentClass} onClick={this.props._handleClick.bind(this)}></div>
        );
    }
}
