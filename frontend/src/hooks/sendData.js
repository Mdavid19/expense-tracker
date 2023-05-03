function sendData(url,data){
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const sendData = async()=>{
            try{
                const response = await fetch(url,{
                    method:"POST",
                    headers:{
                        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
                    },
                    body:data.json()
                })

            }catch (error){
                setError(error)
            }finally {
                setLoading(false)
            }
        }
        sendData()
    }, [url]);
    return{error,loading}
}

export default sendData
