import bcrypt from "bcrypt";
const saltRounds = 12;
const plainTextPassword = "hunter12";
const hashedPassword = "$2b$12$vTUBuYJvHlIKb6BCqIhn9uWptmkiuju9tff1EYusnUvVEk9FnfpyW";





    const isSame = await bcrypt.compare(plainTextPassword, hashedPassword);
    console.log(isSame);



    const resultHashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    console.log(hashedPassword);





console.log(bcrypt);