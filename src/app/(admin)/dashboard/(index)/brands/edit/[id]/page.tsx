import { Tedit } from "@/types";
import React from "react";
import FormBrand from "../../_components/form-brand";
import { getBrandbyId } from "../../lib/data";
import { redirect } from "next/navigation";

export default async function EditPage({ params }: Tedit) {
  // const brand = await getBrandbyId(params.id)

  // if (!brand) {
  //     return redirect('/dashboard/brands')    
  // }

  // return <FormBrand type="EDIT" data={brand} />;
  try {
    const brand = await getBrandbyId(params.id);

    // If the brand is not found, redirect to the brands dashboard
    if (!brand) {
      return redirect('/dashboard/brands');
    }

    // Render the form with the brand data
    return <FormBrand type="EDIT" data={brand} />;
  } catch (error) {
    console.error('Error fetching brand:', error);
    // Optionally, you can redirect to an error page or show a message
    return redirect('/dashboard/brands');
  }
}
