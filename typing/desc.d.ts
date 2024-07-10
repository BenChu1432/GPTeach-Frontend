declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

declare module "react-native-double-tap" {
    import { ComponentType } from "react";
    import { ViewProps } from "react-native";

    interface DoubleTapProps extends ViewProps {
        delay?: number;
        doubleTap?: () => void;
        singleTap?: () => void;
    }

    const DoubleTap: ComponentType<DoubleTapProps>;

    export default DoubleTap;
}
