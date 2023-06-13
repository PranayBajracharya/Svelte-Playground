import { GITHUB_ID, GITHUB_SECRET, SERVICE_ROLE_SECRET, SUPABASE_URL } from '$env/static/private';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleAuth = SvelteKitAuth({
	adapter: SupabaseAdapter({
		url: SUPABASE_URL,
		secret: SERVICE_ROLE_SECRET
	}) as any,
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as any]
}) satisfies Handle;

export const handle = sequence(handleAuth);
