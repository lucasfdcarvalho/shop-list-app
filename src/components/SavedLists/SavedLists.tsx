import { useShoppingListContext } from "../../context"
import type { SavedListsProps } from "./SavedLists.types";

export const SavedLists = ({onClose}: SavedListsProps) => {
    const { savedLists } = useShoppingListContext();

    const handleSendWhatsAppData = (listName: string) => {
        const message = `Lista de compras - ${listName}\n\n` + savedLists.find(list => list.name === listName)?.items.map((item) => `Item: ${item.name} - Quantidade: ${item.quantity}`).join("\n");

        const whatsAppUrl = `https://api.whatsapp.com/send?phone=+5532998573527&text=${encodeURIComponent(message)}`;

        window.open(whatsAppUrl, "_blank");
    }

    return (
        <div>
            <h2>Listas Salvas</h2>
            <ul className="saved-list">
                {savedLists.map((list, index) => (
                    <li key={index}>
                        <strong>{list.name}</strong>
                        <ul>
                            {list.items.map((item, idx) => (
                                <li key={idx}>
                                    {item.name} - {item.quantity}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleSendWhatsAppData(list.name)}>Enviar para o WhatsApp</button>
                    </li>
                ))}
            </ul>
            <button onClick={onClose}>Fechar</button>
        </div>
    )
}