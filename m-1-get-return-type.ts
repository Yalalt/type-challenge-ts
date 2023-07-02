const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  // TODO: this ...v args
  // any type passed
  // return type check by infer
  type MyReturnType<T extends (...v:any) => any> = T extends (...v: any) => infer R ? R : never;
  
  type a = MyReturnType<typeof fn> // should be "1 | 2"