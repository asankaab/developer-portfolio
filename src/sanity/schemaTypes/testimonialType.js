import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'name',
        type: 'string',
    }),
    defineField({
        name: 'date',
        type: 'date'
    }),
  ],
})