
// Helpers
import { formatMoney } from "@/app/helpers/formatMoney";

export default function MenuItem({ name, ingredients, price, priceSmall, priceBig }) {
    return (
        <div className={"py-5 px-6 sm:px-10"}>
            <div className={"flex items-end justify-between gap-3 text-lg w-full"}>
                <div className={"font-semibold"}>{name}</div>
                <div className={"text-primary2 font-semibold"}>
                    {price ? (<div>{formatMoney(price)}</div>) : null}
                    <div className={"flex items-center gap-4"}>
                        {priceSmall ? (<div className={"flex flex-col items-center"}>
                            <div className={"text-neutral-500 font-normal text-base"}>klein</div>
                            <div>{formatMoney(priceSmall)}</div>
                        </div>) : null}
                        {priceBig ? (<div className={"flex flex-col items-center"}>
                            <div className={"text-neutral-500 font-normal text-base"}>groß</div>
                            <div>{formatMoney(priceBig)}</div>
                        </div>) : null}
                    </div>
                </div>
            </div>
            {ingredients ? (
                <div className={"text-sm"}>
                    {ingredients}
                </div>
            ) : null}
        </div>
    )
}