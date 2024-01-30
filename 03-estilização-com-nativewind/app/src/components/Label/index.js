import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

function Label({children, className, ...props}) {
    return (
        <Text className={twMerge("text-xl font-semibold", className)} {...props}>
            {children}
        </Text>
    );
}

export default Label