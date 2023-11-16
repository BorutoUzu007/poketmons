import prisma from "../prisma";

export async function getUserData(email: string) {
    try {
        const data = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        const name = data?.name;
        const image = data?.image;
        return { name, image };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}
