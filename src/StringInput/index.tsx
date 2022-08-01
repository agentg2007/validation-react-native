import {
    InputComponentType,
    useValidationState,
    withValidation
} from "@nthity/validation";
import React from "react";
import {
    TextInput, TextInputProps
} from "react-native";
import { mergeStyles } from "../helpers";
import { useStyles } from "../hooks";

const StringInput = ({
    componentId = "",
    style,
    value,
    onChange,
    ...textInputProps
}: InputComponentType<string> & TextInputProps) => {
    const { error } = useStyles();
    const { valid } = useValidationState(componentId)
    return <TextInput
        {...textInputProps}
        key={componentId}
        style={mergeStyles(style, valid ? {} : error)}
        value={value}
        onChangeText={onChange}
    />
};
export default withValidation(StringInput, "StringInput");
