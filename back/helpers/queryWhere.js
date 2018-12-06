function queryWhere(obj){
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const keysValues = []
  for (let i = 0 ; i < keys.length ; i += 1) {
    if (isNaN(values[i])){
      keysValues.push(`${keys[i]} = '${values[i]}'`)
    }
    else {
      keysValues.push(`${keys[i]} = ${values[i]}`)
    } 
  }
  return keysValues.join(' AND ')
}

module.exports = queryWhere