import {DateTime} from "@auth/core/providers/kakao";
import {initialEnv} from "@next/env";
import exp from "node:constants";

export interface IIconsProps {
    className?: string;
    hover?: boolean | string;
    fill?: boolean | string;
    progress?: number;
}

export interface IResponse {
    message: string;
    errors: {
        email?: string;
        password?: string;
        credentials?: string;
        unknown?: string;
    };
};


export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string,
    brand: string,
    reviews: Review[],
}

interface Review {
    rating: number;
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
    date: DateTime
}