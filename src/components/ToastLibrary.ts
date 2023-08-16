import { ToastContainer, toast } from 'react-toastify';

export const notifySuccess = (props: { data: any }) => {
    console.log('Toast Message: ', props?.data)
    return toast.success(props?.data?.message);
}

export const notifyDanger = (props: { data: any }) => {
    console.log('Toast Message: ', props?.data)
    return toast.error(props?.data?.message);
}