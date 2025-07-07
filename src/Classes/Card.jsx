import { Component } from "react";

class Card extends Component {
    /*
        props: Name, ID, Cost, 
    */
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            quantity: 0,
            favourited: false,
        }
    }

    render() {
        return (
            <>
                Placeholder
            </>
        )
    }
}

/*
Card will store the current quantity of the item, the name of the item, the description of the item and the URL for the item's image.
*/