import Link from "next/link";
import Image from "next/image";
import Currency from "@/components/currency";

interface prop {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
}
export default function ProductGrid({ products }: { products: prop[] }) {
  return (
    <>
      <section className="max-w-7xl mx-auto py-4 px-2 sm:py-24 sm:px-6 lg:px-8 w-full">
        <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id}>
              <a>
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={`/images/products/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-md font-medium text-gray-900">
                  <Currency amount={product.price} />
                </p>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
