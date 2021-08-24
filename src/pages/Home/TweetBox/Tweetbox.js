import React, { Component } from "react";
import "./Tweetbox.scss";
import profilepic from "../../../assets/images/icons/UserProfile.png";
import Camera from "../../../assets/images/icons/Camera.svg";
import Video from "../../../assets/images/icons/Video.svg";
import Doc from "../../../assets/images/icons/Doc.svg"
import Card from "../../../components/Card/Card"
//import Anyone from "../../../assets/images/icons/Anyone.svg"

class Tweetbox extends Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false }
      }
    render() {
        return (
            <div className="Tweetbox">
                <div className="profile-pic">
                    <img src={profilepic} alt="profilepicture" ></img>
                </div>
                <div className="input-text-field">
                    <input type="text" className="text-field" onClick={() => this.openModal()} placeholder="Add a post" />
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h3>Create a post</h3>
                    <hr></hr>
                    <div className="poster">
                    <img src={profilepic} alt="profilepicture" ></img>
                    <div className="post-view">
                    <a href="./">David J</a>
                    <select id="post-viewers" name="post-viewers">
                        <option value="Anyone">Anyone </option>
                        <option value="Connections">Connections</option>
                        <option value="Selected">Selected</option>
                    </select>
                    
                    </div>
                    </div>
                     <Card>
                     <input type="text"></input>
                     </Card>
                     <div className="modal-bottom">
                     <div class="media-input">
                     <img src={Camera} alt="Camera"></img>
                    <img src={Video} alt="Video"></img>
                    <img src={Doc} alt="Document"></img>
                     </div>
                     <Card>
                     <button type="button">Post</button>
                     </Card>
                    </div>
                    </Modal>
                    <div className="input-video">
                    <img src={Camera} alt="Camera"></img>
                    <img src={Video} alt="Video"></img>
                    </div>
                </div>
            </div>
        )
    }
    
    openModal() {
        this.setState({ isModalOpen: true })
      }
  
      closeModal() {
        this.setState({ isModalOpen: false })
      }
    }
  
    class Modal extends React.Component {
      render() {
        if (this.props.isOpen === false)
          return null
  
        return (
          <div>
            <div className="modal">
              {this.props.children}
            </div>
            <div className="bg" onClick={e => this.close(e)}/>
          </div>
        )
      }
  
      close(e) {
        e.preventDefault()
  
        if (this.props.onClose) {
          this.props.onClose()
        }
      }
}
export default Tweetbox;