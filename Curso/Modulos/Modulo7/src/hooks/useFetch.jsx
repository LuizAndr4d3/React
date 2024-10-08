import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //post

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //loading
    const [loading, setLoading] = useState(false)

    //tratando erros
    const [error, setError] = useState(null)

    //delete
    const [itemId, setItemID] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        setMethod(method)
        } else if(method === 'DELETE'){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            })
        setMethod(method)
        setItemID(data)
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)

            try{
                const res = await fetch(url)
                const data = await res.json()

                setData(data)
            } catch (error){
                console.log(error.message)
                setError("Houve algum ero ao carregar os dados!")
            }

            setLoading(false)
        }

        fetchData()

    }, [url, callFetch])

    //post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === 'POST'){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json();
    
                setCallFetch(json)
            } else if(method === 'DELETE'){
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(json)
            }
        }

        httpRequest();
    }, [config, method, url])


    return { data, httpConfig, loading, error }
}

