
import dayjs from 'dayjs';
import SidebarNoteItem from './SidebarNoteItem';
import { NoteItem, SidebarNoteItemProps } from './types';



export default async function NoteList({ notes }: {notes: NoteItem}) {
  const sleep = ms => new Promise((r) => setTimeout(r, ms));
  await sleep(3000)
    const arr  = Object.entries(notes)
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
  