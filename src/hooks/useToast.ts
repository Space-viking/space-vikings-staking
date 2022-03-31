import Toast, { toastTypes } from "components/Toast"

export const useToast = () => {
    const toast = (type: string, title: string, discription: string) => Toast({ type, title, discription })
    return { toast, toastTypes }
}