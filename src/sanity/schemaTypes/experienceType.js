import { Briefcase } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const experiencesType = defineType({
  name: 'experiences',
  type: 'document',
  icon: Briefcase,
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