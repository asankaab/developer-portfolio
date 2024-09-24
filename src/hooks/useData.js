import { client } from "@/sanity/lib/client";

export async function getProjectList() {

    const query = `*[_type == "projects"]{title, slug, images, date, _id}`;

    const options = { next: { revalidate: 60 } };

    const cardData = await client.fetch(query, {}, options ).then((data) => data);

    return cardData;
}

export async function getProject(slug) {

    const query = `*[_type == "projects" && slug.current == "${slug}"]{title, slug, images, date}[0]`;

    const options = { next: { revalidate: 60 } };

    const project = await client.fetch(query, {}, options).then((data) => data);

    return project;
}

export async function getTestimonials() {

    const query = `*[_type == "testimonials"]{name, description, _id}`;

    const options = { next: { revalidate: 60 } };

    const testimonials = await client.fetch(query, {}, options).then((data) => data);

    return testimonials;

} 