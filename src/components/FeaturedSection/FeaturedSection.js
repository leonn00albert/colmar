import { Article } from "./Article";
import { FeaturedItems } from "./FeaturedItems";

export function FeaturedSection () {
    return (
        <section>
            <div className="container">
            <Article />
            <FeaturedItems />
            </div>
         

        </section>
    )
}