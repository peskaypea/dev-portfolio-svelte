import type {DevExperience } from '$lib/types/sanity';
import type {SanityProject } from '$lib/types/sanity';
import  sanityClient  from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const workExperience: DevExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    const rawProjects: SanityProject[] = await sanityClient.fetch("*[_type == 'project']")

    const project = rawProjects.map((processProjectEntries) => {})
    return {workExperience, rawProjects};
}