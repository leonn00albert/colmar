export function FeaturedItems({items}) {

  return (
    <aside>
      {items.map((item,i) => {
        return (
          <div key={i}>
            <img src={item.src} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <p>
                <a href={item.text}>Read more</a>
              </p>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
