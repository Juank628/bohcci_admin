import React from 'react';
import * as customTypes from '../types';

export default function ProductCard({ data, color } : customTypes.ProductCardProps) {
  return (
    <div>{data.description + color}</div>
  );
}
