import { Cart } from "@prisma/client";
import { axiosInstance } from "./instance"
import { CartDTO } from "./dto/cart";

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstance.get<CartDTO>('/cart');

    return data;
};