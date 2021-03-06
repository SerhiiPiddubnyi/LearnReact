import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addMainPhoto, getStatus, getUserProfile, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId)
            this.refreshProfile();
    }

    render() {
        return <Profile {...this.props}
                        isOwner = {!this.props.match.params.userId}
                        userProfile={this.props.userProfile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        addMainPhoto = {this.props.addMainPhoto}
        />
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addMainPhoto, saveProfile}),
    withRouter,
)(ProfileContainer)
