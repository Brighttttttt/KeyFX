import arrowRight from "../../assets/svg/arrow_right.svg";
import {Button} from "@nextui-org/react";

function ServiceButtonComponent({link}) {
    return (
        <a href={link}>
            <Button
                    className='w-fit rounded-md bg-[#394375] px-[14px] py-[8px] text-white !roboto font-semibold text-sm flex items-center justify-center gap-2'>
                Explore me
                <img src={arrowRight} alt={"arrow"}></img>
            </Button>
        </a>
    );
}

export default ServiceButtonComponent;