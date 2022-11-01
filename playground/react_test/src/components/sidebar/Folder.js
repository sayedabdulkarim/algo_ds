import React, { useState } from 'react'
import { data } from "./data";

const Folder = ({ data }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div>
      {
        data.isFolder ? (
          <>
            <p
              onClick={_ => setIsExpand(c => !c)}
              style={{ color: "green", fontWeight: 900 }}
            >
              {data.name}
            </p>

            <br />
            <div
              style={{
                display: isExpand ? "block" : "none",
                paddingLeft: 20
              }}
            >
              {
                data?.items?.map(i => {
                  return (
                    <Folder key={i.name} data={i} />
                    // <p key={i.name}>{i.name}</p>
                  )
                })
              }
            </div>
          </>
        ) : <p>{ data.name }</p>
      }
    </div>
  )
}

export default Folder

