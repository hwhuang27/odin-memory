
const data = [
    {
        name: "mushroom",
        id: "100004",
    },
    {
        name: "flowerSnake",
        id: "2600309",
    },
    {
        name: "porcupine",
        id: "2600307",
    },
    {
        name: "whiteHare",
        id: "2100100",
    },
    {
        name: "snake",
        id: "2100105",
    },
    {
        name: "blueMushroom",
        id: "2220100",
    },

]

function returnUrl(id){
    return `https://maplestory.io/api/GMS/242/mob/${id}/render/stand`;
}

export {data, returnUrl};

    // {
    //     name: "peachMonkey",
    //     id: "2600314",
    // },
    // {
    //     name: "zombieMushroom",
    //     id: "2230101",
    // },
    // {
    //     name: "birk",
    //     id: "2600013",
    // },
    // {
    //     name: "tickTock",
    //     id: "2600609",
    // },