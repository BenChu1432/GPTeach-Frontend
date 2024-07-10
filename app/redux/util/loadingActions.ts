import appSlice from "../slices/appSlice";

type Action = {
    meta: { arg: { showLoading?: boolean } };
};

export const loadingActions = (thunkAction: any) => {
    return [
        {
            action: thunkAction.pending,
            effect: (action: any, api: any) => {
                const showLoading = (action as Action).meta?.arg?.showLoading;
                if (showLoading != null && !showLoading) {
                    return;
                }
                api.dispatch(appSlice.actions.setLoading({ open: true }));
            },
        },
        {
            action: thunkAction.fulfilled,
            effect: (action: any, api: any) => {
                api.dispatch(appSlice.actions.setLoading({ open: false }));
            },
        },
        {
            action: thunkAction.rejected,
            effect: (action: any, api: any) => {
                api.dispatch(appSlice.actions.setLoading({ open: false }));
            },
        },
    ];
};
