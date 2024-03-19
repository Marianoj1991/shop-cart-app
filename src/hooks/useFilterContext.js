import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export function useFilterContext () {
  const context = useContext(FilterContext);

  if(context === undefined) {
    throw new Error('Try to access to a context, not beeing in it');
  }

  return context;
}