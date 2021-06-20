import { Card } from "./Card"

export function LearningSection() {
    const cards = [
        {title: 'Software Engineering',
        imgSrc: './images/course-software.jpg',
        text: 'Web Development, Mobile Development, IOT, APIs'
        },
        {title: 'Computer Art',
        imgSrc: './images/course-computer-art.jpg',
        text: 'Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation'
        },
        {title: 'Design',
        imgSrc: './images/course-design.jpg',
        text: 'User Experience Design, User Research, Visual Design '
        },
        {title: 'Data',
        imgSrc: './images/course-data.jpg',
        text: 'Data Science, Big Data, SQL, Data Visualization'
        },

        {title: 'Business',
        imgSrc: './images/course-business.jpg',
        text: 'Product Development, Business Development, Startup'
        },
        {title: 'Marketing',
        imgSrc: './images/course-marketing.jpg',
        text: 'Analytics, Content Marketing, Mobile Marketing'
        },
    ]
    return (
        <section>
            <h2>Start Learning</h2>
            <div className="cards-section">
                
                {cards.map(card => {
                    return <Card key={card.title} imgSrc={card.imgSrc} title={card.title} text={card.text} />
                })}
            
            </div>
            
        </section>
    )
}