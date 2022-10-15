import Category from './Category'
import './categories.scss'

const categories = [
       
    {
      title: "Hats",
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },

    {
      title: "Jackets",
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },

    {
      title: "Sneakers",
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },

    {
      title: "Womens",
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },

    {
      title: "Mens",
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    }

  ]

  const Categories = () => {
    return(
        <div className="categories">
              
            {categories.map( ({title, imageUrl})=>(
              <Category title={title} imageUrl={imageUrl} />
             ))}

        </div>
    )
  }

  export default Categories