import type { Config } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const config = {
	runtime: 'nodejs20.x'
} satisfies Config;

export const load = (async () => {
	return {};
}) satisfies LayoutServerLoad;
