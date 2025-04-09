// Root page with SSR
import { useState } from 'react';
import Head from "next/head";
import { GetServerSideProps } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import { Product } from "@/types/product";
import { fetchProducts } from "@/utils/api";
import Filters from '../components/Filters';

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};

export default function Home({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Browse our collection of products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="hero">
          <div className="container">
            <h1>Our Products</h1>
            <p>Discover our wide range of high-quality products</p>
          </div>
        </section>

        <div className="container">
          <div className="mainContent">
            <Filters />
            <div className="productGrid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  isOutOfStock={product.isOutOfStock}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
