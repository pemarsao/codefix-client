import { NextRequest, NextResponse } from "next/server";
import { loginFormSchema } from "@/app/lib/validation/LoginValidation"; 

export async function POST(request: NextRequest) {
    try {
        const { email, password } = loginFormSchema.parse(await request.json());
        console.log(`Email: ${email}, Password: ${password}`);

        return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } catch (error: any) {
        console.error(error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}   