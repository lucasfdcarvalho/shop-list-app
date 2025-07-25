import { useState, type ReactNode } from "react";
import { ShoppingListContext, type Item, type SavedList } from "../../context";

export const ShoppingListProvider = ({ children }: {children: ReactNode}) => {
    const [items, setItems] = useState<Item[]>([]);
    const [savedLists, setSavedLists] = useState<SavedList[]>([]);


    const addItem = (name:string, quantity: number) : void => {
        setItems((prevState) => [...prevState, {name, quantity}]);
    }

    const removeItem = (index : number) : void => {
        setItems((prevState) => prevState.filter((_, indexItem) => indexItem !== index));
    }

    const saveList = (nameList: string) : void => {
        setSavedLists((prevState) => [...prevState, {name: nameList, items}]);
        setItems([]);
        localStorage.setItem("savedList", savedLists.join(";"));
    }

    return (
        <ShoppingListContext.Provider value={{items, savedLists, addItem, removeItem, saveList}}>
            {children}
        </ShoppingListContext.Provider>
    )
}