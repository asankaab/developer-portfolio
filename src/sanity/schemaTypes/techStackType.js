import { Atom } from "lucide-react";
import { defineField, defineType } from "sanity";

export const techStackType = defineType({
    name: 'technology',
    title: 'Technologies',
    type: 'document',
    icon: Atom,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            type: 'image',
        })
    ]
})