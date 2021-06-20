import { Article } from "../FeaturedSection/Article";
import { FeaturedItems } from "../FeaturedSection/FeaturedItems";

export function ThesisSection () {

    const [title, text, mediaSrc] = ['Reimagine Urban',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     './videos/thesis.mp4'
    ];
    const items = [
        {
          title: "Fisma, Design and Prototype",
          text: "Designer showcase of a new prototpye product",
          src: "./images/thesis-fisma.jpg",
          url: "#",
        },
        {
          title: "Now and then",
          text: "Research study about New York",
          src: "./images/thesis-now-and-then.jpg",
          url: "#",
        },

      ];

    return (
        <section>
            <div className="container">
            <Article mediaSrc={mediaSrc} title={title} text={text} />
            <FeaturedItems items={items}/>
            </div>
         

        </section>
    )
}