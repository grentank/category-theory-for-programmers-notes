/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ComposeF, IdF } from './types';

const identityFunction: IdF<unknown> = (x) => x;

const composeFunctions: ComposeF<number, string, boolean> = (f1, f2) => (x) => f2(f1(x));
