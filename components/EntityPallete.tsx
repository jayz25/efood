"use client";

import Link from "next/link";
import { Entity } from "./Entity";

export const EntityPellete = ({restaurents}) => {
    return (
        <div className="w-full flex flex-wrap">
            {restaurents?.map((entity) => {
                return (
                    // Make sure to add key here
                    <div className="basis-1/3">
                        <Link href={`restaurent/${entity.id}`}>
                            <Entity entity={entity}/>
                        </Link>
                    </div>

                    )
                })}
        </div>
    )
}