import sanityClient from '@sanity/client';
import dotenv  from 'next/dist/compiled/dotenv'
const options = {

    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
}
export default sanityClient(options);

