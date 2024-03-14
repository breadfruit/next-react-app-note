import Link from "next/link"
import React from "react"

interface EditButtonProps {
    noteId: string | null
    children: React.ReactNode
}


export default function EditButton ({noteId, children}: EditButtonProps) {
    const isDraft = noteId == null;
    return (
        <Link href={`/note/${noteId}`}>
            <button
                className={['edit-button', isDraft ? 'edit-button--solid' : 'edit-button--outline'].join(' ')}
                role="menuItem"
            >
                {children}
            </button>
        </Link>
    )
}