import { useState } from "react"
import { useShoppingListContext } from "../../context"
import type { ModalProps } from "./Modal.types";

export const Modal = ({onClose} : ModalProps) => {
    const { saveList } = useShoppingListContext()
    const [listName, setListName] = useState<string>("");

    const handleSaveList = () => {
        if(listName.trim() !== ""){
            saveList(listName);
            onClose();
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Salvar Lista de Compras</h2>
                <input type="text" name="listName" id="listName" value={listName} placeholder="Nome da Lista" onChange={(e) => setListName(e.target.value)}/>
                <button onClick={handleSaveList}>Salvar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    )
}