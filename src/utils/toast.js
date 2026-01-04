import { toast } from "react-toastify"


export const showLoadingToast = (message) => {
    return toast.loading(message)
}

export const showSuccessToast = (toastId, message) => {


    toast.update(toastId, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true
    })
}

export const showErrorToast = (toastId, message) => {
    toast.update(toastId, {
        render: message,
        type: "error",
        autoClose: 3000,
        closeOnClick: true,
        isLoading: false
    })
}

