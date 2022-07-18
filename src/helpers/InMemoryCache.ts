const CACHE_FOR_DEFAULT = 1_000 * 60 * 30; // cache for 30 minutes by default

interface Cache<T> {
	[key: string]: {
		cachedValue?: T;
		cacheFor: number;
	};
}

export class InMemoryCache<T> {
	private cache: Cache<T> = {};

	public constructor(private readonly cacheFor?: number) {}

	public set(key: string, value: T): void {
		this.cache[key] = {
			cachedValue: value,
			cacheFor: new Date().getTime() + (this.cacheFor || CACHE_FOR_DEFAULT)
		};
	}

	public get(key: string): T {
		const cache = this.cache[key];

		if (!cache) {
			return;
		}

		return cache.cachedValue;
	}

	public expired(key: string): boolean {
		const cache = this.cache[key];

		if (!cache) {
			return;
		}

		const currentTime = new Date().getTime();
		return currentTime > cache.cacheFor;
	}
}
