import { Link } from 'wouter';
import logo from '../../assets/logo.svg'
import './Header.scss';

const Header = () => {


    return (
        <header className="header px-8">
            <Link href="/" ><img alt="logo" src={logo} width={128} /></Link>
        </header>
    )
}

export default Header