export function Card ({
    imgSrc,
    title,
    text,
    key
}) {
    return (
        <div className="card" key={key}>
        <img src={imgSrc} alt={title}/>
        <h3>
            {title}
        </h3>
        <p>COURSES</p>
        <p>{text}</p>
    </div>
    )

}