"use client";

import { Entity } from "./Entity";

export const EntityPellete = ({ entities }) => {
    return (
        <div className="w-full flex flex-wrap">
            {entities?.map((entity) => {
                return (
                    // Make sure to add key here
                    <div className="basis-1/3">
                        <Entity entity={entity}/>
                    </div>

                    )
                })}
        </div>
    )
}