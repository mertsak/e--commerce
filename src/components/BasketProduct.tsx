import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { deleteToBasket, IProduct } from "@/redux/productsSlice";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "@/redux/productsSlice";
import Swal from "sweetalert2";

interface ProductProps {
  product: IProduct;
}

const BasketProduct: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  // Sepete ürün eklemek ve adetini artırmak için bir fonksiyon oluşturuyoruz.
  const handleIncrement = () => {
    dispatch(incrementQuantity(product));
  };

  // Sepetteki ürün adetini azaltmak ve ürünü silmek için bir fonksiyon oluşturuyoruz.
  const handleDecrement = () => {
    if (product.quantity === 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to remove this product from cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteToBasket(product));
          Swal.fire({
            title: "Deleted!",
            text: `${(product.title || "Product")
              .split(" ")
              .slice(0, 2)
              .join(" ")} removed from cart.`,
            icon: "success",
          });
        }
      });
    }
    dispatch(decrementQuantity(product));
  };

  // Sepetten ürün silmek için bir fonksiyon oluşturuyoruz.
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this product from cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteToBasket(product));
        Swal.fire({
          title: "Deleted!",
          text: `${(product.title || "Product")
            .split(" ")
            .slice(0, 2)
            .join(" ")} removed from cart.`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="flex sm:flex-row flex-col justify-start items-center gap-4 w-full border border-gray-300 shadow-sm rounded-md py-4 lg:px-8 px-4">
      {/* Ürün resmi */}
      <div className="border border-gray-300 shadow-sm rounded-md py-2 px-6 mr-4">
        <Image
          src={product.image || "/default-image.png"}
          alt={product.title || "Product image"}
          className="object-contain w-full h-full min-w-[100px] min-h-[100px] lg:min-w-[200px] lg:min-h-[200px] max-w-[200px] max-h-[200px]"
          layout="intrinsic"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>

      {/* Ürün bilgileri */}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-6 w-full">
        <p className="lg:max-w-[450px] w-full">
          <span className="font-bold mr-[2px]">{product.title}</span>
          <span>{product.description}</span>
        </p>

        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1 border border-gray-300 rounded-md">
            <button
              onClick={() => handleDecrement()}
              className="px-3 py-1 bg-gray-300 rounded-tl-md rounded-bl-md hover:bg-gray-200 duration-300 text-lg font-semibold"
            >
              -
            </button>
            <span className="bg-white px-3 py-1 font-bold">
              {product.quantity}
            </span>
            <button
              onClick={() => handleIncrement()}
              className="px-3 py-1 bg-gray-300 rounded-tr-md rounded-br-md hover:bg-gray-200 duration-300 text-lg font-semibold"
            >
              +
            </button>
          </div>

          <p className="font-bold">${product.price}</p>

          <button onClick={() => handleDelete()}>
            <FaTrash className="text-red-500 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
