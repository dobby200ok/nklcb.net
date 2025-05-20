import { MetadataRoute } from "next";
import { JobListItemProps } from "@/types/JobItemProps";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const jobList = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/jobs/list`),
        { totalSize } = await jobList.json(),
        jobListSiteMap = Array.from({ length : (totalSize / 15) + 1}).map((_, i) => ({
          url: `${ process.env.NEXT_PUBLIC_BASE_URL }/jobList?page=${i + 1}`,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.8

        }));

  const postList = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/jobs/list?limit=${totalSize}`),
        { data } = await postList.json(),
        postListSiteMap = data.map((e : JobListItemProps) => ({
          url: `${ process.env.NEXT_PUBLIC_BASE_URL }/jobList/post/${e._id}`,
          lastModified: new Date(),
          changeFrequency: 'never',
          priority: 0.5
        }))


  return [
    {
      url: `${ process.env.NEXT_PUBLIC_BASE_URL }`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1.0
    },
    ...jobListSiteMap,
    ...postListSiteMap
  ]
}