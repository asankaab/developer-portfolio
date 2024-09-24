import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'users',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        type: 'string',
    }),
    defineField({
        name: 'photo',
        type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'admin',
        type: 'boolean',
    })
  ],
})