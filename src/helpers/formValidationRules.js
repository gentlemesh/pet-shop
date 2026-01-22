const rules = {
    name: {
        required: "Name is required",
    },
    phone: {
        required: "Phone number is required",
        pattern: {
            value: /^[\d\s+-]+$/i,
            message: "Invalid phone number",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
        },
    },
}

export default rules;