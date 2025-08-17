import Image from 'next/image';
import twitterDark from '@/assets/img/icon/twitter-dark.png';
import Link from 'next/link';

const SocialShareV2 = () => {
    return (
        <>
            <li>
                <Link className="facebook" href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li>
                <Link className="twitter" href="https://www.x.com" target="_blank">
                    <Image src={twitterDark} alt="Image Not Found" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" href="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV2;