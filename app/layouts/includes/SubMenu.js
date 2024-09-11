"use client"

export default function SubMenu () {

    const menuItems = [
        {"id": 1, "name": "Rose"},
        {"id": 2, "name": "Tulip"},
        {"id": 3, "name": "Sunflower"},
        {"id": 4, "name": "Lily"},
        {"id": 5, "name": "Daisy"},
        {"id": 6, "name": "Orchid"},
        {"id": 7, "name": "Carnation"},
        {"id": 8, "name": "Peony"},
        {"id": 9, "name": "Hydrangea"},
        {"id": 10, "name": "Daffodil"}
    ];

    return (
        <>
            <div id="SubMenu" className="border-b">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul id="TopMenuLeft" className="flex items-center text-[13px] text-[#333333] px-2 h8">
                        {menuItems.map(item => (
                            <li key={item.id} className="px-3 hover:underline cursor-pointer">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        </>
    )
}