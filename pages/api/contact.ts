const nodemailer = require("nodemailer");

const handleEmailSubmission = async (req: any, res: any) => {

    const { name, email, message } = req.body;

    if (name && email && message) {

        const contactEmail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
            },
        });

        contactEmail.verify((error: any) => {
            if (error) {
            console.log(error);
            } else {
            console.log("Ready to Send");
            }
        });
    } else {
        res.status(400).json({error: 'name, email, and message are required'})
    }
}




  export default async function handler(req : any, res : any) {

    if (req.method === 'POST') {
        handleEmailSubmission(req, res);
    }
  }