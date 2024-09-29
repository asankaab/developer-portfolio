import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
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
  ],
})