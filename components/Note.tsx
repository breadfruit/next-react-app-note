import dayjs from "dayjs"
import EditButton from "./EditButton"
import { NoteItem } from "./types"
import NotePreview from "./NotePreview"


interface Props {
    noteId: string
    note: NoteItem
}


export default function Note({noteId, note}: Props) {
    const { title, content, updateTime } = note
    console.log('noteId', noteId)

    return (
        <div className="note">
            <div className="note-header">
                <h1 className="note-title">{title}</h1>
                <div className="note-menu" role="menubar">
                <small className="note-updated-at" role="status">
                    Last updated on {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
                </small>
                    <EditButton noteId={noteId}>Edit</EditButton>
                </div>
            </div>
            <NotePreview>{content}</NotePreview>
        </div>
    )
}