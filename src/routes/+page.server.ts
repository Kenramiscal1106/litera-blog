import type { Actions } from "./$types";

export const actions: Actions = {
  sendFeedback: async({request}) => {
    const formData= await request.formData()
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData)
  }
};