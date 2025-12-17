import { getUserById } from "@/app/lib/settings";
import { notFound } from "next/navigation";
import React from "react";


async function UserSettings({ params }: { params: { id: string } }) {
    const { id } = await params
    const {name, email, website} = await getUserById(id);

    if(!name){
        notFound();
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">User Page {id}</h1>

            <div 
                className="
                border border-dashed 
                border-red-500
                p-4"
            >

                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Website: {website}</p>

            </div>
        </div>
    );
}


export default UserSettings;