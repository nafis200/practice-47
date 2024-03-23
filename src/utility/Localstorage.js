

const getStoredJob = () =>{
    const storedJob = localStorage.getItem('job-application')
    if(storedJob){
        return JSON.parse(storedJob)
    }
    return []
}

const saveJobapplication = id => {
     const stored = getStoredJob();
     const exist = stored.find( job=> job === id)
     if(!exist){
        stored.push(id);
        localStorage.setItem('job-application',JSON.stringify(stored))
     }
}

export{saveJobapplication,getStoredJob}