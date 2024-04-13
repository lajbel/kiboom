type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

export type FlipOptional<T> = (
    & Required<Pick<T, OptionalKeys<T>>>
    & Partial<Omit<T, OptionalKeys<T>>>
) extends infer O ? { [K in keyof O]: O[K] }
    : never;
