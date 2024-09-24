import { client } from "@/sanity/lib/client";

export async function getUser() {

    const query = `*[_type == "users" && admin]{name, photo, occupation, slogan, experience, email, description}[0]`;

    const options = { next: { revalidate: 60 } };

    const user = await client.fetch(query, {}, options ).then((data) => data);

    return user;
}

export async function getProjectList(limit) {

    const query = `*[_type == "projects"]{title, slug, images, date, _id}[0...${limit || 20}]`;

    const options = { next: { revalidate: 60 } };

    const projectList = await client.fetch(query, {}, options ).then((data) => data);

    return projectList;
}

export async function getProject(slug) {

    const query = `*[_type == "projects" && slug.current == "${slug}"]{title, slug, images, date, description}[0]`;

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