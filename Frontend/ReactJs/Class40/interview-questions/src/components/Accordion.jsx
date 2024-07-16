import { useState } from "react";

const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [data, setData] = useState([{
        title: 'Title 1',
        content: 'This is first content',
    }, {
        title: 'Title 2',
        content: 'This is second content',
    }, {
        title: 'Title 3',
        content: 'This is fourth content',
    }]);

    return (
        <div>
            {
                data.map((item, idx) => (
                    <div>
                        <h1 onClick={() => setActiveAccordion(idx)}>{item.title}</h1>
                        <p className={activeAccordion !== idx ? "hidden" : ""}>{item.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;