import { Link } from "react-router-dom"

function About() {
    return<>
    <h1>About Page</h1>
    <p>This is About Page of our App</p>
    <p>And here we are learning about Router</p>
    <Link to="/">Go to Home Page</Link>
    <li><Link to="/user/monu" >Monu</Link></li>
    <li><Link to="/user/isha" >Isha</Link></li>
    </>
}

export default About