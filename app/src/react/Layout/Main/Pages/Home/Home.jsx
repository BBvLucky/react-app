import React, { PureComponent } from "react";
import "../../../../../style.scss";

class Home extends PureComponent {
    render() {
        return(
            <div className="main-home">
                <h3 className="main-home-caption">Welcome</h3>
                <p className="main-home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure voluptas eos voluptatibus rem error architecto distinctio natus quis repudiandae et ex provident saepe excepturi asperiores eligendi aliquid, mollitia neque.</p>
            </div>
        )
    }
}

export default Home;