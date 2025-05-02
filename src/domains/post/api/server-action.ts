
'use server';

const getPost = async(id: string) => {

  const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/post?id=${id}`);

  if( !res.ok) {
    throw new Error('/api/post server-action Error');
  }

  const data = await res.json();

  return data;
}

export { getPost };