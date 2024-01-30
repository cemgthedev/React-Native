import { Text } from "react-native";
import { twMerge } from "tailwind-merge";

function Heading({children, className, ...props}) {
    return (
        <Text className={twMerge("text-3xl font-bold", className)} {...props}>
            {children}
        </Text>
    );
}

export default Heading