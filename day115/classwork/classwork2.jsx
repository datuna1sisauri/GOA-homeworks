const obj = {
    x1: "img",
    x2: "img2"
}

const web = (
    <img 
        src={obj.x1}
        onClick={(e) =>{
            e.preventDefault();
            img.src === obj.x1 ? img.src = obj.x2 : img.src = obj.x2
        }}
    />
)