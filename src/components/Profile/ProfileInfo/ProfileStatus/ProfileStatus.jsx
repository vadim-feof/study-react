import React, {Component} from 'react';
import styles from './ProfileStatus.module.css'

class ProfileStatus extends Component {
    state = {
        editMode: false,
        statusText: ''
    }

    componentDidMount() {
        this.setState({
            statusText: this.props.statusText
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (statusText) => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.statusText)
    }

    changeStatusText = (text) => {
        this.setState({
            statusText: text
        })
    }

    render() {
        return (
            <div>
                Status:
                <div>
                    {this.state.editMode ?
                        <input value={this.state.statusText}
                               onBlur={() => this.deactivateEditMode()}
                               autoFocus={true}
                               onChange={ event => this.changeStatusText(event.target.value)}
                        />:
                        <span onDoubleClick={() => this.activateEditMode()}>{this.props.statusText}</span>
                    }
                </div>
            </div>
        );
    }
}

export default ProfileStatus;