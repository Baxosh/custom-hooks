


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
//
// function useRequest(url, method = 'GET', waitingData = null) {
//     const [data, setData] = useState([])
//     const [error, setError] = useState([])
//     const [loading, setLoading] = useState(true)
//
//     function request() {
//         setLoading(true)
//         axios({
//             method,
//             url,
//             data,
//         })
//             .then((res) => setData(res.data))
//             .catch((err) => setError(err))
//             .finally(() => setLoading(false))
//     }
//
//     return { data, loading, error, request }
// }
//
// export function useLoad(url) {
//     const request = useRequest(url)
//
//     useEffect(() => {
//         request.request()
//     }, [])
//
//     return request
// }
//
// export function usePostRequest(url, data, params = null) {
//     const request = useRequest(url, 'post', data)
//     request.request()
// }
