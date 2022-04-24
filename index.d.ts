import { Request, Response, NextFunction } from "express";
import { Namespace } from "cls-hooked";

/** Express.js middleware for handle context for every request */
type expressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

type ContextReturn = {
  // clsBind binded function to set value from continuation local storage by key
  set: Function;
  // clsBind binded function to get value from continuation local storage by key
  get: Function;
  // clsBind binded function to set value from continuation local storage by key with timeout.
  setWithTimeout: Function;
  // clsBind binded function to get value from continuation local storage by key and return as a function
  getCallback: Function;
  // clsBind binded function to set value from continuation local storage by object data
  multiSet: Function;
  // gets the continuation namespace data
  namespace: Namespace;
};

/**
 * Create context, will return the method binded to continuation local storage context.
 * @returns {object}
 */
export declare function context(): ContextReturn;

/**
 * Call the context middleware
 * @param {object} context - object return value of context function call
 * @returns {void}
 */
export declare function contextMiddleware(context: object): expressMiddleware;
