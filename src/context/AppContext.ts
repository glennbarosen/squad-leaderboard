import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

interface IAppContext {
    [x: string]: any;
    state: () => {}
}
// Create Context Object
export const AppContext = createContext<IAppContext | null>(null);