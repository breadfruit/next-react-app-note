import { PageProps } from "@/.next/types/app/layout"
import Note from "@/components/Note"
import { NoteItem } from "@/components/types"
import { getNote } from "@/lib/redis"


interface Props {
    id: string
}

export default async function Page({params}: PageProps) {
    const noteId = params.id
    console.log('params', params)

    const note = await getNote(noteId)

    if(note === null) {
        return (
            <div className="note-empty-state">
                <span className="note-text--empty-state">
                    Click a note on the left to view something! 🥺
                </span>
            </div>
        )
    }

    return (
        <Note noteId={noteId} note={note}></Note>
    )
    
}