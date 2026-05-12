/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { dataset, projectId, studioHost } from './src/sanity/env';
import { defineCliConfig } from 'sanity/cli'
// import { dataset, projectId } from './src/sanity/env'

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset
  },
  studioHost: studioHost,
  project: {
    basePath: '/'
  },
  deployment: {
    appId: 'nbttepor4nt2g0ax6pwa9lj4',
  }
});