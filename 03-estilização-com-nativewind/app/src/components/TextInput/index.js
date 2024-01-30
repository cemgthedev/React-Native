import { TextInput } from "react-native";
import { twMerge } from "tailwind-merge";

function TextInputDefault({placeholder, className, ...props}) {
    return (
        <TextInput placeholder={placeholder} className={twMerge("px-2 py-1 rounded-sm border-2 border-zinc-950 focus:border-cyan-400", className)} {...props}/>
    );
}

export default TextInputDefault