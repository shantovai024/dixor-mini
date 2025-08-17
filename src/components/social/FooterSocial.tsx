import twitter from "@/assets/img/icon/twitter.png"
import Image from "next/image";
import Link from "next/link";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f" /></Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in" /></Link>
            </li>
            <li>
                <Link href="https://www.x.com/" target='_blank'><Image src={twitter} alt="Image Not Found" /></Link>
            </li>
        </>
    );
};

export default FooterSocial;