import { useEffect,useState } from "react";

function useFetch(url , name){
    //Fetch->first render->use Effect
    //Fetch->dynamic->url
    //Fetch->api's data

    let [data,setData] = useState(null);
    let [error,setError] = useState(null);
    let [loading,setLoading] = useState(null);

    useEffect(()=>{
        console.log(name)
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
    ,[url,name])

    return {data, loading, error};
}

export default useFetch;