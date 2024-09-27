import { rule } from 'postcss'
import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'users',
  type: 'document',
  groups: [
    { name: 'main' }, { name: 'about' }, { name: 'contact' }
  ],
  fields: [
    defineField({
        name: 'name',
        type: 'string',
        group: 'main'
    }),
    defineField({
      name: 'occupation',
      type: 'string',
      group: 'main'
    }),
    defineField({
      name: 'slogan',
      type: 'string',
      group: 'main'
    }),
    defineField({
        name: 'photo',
        type: 'image',
        group: 'main'
    }),
    defineField({
        name: 'admin',
        type: 'boolean',
        group: 'main'
    }),

    // group about
    defineField({
      name: 'description',
      type: 'array',
      group: 'about',
      of: [
        defineField({
          name: 'description',
          type: 'block'
        })
      ]
    }),
    defineField({
      name: 'experience',
      type: 'array',
      group: 'about',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string'
            }),
            defineField({
              name: 'details',
              type: 'text',
              validation: rule => rule.max(500)
            }),
            defineField({
              name: 'yearStart',
              type: 'number',
              title: 'Start Year',
            }),
            defineField({
              name: 'yearEnd',
              type: 'number',
              title: 'End Year',
            })
          ]}
      ]
    }),

    // group contact
    defineField({
      name: 'email',
      type: 'string',
      group: 'contact',
      validation: rule => rule.email().warning('must be a valid email address')

    }),
  ],
})