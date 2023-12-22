const Card = (props) => {
    const options = {
        'EVENTS': `Events description goes here.....`,
        'COMMUNITY': `Community description goes here.....`,
        'MVP': `MVP description goes here.....`,
        'RESOURCE': `Resource description goes here.....`,
    };
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{options[props.name]}</p>
        </div>
    );
}
export default Card;