export type IdF<T> = (x: T) => T;

export type Fn<A, R> = (arg: A) => R;

export type ComposeF<A, B, C> = (f: Fn<A, B>, g: Fn<B, C>) => Fn<A, C>;
