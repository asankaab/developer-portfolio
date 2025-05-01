import { client } from "@/sanity/lib/client";

export async function getUser() {

    const query = `*[_type == "user"]{name, photo, occupation, slogan, email, description}[0]`;

    const options = { next: { revalidate: 60 } };

    const user = await client.fetch(query, {}, options ).then((data) => data);

    return user;
}

export async function getSocialLinks() {

    const query = `*[_type == "user"]{socialmedia}[0]`;

    const options = { next: { revalidate: 60 } };

    const socialLinks = await client.fetch(query, {}, options ).then((data) => data);

    return socialLinks;
}

export async function getProjectList(limit) {

    const query = `*[_type == "projects"]{title, slug, images, date, _id}[0...${limit || 20}]`;

    const options = { next: { revalidate: 60 } };

    const projectList = await client.fetch(query, {}, options ).then((data) => data);

    return projectList;
}

export async function getProject(slug) {

    const query = `*[_type == "projects" && slug.current == "${slug}"]{title, slug, images, date, source, preview, "techstack": techstack[]->, description}[0]`;

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

export async function getExperiences() {

    const query = `*[_type == "experiences"]{title, details, yearStart, _id}`;

    const options = { next: { revalidate: 60 } };

    const experiences = await client.fetch(query, {}, options ).then((data) => data);

    return experiences;
}

export async function getSkills() {

    const query = `*[_type == "skills"]{title, details, _id}`;

    const options = { next: { revalidate: 60 } };

    const skills = await client.fetch(query, {}, options ).then((data) => data);

    return skills;
}