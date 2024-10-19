export const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <ul className="mt-xl list-disc pl-4">{children}</ul>,
    number: ({children}) => <ol className="mt-lg list-decimal pl-4">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li className="">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}) => <li>✅ {children}</li>,
  },
}