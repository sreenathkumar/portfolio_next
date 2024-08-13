
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-08-03', // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;