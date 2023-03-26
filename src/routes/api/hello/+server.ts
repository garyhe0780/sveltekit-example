import type { RequestHandler } from './$types'


export const GET: RequestHandler = async ({ request }) => {
	return new Response('world');
}

