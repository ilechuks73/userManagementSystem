export const fetch_db_data = async (callback) => {
  const res = await fetch('http://localhost:3300/subscribers')
  const db_data = await res.json()
  callback(db_data)
}

export const upload_db_data = async (new_sub, callback) => {
  const res = await fetch('http://localhost:3300/subscribers', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(new_sub)

  })
  new_sub = [await res.json()]
  callback(new_sub)
}

export const delete_db_data = async (id, callback) => {

  const res = await fetch(`http://localhost:3300/subscribers/${id}`, {
    method: 'DELETE'
  })
  const deleted_data = await res.json()
  callback(deleted_data)
}