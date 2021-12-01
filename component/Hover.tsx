import React, {PropsWithChildren} from "react";


const Hover:React.FC<{ onHover:React.ReactNode, children:PropsWithChildren<{}> }> = (props) => (
    <div style={{height:"100%"}} className="hover">
        <div className="hover__no-hover">{props.children}</div>
        <div className="hover__hover">{props.onHover}</div>
    </div>
)

export default Hover