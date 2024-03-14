import dayjs from 'dayjs';

interface SidebarNoteItemHeaderProps {
    title: string
    updateTime: string
}

export default function SidebarNoteItemHeader({title, updateTime}: SidebarNoteItemHeaderProps) {
  return (
      <header className="sidebar-note-header">
          <strong>{title}</strong>
          <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
  );
}
