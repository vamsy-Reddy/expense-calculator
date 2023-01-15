const Card = (props) => {
    const classes = "card " + props.className;
    return (
        <div className={classes}>{props.children}</div>
        // the value of children will always be the content between opening and closing tag of your custom component
    )
}

export default Card;