import bcrypt from "bcrypt";
const saltRounds = 12;
const plainTextPassword = "hunter12";
const hashedPassword = "$2b$12$vTUBuYJvHlIKb6BCqIhn9uWptmkiuju9tff1EYusnUvVEk9FnfpyW";



async function loginRouter() {
    const isSame = await bcrypt.compare(plainTextPassword, hashedPassword);
    console.log(isSame);
}


async function signupRouter() {
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    console.log(hashedPassword);
}

loginRouter();
signupRouter();



console.log(bcrypt);