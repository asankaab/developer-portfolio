export const parent = {
    visible: { opacity: 1, y: 0, transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }, },
    hidden: { opacity: 0, y: 20 },
  }
  
export const child = {
visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: "tween" } },
hidden: { opacity: 0, y: 20 ,},
}

export const viewPortVal = {once: true, amount: 0.4}

export const childCard = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  hidden: { opacity: 0, scale: 0.95 },
  }


  
   export const list = {
      visible: { opacity: 1, transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }, },
      hidden: { opacity: 0 },
    }
    
   export const item = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 , transition: { duration: 2, type: "tween" }},
    }