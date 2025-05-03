import brand_1 from '../../../../../../assets/brands/brand_1.png'
import brand_2 from '../../../../../../assets/brands/brand_2.png'
import brand_3 from '../../../../../../assets/brands/brand_3.png'
import brand_4 from '../../../../../../assets/brands/brand_4.png'
import brand_5 from '../../../../../../assets/brands/brand_5.png'
import brand_6 from '../../../../../../assets/brands/brand_6.png'
import brand_7 from '../../../../../../assets/brands/brand_7.png'


const Brand = () => {

    const brand = [
        {
            id:1,
            img:brand_1
        },
        {
            id:2,
            img:brand_2
        },
        {
            id:3,
            img:brand_3
        },
        {
            id:4,
            img:brand_4
        },
        {
            id:5,
            img:brand_5
        },
        {
            id:6,
            img:brand_6
        },
        {
            id:7,
            img:brand_7
        }
    ]
  return (
    <div className="lg:continer mx-auto">
        <div className="grid grid-cols-7 items-center justify-center gap-5">
            {
                brand.map((brand)=>(
                    <div key={brand?.id} className="brand_item">
                        <img src={brand.img} alt="brand"  className='w-auto h-auto'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Brand