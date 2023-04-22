import React, { useState } from "react";
import { Card, Col, Row } from "antd";

interface CardProps {
    title: string;
    description: string;
    cover: string;
}

interface WaterfallProps {
    cards: CardProps[];
}

const Waterfall: React.FC<WaterfallProps> = ({ cards }) => {
    const [cardColumns, setCardColumns] = useState<CardProps[][]>([[], [], []]);

    const renderCards = (cardList: CardProps[]) => {
        return (
            <Row gutter={16}>
                {cardList.map((card: CardProps) => {
                    return (
                        <Col span={8}>
                            <Card
                                style={{height:60}}
                                hoverable
                                cover={<img alt={card.title} src={card.cover} />}
                            >
                                <Card.Meta title={card.title} description={card.description} />
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        );
    };

    const calculateHeight = () => {
        const cardContainer = document.getElementById("card-container");
        const cardWidth = 300;
        let columnsHeight = [0, 0, 0];

        if (cardContainer) {
            const { offsetWidth } = cardContainer;
            const columnCount = Math.floor(offsetWidth / cardWidth);

            const newCardColumns = Array.from({ length: columnCount }, () => []);

            cards.forEach((card) => {
                const minHeightIndex = columnsHeight.indexOf(Math.min(...columnsHeight));
                newCardColumns[minHeightIndex].push(card);
                columnsHeight[minHeightIndex] += cardWidth * (2 / 3);
            });

            setCardColumns(newCardColumns);
        }
    };

    React.useEffect(() => {
        calculateHeight();
        window.addEventListener("resize", calculateHeight);

        return () => {
            window.removeEventListener("resize", calculateHeight);
        };
    }, []);

    return (
        <div id="card-container">
            {cardColumns.map((cardList: CardProps[]) => {
                return renderCards(cardList);
            })}
        </div>
    );
};

export default Waterfall;
