import { defineEnvVars } from '@sveltejs/kit/env';
import { building } from '$app/env';

export const variables = defineEnvVars({
	LASTFM_KEY: {
		schema: (value: string | undefined) => {
			if (value === undefined) {
				if (building) return '';
				throw new Error('LASTFM_KEY is required');
			}
			return value;
		}
	}
});
