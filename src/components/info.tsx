import { LocationModel } from "../../public/models/location.model"
import InfoItem from "./info-item";

interface InfoProps {
    model: LocationModel | null;
}

export default function Info({model}: InfoProps) {
    return (
        <div className="flex justify-between z-20 bg-white p-6 w-4/6 rounded-xl mt-24 mx-auto divide-x md:flex-col md:divide-none md:items-center md:mt-3 md:w-72">
            <InfoItem header="IP Address" content={model?.ip} />
            <InfoItem header="Location" content={model?.location?.city} />
            <InfoItem header="Timezone" content={model?.location?.timezone} />
            <InfoItem header="Isp" content={model?.isp} />
        </div>
    )
}