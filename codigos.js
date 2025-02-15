function Sobreposição(elemento1, elemento2){
    const rect1 = elemento1.getBoundingClientRect();
    const rect2 = elemento2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom);
}

