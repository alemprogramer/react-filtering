import React, {Component} from 'react'

export class Item extends Component {
    render() {
        const {text, title, icon, requires} = this.props;

        let name = `item`;
        if (requires) {
            if (requires === 2) {
                name = `item requ`;

            } else if (requires === 1) {
                name = `item optional`;

            }
        }

        return (
            <div className={name}>
                <div className="heading">
                    <div className="image float-left">
                        <img src={icon} className="img-fluid" alt="user.png"/>
                    </div>

                    <div className="title">
                        <h5>{title} {requires}
                        </h5>
                    </div>
                </div>
                <div className="content">
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default Item
