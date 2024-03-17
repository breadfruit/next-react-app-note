"use server";

import { redirect } from "next/navigation";
import { addNote, updateNote, delNote } from "@/lib/redis";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { initialStateProps } from "@/components/NoteEditor";

const schema = z.object({
  title: z.string(),
  content: z.string().min(1, "请填写内容").max(100, "字数最多 100"),
});
const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));


export async function saveNote(prevState: any,formData: any): Promise<initialStateProps> {
  const noteId = formData.get("noteId");
  const data ={
    title: formData.get("title"),
    content: formData.get("body"),
    updateTime: new Date(),
  };

  // 校验数据
  const validated = schema.safeParse(data);
  if (!validated.success) {
    return {
      errors: validated.error.issues,
    };
  }
  
  // 模拟请求时间
  await sleep(2000)

  if (noteId) {
    updateNote(noteId,  JSON.stringify(data));
    revalidatePath("/", "layout");
  } else {
    const res = await addNote( JSON.stringify(data));
    revalidatePath("/", "layout");
  }
  return { message: `Add Success!` };
}

export async function deleteNote(prevState: any, formData: any): Promise<initialStateProps> {
  const noteId = formData.get("noteId");
  await delNote(noteId);
  revalidatePath("/", "layout");
  redirect("/");
}
