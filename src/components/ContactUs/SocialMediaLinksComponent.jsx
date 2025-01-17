import facebookIcon from "../../assets/svg/facebook.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import instagramIcon from "../../assets/svg/instagram.svg";
import {memo} from "react";
import {Button} from "@nextui-org/react";

function SocialMediaLinksComponent() {
    return (
        <div className={"relative z-20 flex items-center justify-center flex-col gap-4 my-20 px-4 text-center"}>
            <div className={"flex items-center justify-center flex-col gap-3"}>
                <h3 className={"roboto font-semibold text-[44px] text-[#2C3667]"}>Social Media Links</h3>
            </div>
            <div className={"flex items-center justify-center gap-4"}>
                <Button className={"w-fit !px-0 min-w-0 rounded-lg"} >
                    <a href="https://www.facebook.com/TheKeyfx" aria-label="Visit TheKeyfx on Facebook"><img
                        src={facebookIcon} alt="Facebook" className={"cursor-pointer"}/></a>
                </Button>
                <Button className={"w-fit !px-0 min-w-0 rounded-lg"}>
                    <a href="https://www.linkedin.com/company/keyfx" aria-label="Visit TheKeyfx on Linkedin"><img
                        src={linkedinIcon} alt="LinkedIn" className={"cursor-pointer"}/></a>
                </Button>
                <Button className={"w-fit !px-0 min-w-0 rounded-lg"}>
                    <a href="https://www.instagram.com/thekeyfx" aria-label="Visit TheKeyfx on Instagram"><img
                        src={instagramIcon} alt="Instagram" className={"cursor-pointer"}/></a>
                </Button>
            </div>
        </div>
    );
}

export default memo(SocialMediaLinksComponent);
