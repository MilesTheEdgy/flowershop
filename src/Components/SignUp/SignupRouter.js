import React from "react";
import { connect } from "react-redux";
import SignedUp from "./SignedUp"
import SignUp from "./SignUp"

const SignupRouter = () => {
        return (
            <>
                <SignedUp/>
                <SignUp/>
            </>
        )
};

const mapStateToProps = (state) => {
    return {
        didUserSignUp: state.didUserSignUp
    }
};

export default connect(mapStateToProps)(SignupRouter);