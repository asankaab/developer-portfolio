import {defineField, defineType} from 'sanity'

export const navType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
            defineField({
                name: 'link',
                type: 'object',
                fields: [
                    defineField({
                        name: 'title',
                        type: 'string',
                    }),
                    defineField({
                        name: 'path',
                        type: 'string'
                    })
                ]
            })
        ]
        }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})