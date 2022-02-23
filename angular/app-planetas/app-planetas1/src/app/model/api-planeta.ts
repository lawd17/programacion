export interface ApiPlaneta {
    results: [
        {
            id: number,
            name: string,
            rotation_period: string,
            orbital_period: string,
            climate: string,
            gravity: string,
            terrain: string
        }
    ]
}