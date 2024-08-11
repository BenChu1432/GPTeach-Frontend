/**
* Copyright (c) 2024 Wonderbricks Limited
* All rights reserved.
*
* This source code is proprietary and confidential. It is not to be
* distributed or copied without express written permission from Wonderbricks Limited. 
*/
export type WBResponse<T> =
    {
        success: true
        result: T
    } |
    {
        success: false,
        errorMessage: string
    }


