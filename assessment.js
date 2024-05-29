const nftset=[];

function mintNFT (id, name, age, skinColor, gender) {
    const nft = {
        "id":id,
        "name":name,
        "age":age,
        "skinColor":skinColor,
        "gender":gender
    };
    nftset.push(nft);
    console.log("Minted:"+name)
}

function listNFTs () {
    for(let i = 0; i < nftset.length; i++){
        const nft = nftset[i];
        console.log("ID: " + nft.id);
        console.log("Name: " + nft.name);
        console.log("Age: " + nft.age);
        console.log("Skin Color: " + nft.skinColor);
        console.log("Gender: " + nft.gender);
    }
}

function getTotalSupply() {
    console.log("Total NFTs: " + nftset.length);
}

mintNFT(1, "Karl", 33, "African American", "Male");
mintNFT(2, "Vinita", 32, "Asian", "Female");
mintNFT(3, "Alfred", 38, "Asian", "Male");

listNFTs();
getTotalSupply();
