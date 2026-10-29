"use client";
import {useEffect, useState} from "react"

export default function ResourcesPage() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [resources, setResources] = useState([])
 
  useEffect(()=>{
    fetch(/api/resources)
    .then((response)=> response.JSON())
    .then((data) =>{
      setResources(data)
      setLoading(false)
      setSuccess(true)
    } )
  })
   .catch((error)=>{
    setLoading(false)
    setError(error.message)
    setSuccess(true)
   })


  return (
    <div className="container">
      <h1 className="page-title">Learning Resources</h1>
      {/* TODO: Fetch resources from /api/resources using useEffect, handle loading/error/success states */}
    </div>
  );
}
