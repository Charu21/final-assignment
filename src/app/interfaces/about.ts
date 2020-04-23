export interface About {
    name?: string,
    founder?: string,
    valuation?: number,
    headquarters?: Address,
    summary?: string
}

export interface Address {
    address: string,
    city: string,
    state: string
}