import { client } from "@/sanity/lib/client";

export async function getNav() {

    const CONTENT_QUERY = `*[_type == "nav"] { link }`

    const content = await client.fetch(CONTENT_QUERY)
    
    return { content };
}