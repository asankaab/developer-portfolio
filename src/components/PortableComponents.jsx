import { ExternalLink } from "lucide-react"

export const description = {
    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <ul className="mt-xl list-inside list-disc text-foreground">{children}</ul>,
      number: ({children}) => <ol className="mt-lg list-decimal">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <li className="py-1">{children}</li>,
  
      // Ex. 2: rendering custom list items
      checkmarks: ({children}) => <li>✅ {children}</li>,
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel} target="blank" className="border px-2 py-1 rounded inline-flex items-center gap-2 my-2">
            {children}<ExternalLink size={16}/>
          </a>
        )
      },
    },
    types: {
      span: ({children}) => {
        return <p className="text-red-400">{children}</p>
      }
    }
  }


export const dataView = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl list-inside list-none flex flex-wrap gap-2 py-1 text-foreground opacity-80">{children}</ul>,
    number: ({children}) => <ol className="mt-lg list-decimal">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li className="border px-2 py-1 rounded-full bg-black/5 text-xs">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}) => <li>✅ {children}</li>,
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
    p: ({children}) => <p className="text-green-700">{children}</p>,
  }
}