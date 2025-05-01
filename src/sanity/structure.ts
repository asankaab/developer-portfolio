import { Atom, Bike, Briefcase, FolderOpen, NotebookPen, User, UserIcon } from "lucide-react";
import { StructureBuilder, StructureContext } from "sanity/structure";

export const structure = (S: StructureBuilder, context:StructureContext) => {
  
  return S.list().title("Content").items([
      S.listItem().title("Persona").id("user").icon(User).child(
          S.document().schemaType("user").documentId("user")
        ),
      S.divider(),
      S.documentTypeListItem("projects"),
      S.documentTypeListItem("testimonials"),
      S.documentTypeListItem("skills"),
      S.documentTypeListItem("technology"),
      S.documentTypeListItem("experiences"),]
  )
}
