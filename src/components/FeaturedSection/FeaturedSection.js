import { Article } from "./Article";
import { FeaturedItems } from "./FeaturedItems";
const [mediaSrc, text,title ] = [
"./images/information-main.jpg",
`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
${<p>
    <strong>Emanual, sr Strategist at Hiring.com</strong>
    </p>}`,


"It doesn't hurt to keep practicing"
]

const items = [
    {
      title: "Orientation Date",
      text: "Tue 10/11 & Wed 10/12: 8am - 3pm",
      src: "./images/information-orientation.jpg",
      url: "#",
    },
    {
      title: "Our Campus",
      text: "Find which campus is close by you",
      src: "./images/information-campus.jpg",
      url: "#",
    },
    {
      title: "Our Guest Lecture",
      text: "Join a keynote with Oliver Sack about music in medical treatment",
      src: "./images/information-guest-lecture.jpg",
      url: "#",
    },
  ];
export function FeaturedSection () {
    return (
        <section>
            <div className="container">
            <Article title={title} mediaSrc={mediaSrc} text={text}/>
            <FeaturedItems items={items}/>
            </div>
        
        </section>
    )
}