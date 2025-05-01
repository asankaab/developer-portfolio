import { Globe, UserIcon } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const userType = defineType({
  name: 'user',
  type: 'document',
  options: { singleType: true },
  icon: UserIcon,
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

    // group about
    defineField({
      name: 'about',
      type: 'array',
      group: 'about',
      of: [
        defineField({
          name: 'description',
          type: 'block'
        })
      ]
    }),

    // group contact
    
    defineField({
      name: 'contactnarrate',
      title: 'Contact Narrate',
      type: 'text',
      group: 'contact',
      validation: rule => rule.max(500)
    }),
    defineField({
      name: 'email',
      type: 'string',
      group: 'contact',
      validation: rule => rule.email().warning('must be a valid email address')
    }),
    defineField({
      name: 'phone',
      type: 'string',
      group: 'contact',
      validation: rule => rule.regex(/^[0-9]+$/).warning('number only')
    }),
    defineField({
      name: 'socialmedia',
      type: 'array',
      group: 'contact',
      options: {layout: 'tags'},
      of: [
        defineField({
          name: 'platform',
          type: 'object',
          icon: Globe,
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'url',
              type: 'url',
            })
          ]
        })
      ]
    })
  ],
})