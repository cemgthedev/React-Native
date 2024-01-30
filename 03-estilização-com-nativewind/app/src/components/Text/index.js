import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

function TextDefault({children, className, ...props}) {
    return (
        <Text className={twMerge("text-md", className)} {...props}>
            {children}
        </Text>
    );
}

export default TextDefault