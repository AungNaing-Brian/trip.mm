import { useEffect,useState } from "react";

function useFetch(url){
    //Fetch->first render->use Effect
    //Fetch->dynamic->url
    //Fetch->api's data

    let [data,setData] = useState(null);
    let [error,setError] = useState(null);
    let [loading,setLoading] = useState(null);

    useEffect(()=>{
        let abortController = new AbortController();
        let signal = abortController.signal;
        setLoading(true);
        fetch(url,{signal})
        .then(res=>{
            if(!res.ok){
                throw Error('something went wrong');
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setError(null);
            setLoading(false);
        })
        .catch(e=>{
            setError(e.message);
        })

        //cleanup function
        return ()=>{
            abortController.abort();
        }
    }
    ,[url])

    return {data, loading, error};
}

export default useFetch;