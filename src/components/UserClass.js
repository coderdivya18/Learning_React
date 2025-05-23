import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Divya Dube",
                location: "Default",
                email: "divya@gmail.com",
                avatar_url: "https://via.placeholder.com/150", // fallback dummy pic
                login: "userlogin"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/coderdivya18");
        const json = await data.json();
        console.log(json);

        this.setState({userInfo: json});
    }

    render() {
        const {name, location, login, avatar_url} = this.state.userInfo;

        return (
            <div
                className="user-card max-w-sm bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 font-manrope">
                <h2 className="user-title text-2xl font-semibold">User Info</h2>
                <img
                    className="user-avatar rounded-full w-32 h-32 object-cover"
                    src={avatar_url || "https://via.placeholder.com/150"}
                    alt="User Avatar"
                />
                <h2 className="text-xl font-medium">Name: {name}</h2>
                <h3 className="text-lg text-gray-600">Location: {location || "N/A"}</h3>
                <h4 className="text-base text-gray-500">Email: {login ? `${login}@gmail.com` : "N/A"}</h4>
            </div>
        );
    }
}

export default UserClass;
