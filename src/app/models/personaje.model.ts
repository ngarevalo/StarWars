export interface IPeople {

    name: string;
    height: string;
    mass: string;
    homeworld: string;
    planet: string;
    
};

export class People implements IPeople {

    /**
     * Nombre
     */
    name = '';

    /**
     * Altura
     */
    height = '';

    /**
     * Peso
     */
    mass = '';

    /**
     * Mundo/Residencia
     */
    homeworld = '';

    planet = '';

}

export class Results {

    count = 0;

    next = null;

    previous = null;

    results = null;

}