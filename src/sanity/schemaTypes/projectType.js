import { FolderOpen } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: FolderOpen,
  groups: [
    { name: 'content' }
  ],
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title'},
      validation: (rule) => rule.required().error(`Required to generate a page on the website`)
    }),
    defineField({
        name: 'date',
        type: 'date',
        initialValue: new Date().toISOString().slice(0, 10)
    }),
    defineField({
        name: 'images',
        type: 'array',
        of: [
            defineField({
                name: 'image',
                type: 'image'
            })
        ]
        }),
    defineField({
      name: 'description',
      type: 'array',
      group: 'content',
      of: [
        defineField({
          name: 'content',
          type: 'block'
        })
      ]
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: 'techstack',
      type: 'array',
      of: [
        defineField({
          name: 'techfield',
          type: 'reference',
          to: [{type: 'technology'}]
        })
      ],
      options: { layout: 'tags' }
    })
  ],
})