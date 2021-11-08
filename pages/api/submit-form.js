import { useRouter } from "next/router";
import nc from 'next-connect';
import cors from "cors";
const { Client } = require('@notionhq/client');
const nodemailer = require('nodemailer');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const CLIENT_ID = '1091591397899-617q8vtabej78db09k8h07nlln8pmbc8.apps.googleusercontent.com'
const CLIENT_SECRET = 'u_9j6yx1qJ8Mh4lGR64qcil-'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04Y6p1eQkl_WTCgYIARAAGAQSNwF-L9IrtUpVHmcleh154TWFRKUSXCtmIRLGBbUG9fLlpZEW295UuOiuHlLbIgqLcUCje1F5H7k'
// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
// mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
      try {
        const { Name, Phone, Email, Message } = JSON.parse(req.body); // Coming as a string from the contact page, parsing the json
       
        //   const message = `
      //   You just received a form submission from ${body.Name}\r\n
      //   Best Wishes!
      // `;
      console.log('Gathering Notion Information...')
        await notion.pages.create({
          parent: {
            database_id: process.env.NOTION_LEADS_DB,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: Name,
                  },
                },
              ],
            },
            Phone: {
              rich_text: [
                {
                  text: {
                    content: Phone,
                  },
                },
              ],
            },
            Email: {
              email: Email,
            },
            Message: {
              rich_text: [
                {
                  text: {
                    content: Message,
                  },
                },
              ],
            },
          },
        });
        console.log('Info successfully posted in the DB')
        // mail.send({
        //   to: 'yahya@webreathesocial.com',
        //   from: 'yahyawbs.api@gmail.com',
        //   subject: 'New Form Submission!',
        //   text: message,
        //   html: message.replace(/\r]n/g, '<br>')
        // });
        console.log('Mail Sent')
        res.status(201).json({ msg: 'Success' })
      } catch (error) {
        res.status(500).json({ msg: 'There was an error' });
      }
    };

