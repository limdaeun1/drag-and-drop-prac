import axios from "axios";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadingOn , loadingOff , sequencing} from "store/modules/module";


const useGet = (url: string) => {
    const dispatch = useDispatch();

    const [res, setRes] = useState(null)
    const sequence = useSelector((state: any) => state.module.sequence);

    useEffect(() => {
        dispatch(loadingOn())
        axios
            .get(url)
            .then((res) => setRes(res.data))
            .catch((err) => console.log(err))
            .finally(()=> {
                dispatch(loadingOff())
            })
             // eslint-disable-next-line
    }, [url, sequence])

    return res
}




const post = (url:string, data:any, dispatch:any) => {
	call('post', url, data, dispatch)
}

const put = (url:string, data:any, dispatch:any) => {
	call('put', url, data, dispatch)
}

const patch = (url:string, data:any, dispatch:any) => {
	call('patch', url, data, dispatch)
}

// const remove = (url:string, id:string, dispatch:any) => {
// 	call('delete', url + '/' + id, null)
// }




const call = (method:string, url:string, data:any, dispatch:any) => { 
   
    dispatch(loadingOn())

    axios 
        .request({
            method: method,
            baseURL: url,
            data: data,
        })
        .then((res) => console.log("post"))
        .catch((err) =>console.log(err.message))
        .finally(() => {
            dispatch(sequencing())
            dispatch(loadingOff())
        })
}



export { useGet, post, put, patch}