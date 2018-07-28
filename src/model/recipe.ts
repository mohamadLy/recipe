export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public title: string;
    public description: string;
    public ingredient: Ingredient;
    public instruction: Instruction;
    public cover_photo: string;

    constructor(title: string,
        description: string,
        ingredient: Ingredient,
        instruction: Instruction,
        cover_photo: string) {
        this.title = title;
        this.description = description;
        this.ingredient = ingredient;
        this.instruction = instruction;
        this.cover_photo = cover_photo;
    }
}
