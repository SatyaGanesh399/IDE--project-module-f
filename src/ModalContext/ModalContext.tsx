import React from "react";
import { createContext } from "react";

interface ModalContextType {
    isOpen : PopupFields;
    setIsOpen : (isOpen : PopupFields) => void;
}
interface PopupFields {
    value : boolean;
    type : string;
    identifier : {
        folderId : string;
        cardId : string;
    }
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({children} : {children : any}){
    const intialPopupFields : PopupFields = {
        value: false,
        type: '',
        identifier : {
            folderId : '',
            cardId : '',
        },
    };
    
    const [isOpen, setIsOpen] = React.useState<PopupFields>({...intialPopupFields});

    const makeAvailableGlobally : ModalContextType = {
        isOpen: isOpen,
        setIsOpen: setIsOpen
    };

    return (
    <ModalContext.Provider value = {makeAvailableGlobally}>
        {children}
    </ModalContext.Provider>
    );
}