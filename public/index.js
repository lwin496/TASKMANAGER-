let addTask = (data, type) => { 
      let body = {
            method: type,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        if (!data) {
            body = {
                method: type,
                headers: { 'Content-Type': 'application/json' },
            }
        }
        console.log("Post")
        let troll = fetch("/tasks", body)
        return troll
}


addTask({chungus:true},"POST")
