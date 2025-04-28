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
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      group: 'content',
      of: [
        { type: 'string' }
      ],
      options: {
        layout: 'grid',
        list: [
          { title: 'Next.JS', value: 'nextjs' },
          { title: 'Sanity', value: 'sanity' },
          { title: 'Strapi', value: 'strapi' },
          { title: 'Contentful', value: 'contentful' },
          { title: 'Angular', value: 'angular' },
          { title: 'Tailwind', value: 'tailwind' },
          { title: 'PostCSS', value: 'postcss' },
          { title: 'SCSS', value: 'scss' },
          { title: 'React', value: 'react' },
          { title: 'Node.JS', value: 'nodejs' },
          { title: 'GraphQL', value: 'graphql' },
          { title: 'TypeScript', value: 'typescript' }
        ]
      }
    }),
  ],
})