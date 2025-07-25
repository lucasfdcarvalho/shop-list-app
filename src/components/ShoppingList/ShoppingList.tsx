import { useState } from "react";
import { AddItem } from "../AddItem";
import { ItemList } from "../ItemList";
import { useShoppingListContext } from "../../context";
import { Modal } from "../Modal";
import { SavedLists } from "../SavedLists";


export function ShoopingList() {
    const { savedLists } = useShoppingListContext();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [viewSavedLists, setViewSavedLists] = useState<boolean>(false);

    return (
        <div className="shopping-list">
            <h2>Lista de Compras</h2>
            <AddItem />
            <ItemList/>
            <button onClick={() => setShowModal(true)}>Finalizar Lista de Compras</button>
            <button onClick={() => setViewSavedLists(!viewSavedLists)} disabled={savedLists.length === 0}>{`${!viewSavedLists ? "Mostrar" : "Esconder"} Lista de compras`}</button>
            {showModal && <Modal onClose={() => setShowModal(false)}/>}
            {viewSavedLists && <SavedLists onClose={() => setViewSavedLists(false)}/>}
        </div>
    )
}