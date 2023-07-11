"use client";

import Link from "next/link";
import { Entity } from "./Entity";

export const EntityPellete = ({restaurents}) => {
    return (
        <div className="w-full flex flex-wrap">
            {restaurents?.filter((entity) => entity.menu_id !== null).map((entity) => {
                return (
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3" key={entity.id}>
                        <Link href={`restaurent/${entity.id}`}>
                            <Entity entity={entity}/>
                        </Link>
                    </div>
                    )
                })}
        </div>
    )
}