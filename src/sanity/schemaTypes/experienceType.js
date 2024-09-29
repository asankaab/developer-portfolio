import { rule } from 'postcss'
import {defineField, defineType} from 'sanity'

export const experiencesType = defineType({
  name: 'experiences',
  type: 'document',
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
  ]
})