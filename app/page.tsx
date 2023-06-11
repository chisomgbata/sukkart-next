import { db } from "@/drizzle";
import { product } from "@/drizzle/schema/products";
import { eq } from "drizzle-orm";

export default async function Home() {
  // const products = await getProducts();
  // console.log(products);
  return (
    <>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
      fugiat! Odio sed repudiandae, qui possimus voluptatibus repellat iure
      laborum ullam officia sint voluptatum quia laboriosam et magnam nam
      ducimus non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Aliquam rerum, dolorum voluptates qui, rem laborum molestiae nemo
      perspiciatis sint vitae dicta possimus ea saepe perferendis. Ullam
      recusandae libero ipsa fugiat? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Velit id, quas, expedita accusamus, culpa voluptatibus
      in consequatur laudantium sequi sunt molestias cupiditate possimus? Iste
      non ratione architecto adipisci, consectetur incidunt! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Amet eaque iure illo aspernatur
      impedit sequi maiores aut nostrum quo, placeat accusantium quam
      necessitatibus in dicta! Unde consequatur dolorem officiis nostrum! Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Officiis modi quaerat
      vitae aliquid consectetur, repellendus iure dicta est voluptatum nisi
      aspernatur perferendis! Libero delectus dicta nihil, ipsa cum labore
      rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Voluptates, fugiat! Odio sed repudiandae, qui possimus voluptatibus
      repellat iure laborum ullam officia sint voluptatum quia laboriosam et
      magnam nam ducimus non. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aliquam rerum, dolorum voluptates qui, rem laborum molestiae nemo
      perspiciatis sint vitae dicta possimus ea saepe perferendis. Ullam
      recusandae libero ipsa fugiat? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Velit id, quas, expedita accusamus, culpa voluptatibus
      in consequatur laudantium sequi sunt molestias cupiditate possimus? Iste
      non ratione architecto adipisci, consectetur incidunt! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Amet eaque iure illo aspernatur
      impedit sequi maiores aut nostrum quo, placeat accusantium quam
      necessitatibus in dicta! Unde consequatur dolorem officiis nostrum! Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Officiis modi quaerat
      vitae aliquid consectetur, repellendus iure dicta est voluptatum nisi
      aspernatur perferendis! Libero delectus dicta nihil, ipsa cum labore
      rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Voluptates, fugiat! Odio sed repudiandae, qui possimus voluptatibus
      repellat iure laborum ullam officia sint voluptatum quia laboriosam et
      magnam nam ducimus non. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aliquam rerum, dolorum voluptates qui, rem laborum molestiae nemo
      perspiciatis sint vitae dicta possimus ea saepe perferendis. Ullam
      recusandae libero ipsa fugiat? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Velit id, quas, expedita accusamus, culpa voluptatibus
      in consequatur laudantium sequi sunt molestias cupiditate possimus? Iste
      non ratione architecto adipisci, consectetur incidunt! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Amet eaque iure illo aspernatur
      impedit sequi maiores aut nostrum quo, placeat accusantium quam
      necessitatibus in dicta! Unde consequatur dolorem officiis nostrum! Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Officiis modi quaerat
      vitae aliquid consectetur, repellendus iure dicta est voluptatum nisi
      aspernatur perferendis! Libero delectus dicta nihil, ipsa cum labore
      rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Voluptates, fugiat! Odio sed repudiandae, qui possimus voluptatibus
      repellat iure laborum ullam officia sint voluptatum quia laboriosam et
      magnam nam ducimus non. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Aliquam rerum, dolorum voluptates qui, rem laborum molestiae nemo
      perspiciatis sint vitae dicta possimus ea saepe perferendis. Ullam
      recusandae libero ipsa fugiat? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Velit id, quas, expedita accusamus, culpa voluptatibus
      in consequatur laudantium sequi sunt molestias cupiditate possimus? Iste
      non ratione architecto adipisci, consectetur incidunt! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Amet eaque iure illo aspernatur
      impedit sequi maiores aut nostrum quo, placeat accusantium quam
      necessitatibus in dicta! Unde consequatur dolorem officiis nostrum! Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Officiis modi quaerat
      vitae aliquid consectetur, repellendus iure dicta est voluptatum nisi
      aspernatur perferendis! Libero delectus dicta nihil, ipsa cum labore
      rerum.
    </>
  );
}

async function getProducts() {
  return db.select().from(product).limit(10);
}
