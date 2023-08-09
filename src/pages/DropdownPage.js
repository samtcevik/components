import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage(){
    const [selection1, setSelection] = useState(null);
    const [selection2, setSelection1] = useState(null);
    const [selection3, setSelection2] = useState(null);
    const [selection4, setSelection3] = useState(null);


    const opts = [
        { label: "RED", value: "red" },
        { label: "GREEN", value: "green" },
        { label: "BLUE", value: "blue" }
    ]

    const opts2 = [
        { label: "SAMET", value: "sa" },
        { label: "ESMA", value: "es" },
        { label: "MIA", value: "mi" }
    ]

    const opts3 = [
        { label: "FENERBAHÇE", value: "fb" },
        { label: "GALATASARAY", value: "gs" },
        { label: "BEŞİKTAŞ", value: "bjk" }
    ]

    const opts4 = [
        { label: "CUBETRON", value: "cub" },
        { label: "SOFTECH", value: "st" },
        { label: "INTERTECH", value: "it" }
    ]

    const handleSelect1 = (option) => {
        setSelection(option);
    }

    const handleSelect2 = (option) => {
        setSelection1(option);
    }

    const handleSelect3 = (option) => {
        setSelection2(option);
    }

    const handleSelect4 = (option) => {
        setSelection3(option);
    }

    return (
        <div>
            <div className="flex">
                <Dropdown options={opts}  selection={selection1} onSelect={handleSelect1} />
                <Dropdown options={opts2} selection={selection2} onSelect={handleSelect2} />
                <Dropdown options={opts3} selection={selection3} onSelect={handleSelect3} />
                <Dropdown options={opts4} selection={selection4} onSelect={handleSelect4} />
            </div>

        </div>
    )
}

export default DropdownPage;