import { Fragment } from "react";

// function Echo({children}){
//     return children;
// }

function Table({data, config, keyFn}) {

    const renderedHeaders = config.map((item) => {

        if(item.header){
            return <Fragment key={item.label}>{item.header()}</Fragment>;
        }
        return <th key={item.label}> {item.label} </th>
    })

    const renderedData = data.map((item) => {
        const renderedCell = config.map((column) => {
            return (
                <td className="p-2" key={column.lable}>
                    {column.render(item)}
                </td>
            );
        }); 

        return (
            <tr key={keyFn(item)} className="border-b">
                {renderedCell}
            </tr>
        )
    })

    return (
        <div >
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody >
                    {renderedData}
                </tbody>
            </table>
        </div>
    )
}

export default Table;