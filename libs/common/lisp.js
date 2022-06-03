export const delay = (e) => () => e;
export const force = (p) => p();
export const cons = (x, y) => (p) => p ? x : y;
export const car = (c) => c(true);
export const cdr = (c) => c(false);
export const stream = (x, y) => cons(x, delay(y));
export const head = (s) => car(s);
export const tail = (s) => force(cdr(s));
