import Card from "react-bootstrap/Card";
import "./MyCard.css";
import Tags from "./Tags";

const MyCard = ({
    id,
    cardTitle,
    cardDescription,
    imgUrl,
    badgeText,
    badgeBg,
}) => {
    return (
        <Card id={id}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardDescription}</Card.Text>
                <Tags badgeText={badgeText} badgeBg={badgeBg} />
            </Card.Body>
        </Card>
    );
};

export default MyCard;
