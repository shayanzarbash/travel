declare namespace IGlobal {
  type TFunctionVoid<T = never, G = void> = (arg?: T) => G;
}

export { IGlobal };
