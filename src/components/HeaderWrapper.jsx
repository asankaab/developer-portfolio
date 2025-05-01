import { getSocialLinks } from "@/api/sanityfetch";
import Header from "./Header";

export default async function HeaderWrapper() {

    const socialLinksData = await getSocialLinks();

    return (
        <Header socialLinks={socialLinksData.socialmedia}/>
    )
}