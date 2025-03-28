"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useState, useMemo, useEffect } from "react";
import { fetchProducts } from "../redux/services/services";
import { useDispatch } from "react-redux";
import Loading from "./Loading";

const INITIAL_LOAD = 10; // İlk açılışta gösterilecek ürün sayısı
const LOAD_MORE = 5; // Butona tıklandıkça yüklenecek ürün sayısı

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Ürünleri API'den almak için dispatch ediyoruz
    dispatch(fetchProducts());
  }, []);

  const allProducts = useSelector(
    (state: RootState) => state.products.products
  );

  const productsStatus = useSelector(
    (state: RootState) => state.products.status
  );

  // Ürünleri sayfada göstermek için state tanımlıyoruz
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  // Tüm ürünlerin ilk açılışta gösterilecek olan kısmını alıyoruz useMemo ile
  const visibleProducts = useMemo(() => {
    return allProducts.slice(0, visibleCount);
  }, [visibleCount, allProducts]);

  // Load More butonuna tıklandığında çalışacak fonksiyon
  const handleLoadMore = () => {
    if (visibleCount >= allProducts.length) {
      alert("Daha fazla ürün yok!");
      return;
    }
    setVisibleCount((prevCount) => prevCount + LOAD_MORE);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Eğer yükleniyorsa, sadece "Ürünler yükleniyor..." mesajını göster */}
      {productsStatus === "loading" && (
        <>
          <Loading />
        </>
      )}

      {/* 2. Eğer yüklenme bitmişse ve ürün yoksa "Filtrelemenize uygun ürün bulunamadı." */}
      {productsStatus !== "loading" && allProducts.length === 0 && (
        <div className="w-full h-[60vh] flex justify-center items-center ">
          <p className="text-2xl font-semibold text-center mt-6">
            Filtrelemenize uygun ürün bulunamadı.
          </p>
        </div>
      )}

      {/* 3. Eğer yüklenme bitmişse ve ürünler varsa, ürünleri listele */}
      {productsStatus !== "loading" && allProducts.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
            {visibleProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>

          {/* Load More butonu */}
          <button
            onClick={handleLoadMore}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            disabled={visibleCount >= allProducts.length}
          >
            {visibleCount >= allProducts.length
              ? "Tüm Ürünler Yüklendi"
              : "Load More"}
          </button>
        </>
      )}
    </div>
  );
};

export default Products;
