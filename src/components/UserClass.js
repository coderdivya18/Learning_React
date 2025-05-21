import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Divya Dube",
                location: "Default",
                email: "divya@gmail.com",
                avatar_url: "dummy pic"
            }
        }
    }

    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         console.log("I am calling again")
    //     }, 1000)
    //
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/coderdivya18")
        const json = await data.json();
        console.log(json);

        this.setState({userInfo: json});


    }

    render() {
        const {name, location, login, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <h2 className="user-title">User Info</h2>
                <img
                    className="user-avatar"
                    src={avatar_url}
                    alt="User Avatar"
                />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Email: {login}@gmail.com</h4>

            </div>
        )
    }
}

export default UserClass