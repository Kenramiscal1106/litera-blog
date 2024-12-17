import { Feedback } from "$lib/db";
import { error } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
  sendFeedback: async({request}) => {
    const formData= await request.formData()
    const jsonData = Object.fromEntries(formData.entries());

    try {
			await Feedback.create(jsonData);
      return {
        success:true,
        message:"response successfully recorded"
      }
		} catch {
			throw error(500, 'an error occured');
		}
  }
};