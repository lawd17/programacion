export class Planeta {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    climate: string;
    gravity: string;
    terrain: string

    
    public constructor(id: number = 0, name: string = "" , rotation_period: string = "", orbital_period: string = "", climate: string = "", gravity: string = "", terrain: string = ""){
        this.id = id;
        this.name = name;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.climate = climate;
        this.gravity = gravity;
        this.terrain = terrain;
    }
}