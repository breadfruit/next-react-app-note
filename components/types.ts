export interface NoteItem {
    title: string
    content: string,
    updateTime: string
}
export interface SidebarNoteItemProps {
    note: NoteItem
    noteId: string
}