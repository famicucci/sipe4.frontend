// "use client"
// import { setLoading, setPrices } from "@/redux/states/price"
// import { RootState } from "@/redux/store"
// import { useState, useEffect, useRef } from "react"
// import { useSelector, useDispatch } from "react-redux"

// // interface TableProps {
// //   data: any
// //   columns: any
// //   handleInView: (status: any) => void
// //   loading: boolean
// //   setLoading: (status: boolean) => void
// // }

// const InfiniteScroll = () => {
//   const [inview, setInview] = useState(false)
//   const [page, setPage] = useState(1)

//   const dispatch = useDispatch()

//   const { prices, loading } = useSelector((state: RootState) => state.price)

//   const isloading = useRef<any>(null)

//   const handleview = (status: any) => {
//     setInview(status)
//   }
//   useEffect(() => {
//     dispatch(setPrices(prices))
//     setPage(1)
//   }, [prices, dispatch])

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         console.log("Spinner visible - Scroll infinito funcionando")
//         handleview(true)
//         setLoading(true)
//       } else {
//         handleview(false)
//         setLoading(false)
//       }
//     })
//     observer.observe(isloading.current && isloading.current)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <tr className="p-20 text-center" ref={isloading}>
//       {loading && <td>Cargando...</td>}
//     </tr>
//   )
// }

// export default InfiniteScroll
