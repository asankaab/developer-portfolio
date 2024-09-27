/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
// import { dataset, projectId } from './src/sanity/env'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const hostName = process.env.SANITY_STUDIO_HOSTNAME

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset
  },
  studioHost: hostName,
});