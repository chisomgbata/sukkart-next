import { NewProduct } from "@/drizzle/schema/products";
import { slugify } from "@/utils/slug";
import { faker } from "@faker-js/faker";
const seedProduct = (quantity: number): NewProduct[] => {
  let products: NewProduct[] = [];
  for (let index = 0; index < quantity; index++) {
    const name = faker.commerce.productName();
    products.push({
      cost: faker.number.int(10000),
      description: faker.commerce.productDescription(),
      name: name,
      slug: slugify(name),
      image: faker.image.url(),
    });
  }

  return products;
};

export { seedProduct };
