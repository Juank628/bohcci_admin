import React from 'react';

export type Product = {
    readonly id: string,
    name: string,
    description: string,
    sale: number,
    price: number,
    stock: [{size: string, quantity: number}],
    family: string,
};

export type ProductCardProps = {
    data: Product,
}

export type TableHeaderProps = {
    columns: string[],
    sort: (e: React.MouseEvent<HTMLButtonElement>) => void; // eslint-disable-line no-unused-vars
}
