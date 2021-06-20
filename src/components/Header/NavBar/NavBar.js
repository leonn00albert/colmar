import { Logo } from '../Logo/Logo';
export function NavBar() {
    const navbar = {
        items: [
            {text: "On Campus",
             url: '#'},
             {text: "Online for Companies",
             url: '#'},
             {text: "Sign in",
             url: '#'}
        ],
        itemsMobile: [
            
            {icon: "./images/ic-logo.svg",
            url: '#'},
            {icon: "./images/ic-on-campus.svg",
            url: '#'},
            {icon: "./images/ic-online.svg",
            url: '#'},
            {icon: "./images/ic-login.svg",
            url: '#'}
        ]
    }
    return (
        <nav>
            <div className="desktop-nav">
            <Logo />
            {navbar.items.map((item, i) => {
                return <a key={i} href={item.url}>{item.text}</a>
            })}
            </div>
            <div className="mobile-nav">
            {navbar.itemsMobile.map((item, i) => {
                return <a key={i} href={item.url}><img alt="icon" src={item.icon} /></a>
            })}
            </div>
        </nav>
    )
}