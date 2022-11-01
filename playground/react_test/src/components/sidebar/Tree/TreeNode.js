import React, { useState } from 'react'

const TreeNode = ({ data }) => {
    const { isFolder, items, name } = data;
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div>

            {
                isFolder ? (
                    <>
                        <p
                            onClick={_ => setIsExpand(c => !c)}
                            style={{
                                color: "green",
                                fontWeight: 900
                            }}
                        >
                            {name}
                        </p>

                        <div
                            style={{
                                display: isExpand ? "block" : "none",
                                paddingLeft: 20
                            }}
                        >
                            {
                                // items.map(item => <p key={item.name}>{item.name}</p>)
                                items.map(item => <TreeNode key={item.name} data={item}/>)
                            }
                        </div>
                    </>
                ) : <p>{name}</p>
            }

        </div>
    )
}

export default TreeNode