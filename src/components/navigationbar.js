import '../styles/components.css'
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to ='/Home'><img src='/basketball-ball.png' alt='logo'></img></Link></li>
                <li><Link to="/Today">Today's Game</Link></li>
                <li><Link to="/Player">Players Data</Link></li>
                <li><Link to="/awards">Awards</Link></li>
                <li><Link to="/teams">Teams</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </nav>
      );
}

export default NavigationBar;