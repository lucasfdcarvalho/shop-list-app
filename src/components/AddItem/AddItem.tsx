import { useState } from "react";
import { useShoppingListContext } from "../../context";


export function AddItem(){
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const { addItem } = useShoppingListContext();

    const handleAddItem = () => {
        if(name.trim() !== "" && quantity > 0){
            addItem(name, quantity);
            setName("");
            setQuantity(0);
        }
    }

    return (
        <div className="add-item">
            <input type="text" name="name" id="name" value={name} placeholder="Nome do item" onChange={(e) => setName(e.target.value)}/>
            <input type="number" name="quantity" id="quantity" value={quantity} placeholder="Quantidade" onChange={(e) => setQuantity(Number(e.target.value))}/>

            <button onClick={handleAddItem}>Adicionar</button>
        </div>
    )
}