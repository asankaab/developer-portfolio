/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { dataset, projectId } from '@/sanity/env';
import { defineCliConfig } from 'sanity/cli'
// import { dataset, projectId } from './src/sanity/env'

export default defineCliConfig({
  api: {
    projectId: 'm74nhq4q',
    dataset: 'production'
  },
  studioHost: 'asanka',
  project: {
    basePath: '/'
  }
});