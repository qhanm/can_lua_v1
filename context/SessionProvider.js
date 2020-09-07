import React, { Component } from 'react';
import {PageConstant} from "../utils/Constant";

export const SessionContext = React.createContext();

export class SessionProvider extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            textHeader: 'NHÓM BẢNG TÍNH',
            screenName: PageConstant.ClientScreen,
        }
    }

    setTextHeader = (textHeader) => {
        this.setState({textHeader});
    }

    setScreenName = (screenName) => {
        this.setState({screenName});
    }

    render() {
        return (
            <SessionContext.Provider value={{
                textHeader: this.state.textHeader,
                setTextHeader: this.setTextHeader,
                screenName: this.state.screenName,
                setScreenName: this.setScreenName,
            }}>
                { this.props.children }
            </SessionContext.Provider>
        )
    }
}