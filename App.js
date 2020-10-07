import React from 'react';
import HomeStack from "./stacks/HomeStack";
import {SessionProvider} from "./context/SessionProvider";

//export default Root;

class App extends React.Component
{
    render() {
        return (
            <SessionProvider>
                <HomeStack />
            </SessionProvider>
        )
    }
}

export default App;
