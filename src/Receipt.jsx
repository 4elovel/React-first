function Receipt({ title, guide,photo,ingredients }) {
    return (
      <div>
        <h2>Dish</h2>
        <h3>{title}</h3>
        <img height='100px' width='100px' src={photo} />
        <div>{guide}</div><br></br>
        <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      </div>
    )
  }
  
  export default Receipt