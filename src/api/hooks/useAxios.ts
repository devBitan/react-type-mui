import axios from "axios"
import { useEffect, useState } from "react"

interface response<T> {
    content?:T,
    isLoading: boolean;
    hasErrors: boolean;
    error: {};
}

export const useAxios = <T>(url: string, params: object) => {
    const [state, setState] = useState<response<T>>({

        isLoading: true,
        hasErrors: false,
        error: {}
    })

    useEffect(() => {
        getAxios(url, params )
    }, [url])

    const getAxios = async (url:string, params: object) =>{

        try {
            const response = await axios.get(url, params)
            const { data } = response


            setState({
                content: data.content? data.content: data,
                isLoading: false,
                hasErrors: false,
                error: {
                    code: response.status,
                    message: response.status
                }})

        } catch (error: any) {

            setState({
                isLoading: false,
                hasErrors: true,
                error: {
                    code: error.response?.status,
                    message: error.response?.statusText
                    }

                })
            }
    };
    return {
        ...state
    }
}
