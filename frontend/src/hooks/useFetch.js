import{useEffect,useState} from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json)
            }catch (error){
                setError(error);
            }finally {
                setLoading(false);
            }
        };
        fetchData()
    }, [url]);

    return {data,error,loading};
}

export default useFetch
