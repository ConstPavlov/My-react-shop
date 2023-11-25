import React, { createContext } from 'react';

export type TypeChangeContext = any;

const ChangeContext = createContext<TypeChangeContext | undefined>(undefined);

export default ChangeContext;
