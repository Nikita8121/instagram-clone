const activeLabelStyles = {
    transform: "scale(0.85) translateY(-12.5px)"
};
export const Form = {
    baseStyle: {
        container: {
            input: {
                fontSize: '12',
                background: 'rgb(250,250,250)',
            }
        }

    },
    variants: {
        floating: {
            container: {
                _focusWithin: {
                    label: {
                        ...activeLabelStyles
                    }
                },
                "input:not(:placeholder-shown) + label": {
                    ...activeLabelStyles
                },
                label: {
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: "absolute",
                    fontWeight: 'regular',
                    color: 'secondary',
                    fontSize: '12',
                    pointerEvents: "none",
                    mx: '8px',
                    my: 2.5,
                    transformOrigin: "left top"
                },
                input: {
                    px: '8px',
                    pt: '9px',
                    pb: '7px'
                }
            }
        }
    }
}
