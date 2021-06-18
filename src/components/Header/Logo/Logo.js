
export function Logo() {
    const [logoSrc, logoAlt] = ['./images/ic-logo.svg','logo']; 
    
    return (
        <div className="logo-container">
            <img src={logoSrc} alt={logoAlt} />
            <p><strong>COLMAR</strong><span>ACADEMY</span></p>
        </div>
     
    )
}