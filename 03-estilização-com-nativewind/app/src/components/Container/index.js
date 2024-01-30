import { View } from "react-native";
import { twMerge } from "tailwind-merge";

function Container({children, className, ...props}) {
    return (
        <View className={twMerge("flex justify-start items-start h-full w-full p-4", className)} {...props}>
            {children}
        </View>
    );
}

export default Container