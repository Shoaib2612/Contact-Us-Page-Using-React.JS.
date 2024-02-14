import styles from "./Navigation.module.css";
const Navigation = () => {
    return ( 
        
        <>
        <nav className="container">
            <div className="logo">
                <img src="/images/Frame 2 1.png" alt="Company Logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </>
     );
}

export default Navigation;