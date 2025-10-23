export interface Food {
    id: string;
    name: string;
    calories_kcal: number | null;
    protein_g: number | null;
    carbs_g: number | null;
    fat_g: number | null;
    fiber_g: number | null;
    iron_mg: number | null;
    calcium_mg: number | null;
    potassium_mg: number | null;
    sodium_mg: number | null;
    sugar_g: number | null;
    vitamin_c_mg: number | null;
    vitamin_b12_mcg: number | null;
    humidity_percents: number | null;
    saturated_fat_g: number | null;
    monounsaturated_fat_g: number | null;
    polyunsaturated_fat_g: number | null;
    food_type: "INGREDIENT" | "COMPOUND_FOOD" | "BEVERAGE";
    cost_level: number;
    food_category:
        | "FRUIT"
        | "SUPPORT"
        | "VEGETABLE"
        | "GRAIN"
        | "PROTEIN_SOURCE"
        | "DAIRY"
        | "HEALTHY_FAT"
        | "LEGUME"
        | "DAIRY_ALTERNATIVE"
        | "BEVERAGE"
        | "OTHER";
    tags: string[] | null;
};