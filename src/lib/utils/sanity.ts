import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    projectId: 'blyvhrdd',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-06-13'
}

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject){
    const processedProject: ProcessedProject = {
        
    }
}