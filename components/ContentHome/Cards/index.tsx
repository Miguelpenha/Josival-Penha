import { Container, List, Card, TitleCard, TextCard } from './style'
import cards from './cards'

function Cards() {
    return (
        <Container>
            <List>
                {cards.map(card => (
                    <Card>
                        <TitleCard>{card.title}</TitleCard>
                        <TextCard>{card.text}</TextCard>
                    </Card>
                ))}
            </List>
        </Container>
    )
}

export default Cards