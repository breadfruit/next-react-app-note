import React, { Suspense } from 'react'
import Link from 'next/link'
import SidebarNoteList from './SidebarNoteList'
import { getAllNotes } from '@/lib/redis'
import EditButton from './EditButton'
import NoteListSkeleton from './NoteListSkeleton'
import SidebarSearchField from './SidebarSearchField'
import { NoteItem } from './types'

export default async function Sidebar() {
  const notes = await getAllNotes()
  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField />
          <EditButton noteId={null}>
            New
          </EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton></NoteListSkeleton>}>
           <SidebarNoteList notes={notes} />
          </Suspense>
        </nav>
      </section>
    </>
  )
}
