export const items =[
    {
        producto: "iPhone 15 Pro",
        precio: 1500,
        color: "Gris Espacial",
        tamaño: "6.1 pulgadas",
        almacenamiento: "128 GB",
        id: 1,
    },
    {
        producto: "iPhone 14",
        precio: 1200.99,
        color: "Blanco",
        tamaño: "6.7 pulgadas",
        almacenamiento: "64 GB",
        id: 2,
    },
    {
        producto: "iPhone 12 Mini",
        precio: 699.99,
        color: "Rojo",
        tamaño: "5.4 pulgadas",
        almacenamiento: "256 GB",
        id: 3,
    }
]

export function getItemByid (id){
    return items.find((item) => item.id == id )
}