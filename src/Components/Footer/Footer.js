import Logo from '../Images/Logo.png';
import './Footer.css';

const Footer = () => {
    const imageStyle = {
        width: '180px',
        height: '60px',
    }
    return (
        <>
            <div className='footer'>
                <div>Developed by <a href="/">Dev Chauhan</a></div>
                <div className='middle'>
                    <a href='/'><img src={Logo} style={imageStyle} /></a>
                    <p>&copy; 2024</p>
                </div>
                <div>
                    Thanks For visiting
                </div>
            </div>
        </>
    )
}

export default Footer;