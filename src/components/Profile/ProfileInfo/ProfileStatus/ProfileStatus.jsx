import React, {Component} from 'react';
import styles from './ProfileStatus.module.css'

class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    toggleEditMode = (toggle) => {
        this.setState({
            editMode: toggle
        })
    }
    render() {
        return (
            <div>
                Status:
                <div>
                    {this.state.editMode ?
                        <input value={this.props.statusText}
                               onBlur={() => this.toggleEditMode(false)}
                               autoFocus={true}
                               onChange={ event => this.props.updateStatusText(event.target.value)}
                        />:
                        <span onDoubleClick={() => this.toggleEditMode(true)}>{this.props.statusText}</span>
                    }
                </div>
            </div>
        );
    }
}

export default ProfileStatus;