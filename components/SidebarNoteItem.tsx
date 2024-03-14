import dayjs from "dayjs";
import SidebarNoteItemContent from "./SidebarNoteItemContent"
import SidebarNoteItemHeader from "./SidebarNoteItemHeader";
import { SidebarNoteItemProps } from "./types";

const SidebarNoteItem = ({note, noteId}: SidebarNoteItemProps) => {
    const { title, content = '', updateTime } = note;

    return (
        <SidebarNoteItemContent
        id={noteId}
        title={note.title}
        expandedChildren={
          <p className="sidebar-note-excerpt">
            {content.substring(0, 20) || <i>(No content)</i>}
          </p>
        }>
            <SidebarNoteItemHeader title={title} updateTime={updateTime} />
      </SidebarNoteItemContent>
    )
}


export default SidebarNoteItem