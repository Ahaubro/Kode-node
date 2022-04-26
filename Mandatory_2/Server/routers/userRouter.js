import {application, Router} from "express";
import db from "../database/createConnection.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

const saltRounds = 12;

const router = Router();


// Login
router.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await db.get("SELECT * FROM users WHERE username = ?", [username]);

    if(!foundUser) {
        return res.status(404).send("Wrong username or password");
    }

    const isSame = await bcrypt.compare(password, foundUser.password);
    
    if(isSame && !req.session.loggedIn) {
        req.session.loggedIn = true;
        req.session.username = username;
        return res.status(201).send("You have been logged in to user: " + username);
    }

    if(req.session.loggedIn) {
        return res.send("You are already logged in");
    }
});




// Leg med admin login siden, virker såment fint
router.post("/api/adminLogin", async (req, res) => {
    const { username, password } = req.body
    const foundUser = await db.get("SELECT * FROM users where username = ?", [username]);
    
    

    if(!foundUser) {
        return res.status(404).send("Der er ingen Admin bruger med det brugernavn");
    }
    
    // Hvis jeg bruger res.send her, så bugger den og sender en ikke admin videre vil admin siden
    if(foundUser.username === username && foundUser.isAdmin === 0) {
        return res.status(404).send("Adgang nægtet, brugeren er ikke Admin")

    }

    const isSame = await bcrypt.compare(password, foundUser.password);


    if(isSame && foundUser.isAdmin === 1) {
        req.session.loggedIn = true;
        req.session.username = username;
        return res.status(201).send("You have been logged in as Admin user: " + username);
    }
});




// Logut
router.get("/api/logout", (req, res) => {
    if(req.session.loggedIn) {
        req.session.loggedIn = false;
        const username = req.session.username;
        return res.send("You have been logged out from user: " + username);
    } 

    res.send("You are not logged in")
});




// Signup
router.post("/api/signup", async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await db.get("SELECT * FROM users WHERE username = ?", [username])

   if(foundUser) {
        return res.status(404).send("There is already a user with that email")
    }

    const hashedPass = await bcrypt.hash(password, saltRounds);

    const { changes } = await db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPass]);

    if(changes === 1) {
        sendMail(username);
        return res.send("You have been signed up");
    }

    res.send("Sign up failed")
});




// Get all users (til admin side)
router.get("/api/users", async (req, res) => {
    const users = await db.all(`SELECT * FROM users`);

    res.send( { data: users } );
});




function sendMail(username) {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'keakiosk@gmail.com',
            pass: 'KodeordKodeord'
        }
    });
      
    // Text = skal indeholde password
    let mailDetails = {
        from: 'keakiosk@gmail.com',
        to: username,
        subject: 'Keas Online Kiosk',
        html:'<p> Tak fordi du oprettede en konto hos os! <br> Kom igang med at shoppe nu: <a href="http://localhost:9998/"> Klik her </a> </p>'
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}



export default router;