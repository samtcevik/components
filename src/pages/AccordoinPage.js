import Accordion from "../components/Accordion";

function AccordionPage(){
    const items = [
        {
            id:1,
            label:"Can I use React on a project?",
            content:"You can use on any project you want.You can use on any project you want.You can use on any project you want.You can use on any project you want."
        },
        {
            id:2,
            label:"Can I use Javascript on a project?",
            content:"You can use on any project you want.You can use on any project you want.You can use on any project you want.You can use on any project you want."
        },
        {
            id:3,
            label:"Can I use Css on a project?",
            content:"You can use on any project you want.You can use on any project you want.You can use on any project you want.You can use on any project you want."
        }
    ];
    return(<div>
        <Accordion items={items}/>
    </div>)
}

export default AccordionPage;