import { createContext } from 'react';
import { Nullable } from './gameEngineTypes';

const CanvasContext = createContext<Nullable<CanvasRenderingContext2D>>(null);

export default CanvasContext;
