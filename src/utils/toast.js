import toast from "react-hot-toast"
import formatErrorMessage from "./formatters"

const baseConfig = {
    duration: 2000,
    position: 'top-right',
    style: {
        minWidth: '250px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }
}

export const showToast = {
    success: (message) => toast.success(message, baseConfig),
    error: (message) => toast.error(formatErrorMessage(message), baseConfig)
}