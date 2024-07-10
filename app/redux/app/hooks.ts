/**
* Copyright (c) 2024 Wonderbricks Limited
* All rights reserved.
*
* This source code is proprietary and confidential. It is not to be
* distributed or copied without express written permission from Wonderbricks Limited. 
*/
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;