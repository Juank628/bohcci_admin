export type Product = {
    readonly id: string,
    name: string,
    description: string,
};

export type ProductCardProps = {
    data: Product,
    color: string,
}
