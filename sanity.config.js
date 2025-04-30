'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {structure} from './src/sanity/structure'
import { media } from 'sanity-plugin-media'
import { projectType } from './src/sanity/schemaTypes/projectType'
import { testimonialType } from './src/sanity/schemaTypes/testimonialType'
import { experiencesType } from './src/sanity/schemaTypes/experienceType'
import { skillsType } from './src/sanity/schemaTypes/skillsType'
import { techStackType } from './src/sanity/schemaTypes/techStackType'
import { userType } from './src/sanity/schemaTypes/userType'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["user"])

const schemaTypes = [
  userType,
  projectType,
  skillsType,
  techStackType,
  experiencesType,
  testimonialType,
];

export default defineConfig({
  name: 'studio',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { 
    types: schemaTypes, templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)), },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    media(),
  ],
})
