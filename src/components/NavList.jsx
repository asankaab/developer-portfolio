import Link from "next/link"

export function NavList({className, onClick}) {

    // const [navItems, setNavItems] = useState([]);

    // useEffect(() => {
    //     const query = `*[_type == "nav"]{link}[0]`;
    //     const data = client.fetch(query).then(result => setNavItems(result.link));
    // },[])

    const navItems = [
        {title: "Home", path: "/"},
        {title: "Work", path: "/work"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"}
    ]

    return (
        <>
            {navItems?.map((item, index) => {
                return ( 
                    <Link className={className} key={index} href={item.path} >
                        <div className="group overflow-hidden text-foreground">{item.title}
                            <div className="md:bg-foreground transition h-0.5 w-full origin-bottom-left scale-x-0 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}