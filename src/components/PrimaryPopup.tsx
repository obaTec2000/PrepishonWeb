import React, { useEffect, useState } from "react";

const PrimaryPopup = (props: { poptype: string, message: string, isVisible: boolean }) => {

    const [internalIsVisible, setInternalIsVisible] = useState(props.isVisible);

    useEffect(() => {
        setInternalIsVisible(props.isVisible);
    }, [props.isVisible]);

    useEffect(() => {
        if (internalIsVisible) {
            const timeout = setTimeout(() => {
                setInternalIsVisible(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [internalIsVisible]);

    if (!internalIsVisible) {
        return null;
    }

    return (
        <div className="w-[1440px] h-14 bg-red-500 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-14 p-4 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="self-stretch pr-8 justify-start items-start gap-2 inline-flex">
                            <div className="w-[311px] text-white text-base font-semibold leading-normal">{props?.message}</div>
                        </div>
                    </div>
                    <div className="p-2.5 rounded-lg justify-center items-center flex">
                        <div className="w-5 h-5 relative" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrimaryPopup