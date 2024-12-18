import facebookIcon from "../../assets/svg/facebook.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import instagramIcon from "../../assets/svg/instagram.svg";


function SocialMediaLinksComponent() {
    return (
        <div className={"relative z-20 flex items-center justify-center flex-col gap-4 my-20 px-4 text-center"}>
            <div className={"flex items-center justify-center flex-col gap-3"}>
                <h3 className={"roboto font-semibold text-[44px] text-[#2C3667]"}>Social Media Links</h3>
                <p className={"font-plusJakartaSans text-lg text-[#182252] text-center"}>Include links to LinkedIn,
                    Twitter, and Facebook for updates, community<br/>discussions, and support.</p>
            </div>
            <div className={"flex items-center justify-center gap-4"}>
                <img src={facebookIcon} alt="Facebook" className={"cursor-pointer"}/>
                <img src={linkedinIcon} alt="LinkedIn" className={"cursor-pointer"}/>
                <img src={instagramIcon} alt="Instagram" className={"cursor-pointer"}/>
            </div>
        </div>
    );
}

export default SocialMediaLinksComponent;
