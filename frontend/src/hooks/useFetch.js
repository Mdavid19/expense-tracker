import{useEffect,useState} from "react";

function useFetch(url,options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url,options)
            const json = await response.json();
            setData(json)
        }catch (error){
            setError(error);
        }finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData()
    }, [url]);

    return {data,error,loading};
}

export default useFetch
