import { Component } from 'react'
import './profile.css'

class Userprofilecard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="profile_card">
                <div className="profile-card-img">
                   <img src={this.props.image} alt="" />
                </div>

                <div className="profile-card-contact">
                   <h4 className="profile_name">{this.props.name}</h4> 
                    <div>
                        <h6 className="profile_age">{this.props.age}</h6>
                        <p className="profile_gender">{this.props.gender}</p>
                        <p className="profile_contact">{this.props.contact}</p>
                        <p className="profile_contact">{this.props.course}</p>
                        <div className="profile_email">
                            <p>{this.props.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Userprofilecard;