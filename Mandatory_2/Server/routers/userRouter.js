import {Router} from "express";
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
        return res.send("Wrong username or password");
    }

    const isSame = await bcrypt.compare(password, foundUser.password);
    
    if(isSame && !req.session.loggedIn) {
        req.session.loggedIn = true;
        req.session.username = username;
        return res.send("You have been logged in to user: " + username);
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
        return res.send("There is no such user bruh");
    }
    
    // Hvis jeg bruger res.send her, så bugger den og sender en ikke admin videre vil admin siden
    if(foundUser.username === username && foundUser.isAdmin === 0) {
        return console.log("Adgang nægtet, brugeren er ikke Admin")

    }

    if(foundUser.password === password && foundUser.isAdmin === 1) {
        req.session.loggedIn = true;
        req.session.username = username;
        return res.send("You have been logged in as Admin user: " + username);
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

    const hashedPass = await bcrypt.hash(password, saltRounds);

    const { changes } = await db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPass]);

    if(changes === 1) {
        return res.send("You have been signed up");
    }

    res.send("Sign up failed")
});

// Get all users (til admin side)
router.get("/api/users", async (req, res) => {
    const users = await db.all(`SELECT * FROM users`);

    res.send( { data: users } );
});





// --------------------------------------LEG FRA IDAG 11-04 ------------------------------------------------------

router.post("/api/forgotPassword", async (req, res) => {
    const { username } = req.body;
    const { changes } = await db.run(`SELECT password FROM users WHERE username = ?`, [username]);

        
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'alexhaubro@gmail.com',
                pass: 'Badedyr01Badedyr01'
            }
        });
          
        // Text = skal indeholde password
        let mailDetails = {
            from: 'alexhaubro@gmail.com',
            to: username,
            subject: 'Keas Online Kiosk - Glemt password',
            text: 'Se dit glemte password nedenfor: '
        };
          
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        
        
        return res.send("Email send" + changes);

});




export default router;