import { stringify } from "querystring";
import React from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";

interface PlaygroundContextType {
  folders: any;
  setFolders: any;
  createNewFolder: (folderTitle: string) => void;
  createNewPlayground: (folderId: string, cardTitle: string, cardLanguage: string) => void;
  createNewFolderAndPlayground: (folderTitle: string, cardTitle: string,cardLanguage: string) => void;
  editCardTitle: (folderId:string, cardId : string, newCardTitle : string) => void;
  editFolderTitle: (folderId : string, newFolderTitle :string) => void;
  deleteCard: (folderId : string, cardId : string) => void;
  deleteFolder: (folderId : string) => void;
}

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null
);

export interface FolderT {
  title: string;
  items: {
    [Key: string]: {
      title: string;
      languages: string;
    };
  };
}
export interface FolderType {
  [Key: string]: FolderT;
}

const initialItems = {
  [uuid()]: {
    title: "Folder Title 1",
    items: {
      [uuid()]: {
        title: "Stack Implementation",
        languages: "C++",
      },
      [uuid()]: {
        title: "Queue Implementation",
        languages: "C++",
      },
      [uuid()]: {
        title: "LinkedList Implementation",
        languages: "C++",
      },
    },
  },
  [uuid()]: {
    title: "Folder Title 2",
    items: {
      [uuid()]: {
        title: "Stack Implementation",
        languages: "C++",
      },
      [uuid()]: {
        title: "Queue Implementation",
        languages: "C++",
      },
      [uuid()]: {
        title: "LinkedList Implementation",
        languages: "C++",
      },
    },
  },
}

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders, setFolders] = React.useState(() => {
    let localData = JSON.parse(localStorage.getItem("playground-data") as string);
    localData = Object.keys(localData).length === 0 ? null : localData;
    return localData || initialItems;
  });

//Save all data to local storage
  React.useEffect(() =>{
    localStorage.setItem("playground-data", JSON.stringify(folders));
  },[folders])

  // Creates a new Folder

  const createNewFolder = (folderTitle: string) => {
    setFolders((oldState : any) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderTitle,
        items: {},
      };
      return newState;
    });
  };

  //Create new PlayGround

  const createNewPlayground = (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState : any) => {
      const newState = { ...oldState };
      newState[folderId].items[uuid()] = {
        title: cardTitle,
        languages: cardLanguage,
      };
      return newState;
    });
  };
  // new folder and playground

  const createNewFolderAndPlayground = (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState : any) => {
      const newState = { ...oldState };

      newState[uuid()] = {
        title: folderTitle,
        items: {
          [uuid()]: {
            title: cardTitle,
            languages: cardLanguage,
          },
        },
      };
      return newState;
    });
  };

  //Edit cardTitle
  const editCardTitle = (folderId:string, cardId : string, newCardTitle : string) =>{
    setFolders((oldState : any) => {
      const newState = {...oldState};

      newState[folderId].items[cardId].title = newCardTitle;
      return newState;
    })
  };

  //Edit FolderTitle

  const editFolderTitle = (folderId : string, newFolderTitle :string) =>{
    setFolders((oldState : any) =>{
      const newState = {...oldState};
      newState[folderId].title = newFolderTitle;
      return newState;
    })
  }

  //Delete card Function

  const deleteCard = (folderId : string, cardId : string) => {
    setFolders((oldState : any) =>{
      const newState = {...oldState};
      delete newState[folderId].items[cardId];
      return newState;
    })
  };

  //Delete folder

  const deleteFolder = (folderId : string) =>{
    setFolders((oldState : any) =>{
      const newState = {...oldState};
      delete newState[folderId];
      return newState;
    })
  };

  const makeAvailableGlobally: PlaygroundContextType = {
    folders: folders,
    setFolders: setFolders,
    createNewFolder :createNewFolder, 
    createNewPlayground :createNewPlayground, 
    createNewFolderAndPlayground: createNewFolderAndPlayground,
    editCardTitle :editCardTitle, 
    editFolderTitle: editFolderTitle,
    deleteCard :deleteCard, 
    deleteFolder: deleteFolder,
  };
  
  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  );
}
