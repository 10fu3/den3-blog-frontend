import React, {CSSProperties, Dispatch, SetStateAction, useEffect, useState} from "react";

import {ContentState, Editor, EditorState, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css'

const ResizeTextArea:React.FC<{style?:CSSProperties,value:string,setValue:Dispatch<SetStateAction<string>>,placeholder?:string}> = (props)=>{

    const [editorEnable, setEditorEnable] = useState(false)

    const [value,setValue] = React.useState<EditorState>(
        EditorState.createWithContent(ContentState.createFromText(props.value))
    );

    useEffect(() => {
        setEditorEnable(true)
    }, [])

    useEffect(()=>{
        props.setValue(value.getCurrentContent().getPlainText())
    })

    return (
        <div style={props.style}>
            {editorEnable && (
                <Editor
                    placeholder={props.placeholder}
                    editorKey="text-field"
                    editorState={value}
                    onChange={setValue}
                    handlePastedText={(e,h)=>{
                        const newState = Modifier.replaceText(value.getCurrentContent(), value.getSelection(), e);
                        setValue(EditorState.push(value, newState, 'insert-fragment'));
                        return 'handled'
                    }}
                />
            )}
        </div>
    );
}

export default ResizeTextArea
