export function Article({
    title,
    text,
    mediaSrc
}) {

    if (mediaSrc.charAt(mediaSrc.length-1) === '4') {
        return (
            <article>
            <video controls><source src={mediaSrc}></source></video>
            <div>
                <h2>{title}</h2>
                <p>
                    {text}
                </p>       
            </div>
        </article>
        )
    }
    else {
        return (
            <article>
                <img alt="main" src={mediaSrc} />
                <div>
                    <h2>{title}</h2>
                    <p>
                        {text}
                    </p>       
                </div>
            </article>
        )
    }

}

