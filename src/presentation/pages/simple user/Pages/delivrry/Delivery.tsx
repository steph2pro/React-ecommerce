import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react"

const Delivery = () => {
  return (
    <>
      <div className="lg:container mx-auto p-7  bg-[#f0f2f3] shadow-md rounded-b-2xl">
        <div className="grid grid-cols-4">
          <div className="dilivery_wrapper">
            <div className="flex items-center  gap-2">
             <span className="text-[3rem]">100</span> <Percent size='3rem'/>
             <div>
              <h3 className="text-base text-[#232443] capitalize font-inter font-medium mb-2.5">Interactive</h3>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">Reponseses rapides</p>
             </div>
            </div>
          </div>

          <div className="dilivery_wrapper">
            <div className="flex items-center  gap-4">
              <Truck size='3rem'/>
             <div>
              <h3 className="text-base text-[#232443] capitalize font-inter font-medium mb-2.5">Livraison</h3>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">Quelque soit la destination</p>
             </div>
            </div>
          </div>

          <div className="dilivery_wrapper">
            <div className="flex items-center  gap-4">
              <Clock3 size='3rem'/>
             <div>
              <h3 className="text-base text-[#232443] capitalize font-inter font-medium mb-2.5">TechMarket</h3>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">24h/24 - 7j/7</p>
             </div>
            </div>
          </div>

          <div className="dilivery_wrapper">
            <div className="flex items-center  gap-4">
              <ShieldCheck size='3rem'/>
             <div>
              <h3 className="text-base text-[#232443] capitalize font-inter font-medium mb-2.5">TechMarket</h3>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">toujours a l'ecoute</p>
             </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Delivery