import React,{useState, useEffect} from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])




  return (
    <div className='container'>
      <div className='row'>
        <div className="col-sm-12 text-center p-2">
        <h6> <b> Wel Come To Home!</b></h6>
        <hr />
        <h3> <b> Users Information </b></h3>
        
        </div>
        {users.length > 0 && (
          <div className="col-sm-4">
        <ul>
          {users.map(user => (
            <li key={user.id}> <h5> {user.userId}  <strong > {user.title}</strong> </h5> <p> {user.body}</p></li>
          ))}
        </ul>
        </div>
      )}
        
      </div>
    </div>
  )
}

export default Home
