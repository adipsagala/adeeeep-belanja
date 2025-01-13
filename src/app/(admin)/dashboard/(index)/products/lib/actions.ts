"use server";

import { schemaProduct } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";

export async function storeProduct(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = schemaProduct.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
    brand_id: formData.get("brand_id"),
    category_id: formData.get("category_id"),
    location_id: formData.get("location_id"),
    stock: formData.get("stock"),
    image: formData.getAll("images"),
  });
  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  return redirect("/dashboard/products");
}
