export function FeaturedItems() {
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
  return (
    <aside>
      {items.map((item) => {
        return (
          <div>
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
