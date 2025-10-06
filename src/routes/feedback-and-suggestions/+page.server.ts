import { Feedback } from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const feedback = (
		await Feedback.find(
			{},
			{
				firstName: true,
				lastName: true,
				satisfaction: true,
				message:true
			}
		)
	).map((item) => {
		return {
			firstName: item.firstName,
			lastName: item.lastName,
			satisfaction: item.satisfaction,
      message:item.message,
			_id: item._id.toString()
		};	
	});
  return {feedback}
};  