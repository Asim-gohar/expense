export type penseType = {
  
    id: string,
   amount: number ,   
    category: string,
    note: string,
    date: string
}
export type OnAddHandlerType = {
     e:() => void
}

export type OnDeleteHandler = {
    e:() => void
}

export type AgbModalType = {
    isOpen : boolean ; 
    onAddPense : (pense:penseType)=> void
    onClose : () => void
}
export type penseModalProps = {
    isOpen: boolean,
    onClose: ()=> void,
    pense: penseType
    onAddPense: (pense:penseType)=> void
    onUpdatePense: (pense:penseType)=> void
}