import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () =>{
        console.log("Click!!!");
    }

    const handleMouseEnter = () =>{
        console.log("Mouse Enter!!!");
    }

    return (
        <div>
            <div>
                <Button primary  rounded onClick={handleClick}>
                    <GoBell className="mr-1"></GoBell>
                    Click me!!
                </Button>
            </div>
            <div>
                <Button secondary  rounded onMouseEnter={handleMouseEnter}>
                    <GoCloudDownload className="mr-1"></GoCloudDownload>
                    Buy Now
                </Button>
            </div>
            <div>
                <Button success  rounded>
                    <GoDatabase className="mr-1"></GoDatabase>
                    Main Screen
                </Button>
            </div>
            <div>
                <Button warning  rounded>
                    <GoBell className="mr-1"></GoBell>
                    Netflix
                </Button>
            </div>
            <div>
                <Button danger  rounded>
                    <GoBell className="mr-1"></GoBell>
                    Youtube
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage;