
import dayjs from 'dayjs';
import SidebarNoteItem from './SidebarNoteItem';
import { NoteItem, SidebarNoteItemProps } from './types';



export default async function NoteList({ notes }: {notes: string}) {
    const arr: Array<[string, string]>  = Object.entries(notes)
    if (arr.length == 0) {
      return <div className="notes-empty">
        {'No notes created yet!'}
      </div>
    }
  
    return <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        const noteItem: NoteItem  = JSON.parse(note);
        return (
          <SidebarNoteItem note={noteItem} noteId={noteId} />
        )
    })}
    </ul>
  }
  