import { useState } from "react";
import UserContext from "./UserContext";
import PropTypes from "prop-types"; // Import PropTypes

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// Add prop validation for children
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default UserContextProvider;