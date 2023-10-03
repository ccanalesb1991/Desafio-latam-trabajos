import Badge from "react-bootstrap/Badge";

const Tags = ({ badgeText, badgeBg }) => {
    return <Badge bg={badgeBg}>{badgeText}</Badge>;
};

export default Tags;
