import { Bike } from 'lucide-react'
import { rule } from 'postcss'
import {defineField, defineType} from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  type: 'document',
  icon: Bike,
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [
        defineField({
          name: 'details',
          type: 'block'
        })
      ]
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
  ]
})