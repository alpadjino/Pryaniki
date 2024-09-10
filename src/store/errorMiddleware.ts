import { isAction, isFulfilled  } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

interface RejectedPayload {
	error_text?: string;
	error_code?: number;
};

const isErrorPayload = (payload: unknown): boolean => {
    if (payload && payload.hasOwnProperty('error_text')) return true;

    return false;
};

export const rtkQueryErrorHandler: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
	if (isAction(action) && isFulfilled(action)) {
        const payload = action.payload; 
        if (isErrorPayload(payload)) {
            const errorText = (payload as RejectedPayload).error_text;
            throw new Error(errorText);
		}
	}
	return next(action);
};
