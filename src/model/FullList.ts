import listItem from "./ListItem"

interface List {
    List: listItem [],
    load(): void,
    save(): void,
    clearList(): void,
    addItem (itemObj: ListItem)
    removeItem (id: string): void,
 }



export default class FullList implements List {

      
}