import mongoose from "mongoose";
import jobsModel from "../Models/jobsModel.js";
import moment from "moment";

const tot = [
    {
      "createdAt": { "$date": "2023-03-11T02:05:30.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Peru",
      "workType": "full-time",
      "status": "interview",
      "position": "Assistant Professor",
      "company": "Eabox"
    },
    {
      "createdAt": { "$date": "2022-07-31T07:13:59.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Sweden",
      "workType": "full-time",
      "status": "interview",
      "position": "Account Coordinator",
      "company": "Rhyzio"
    },
    {
      "createdAt": { "$date": "2022-12-23T18:12:10.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "internship",
      "status": "pending",
      "position": "Statistician I",
      "company": "Feedmix"
    },
    {
      "createdAt": { "$date": "2022-08-26T03:28:17.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Democratic Republic of the Congo",
      "workType": "part-time",
      "status": "interview",
      "position": "Staff Scientist",
      "company": "Twitterbeat"
    },
    {
      "createdAt": { "$date": "2023-03-15T14:16:22.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Thailand",
      "workType": "contaract",
      "status": "interview",
      "position": "Compensation Analyst",
      "company": "Mita"
    },
    {
      "createdAt": { "$date": "2022-11-14T02:59:45.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Poland",
      "workType": "contaract",
      "status": "reject",
      "position": "Design Engineer",
      "company": "Devpulse"
    },
    {
      "createdAt": { "$date": "2023-03-07T20:41:43.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Colombia",
      "workType": "contaract",
      "status": "pending",
      "position": "Administrative Assistant III",
      "company": "Twitternation"
    },
    {
      "createdAt": { "$date": "2022-11-08T07:06:08.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Brazil",
      "workType": "internship",
      "status": "interview",
      "position": "Internal Auditor",
      "company": "Fivechat"
    },
    {
      "createdAt": { "$date": "2023-01-21T21:37:45.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "part-time",
      "status": "reject",
      "position": "Community Outreach Specialist",
      "company": "Dazzlesphere"
    },
    {
      "createdAt": { "$date": "2022-09-08T19:33:11.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Myanmar",
      "workType": "internship",
      "status": "pending",
      "position": "Assistant Manager",
      "company": "Riffpedia"
    },
    {
      "createdAt": { "$date": "2022-11-06T00:59:55.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Peru",
      "workType": "full-time",
      "status": "reject",
      "position": "Technical Writer",
      "company": "Realcube"
    },
    {
      "createdAt": { "$date": "2023-01-11T18:37:30.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "pending",
      "position": "Geologist I",
      "company": "Rhyzio"
    },
    {
      "createdAt": { "$date": "2022-06-05T10:48:48.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "United States",
      "workType": "full-time",
      "status": "pending",
      "position": "VP Product Management",
      "company": "Vidoo"
    },
    {
      "createdAt": { "$date": "2022-10-02T18:02:24.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Indonesia",
      "workType": "full-time",
      "status": "pending",
      "position": "VP Sales",
      "company": "Wordpedia"
    },
    {
      "createdAt": { "$date": "2022-06-02T03:12:19.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "France",
      "workType": "full-time",
      "status": "pending",
      "position": "Marketing Assistant",
      "company": "Skipfire"
    },
    {
      "createdAt": { "$date": "2022-08-13T17:31:35.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "United States",
      "workType": "full-time",
      "status": "interview",
      "position": "Physical Therapy Assistant",
      "company": "Aimbu"
    },
    {
      "createdAt": { "$date": "2022-06-21T11:08:13.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Indonesia",
      "workType": "part-time",
      "status": "interview",
      "position": "Internal Auditor",
      "company": "Browseblab"
    },
    {
      "createdAt": { "$date": "2023-03-16T17:16:17.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Thailand",
      "workType": "full-time",
      "status": "interview",
      "position": "Marketing Assistant",
      "company": "Youfeed"
    },
    {
      "createdAt": { "$date": "2022-08-05T19:40:04.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "internship",
      "status": "reject",
      "position": "Structural Engineer",
      "company": "Realcube"
    },
    {
      "createdAt": { "$date": "2022-06-11T21:11:23.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Vietnam",
      "workType": "part-time",
      "status": "reject",
      "position": "Nurse Practicioner",
      "company": "Blogpad"
    },
    {
      "createdAt": { "$date": "2022-05-29T15:00:58.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Mexico",
      "workType": "part-time",
      "status": "reject",
      "position": "VP Product Management",
      "company": "Eabox"
    },
    {
      "createdAt": { "$date": "2022-11-13T12:31:33.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Canada",
      "workType": "part-time",
      "status": "pending",
      "position": "Automation Specialist IV",
      "company": "Bluejam"
    },
    {
      "createdAt": { "$date": "2022-12-28T01:25:51.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Philippines",
      "workType": "part-time",
      "status": "pending",
      "position": "Legal Assistant",
      "company": "Leexo"
    },
    {
      "createdAt": { "$date": "2023-02-19T11:25:14.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Japan",
      "workType": "full-time",
      "status": "interview",
      "position": "VP Marketing",
      "company": "Brainbox"
    },
    {
      "createdAt": { "$date": "2022-11-02T02:57:20.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "pending",
      "position": "Administrative Officer",
      "company": "Oloo"
    },
    {
      "createdAt": { "$date": "2023-02-17T07:07:03.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Indonesia",
      "workType": "part-time",
      "status": "interview",
      "position": "Help Desk Technician",
      "company": "Viva"
    },
    {
      "createdAt": { "$date": "2022-10-07T00:25:32.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "reject",
      "position": "Junior Executive",
      "company": "Youfeed"
    },
    {
      "createdAt": { "$date": "2022-09-14T01:33:26.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "internship",
      "status": "pending",
      "position": "Editor",
      "company": "Gigaclub"
    },
    {
      "createdAt": { "$date": "2023-02-25T13:58:23.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Ivory Coast",
      "workType": "full-time",
      "status": "reject",
      "position": "Quality Control Specialist",
      "company": "Shufflebeat"
    },
    {
      "createdAt": { "$date": "2022-07-02T13:53:33.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Poland",
      "workType": "internship",
      "status": "interview",
      "position": "Design Engineer",
      "company": "InnoZ"
    },
    {
      "createdAt": { "$date": "2022-08-18T07:45:30.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "pending",
      "position": "Sales Associate",
      "company": "Chatterpoint"
    },
    {
      "createdAt": { "$date": "2023-03-24T08:04:52.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Democratic Republic of the Congo",
      "workType": "contaract",
      "status": "reject",
      "position": "Software Engineer II",
      "company": "Photospace"
    },
    {
      "createdAt": { "$date": "2023-01-26T00:14:57.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Russia",
      "workType": "internship",
      "status": "pending",
      "position": "General Manager",
      "company": "Blogtags"
    },
    {
      "createdAt": { "$date": "2023-01-25T06:45:47.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Brazil",
      "workType": "internship",
      "status": "pending",
      "position": "Office Assistant II",
      "company": "Fadeo"
    },
    {
      "createdAt": { "$date": "2022-09-19T15:12:15.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Ireland",
      "workType": "full-time",
      "status": "reject",
      "position": "Statistician II",
      "company": "Skidoo"
    },
    {
      "createdAt": { "$date": "2022-09-25T21:24:22.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "part-time",
      "status": "pending",
      "position": "Recruiter",
      "company": "Vidoo"
    },
    {
      "createdAt": { "$date": "2022-05-18T20:58:39.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "interview",
      "position": "VP Accounting",
      "company": "Feedbug"
    },
    {
      "createdAt": { "$date": "2022-06-23T02:58:01.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Sweden",
      "workType": "internship",
      "status": "reject",
      "position": "Human Resources Assistant II",
      "company": "Agimba"
    },
    {
      "createdAt": { "$date": "2023-03-29T11:46:25.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Philippines",
      "workType": "contaract",
      "status": "interview",
      "position": "Electrical Engineer",
      "company": "Meedoo"
    },
    {
      "createdAt": { "$date": "2022-08-31T22:22:13.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "reject",
      "position": "Financial Advisor",
      "company": "Fatz"
    },
    {
      "createdAt": { "$date": "2022-12-31T09:08:38.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Iran",
      "workType": "part-time",
      "status": "pending",
      "position": "Legal Assistant",
      "company": "Wikizz"
    },
    {
      "createdAt": { "$date": "2022-08-26T04:52:28.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "contaract",
      "status": "reject",
      "position": "Sales Associate",
      "company": "Mita"
    },
    {
      "createdAt": { "$date": "2023-04-07T20:39:58.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "internship",
      "status": "interview",
      "position": "Software Engineer II",
      "company": "Mydeo"
    },
    {
      "createdAt": { "$date": "2022-11-28T12:15:33.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Portugal",
      "workType": "full-time",
      "status": "pending",
      "position": "Graphic Designer",
      "company": "Tavu"
    },
    {
      "createdAt": { "$date": "2022-05-24T18:31:13.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Dominican Republic",
      "workType": "part-time",
      "status": "interview",
      "position": "Nuclear Power Engineer",
      "company": "Flashspan"
    },
    {
      "createdAt": { "$date": "2022-10-04T23:52:14.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "full-time",
      "status": "interview",
      "position": "Teacher",
      "company": "Gabvine"
    },
    {
      "createdAt": { "$date": "2022-07-17T00:46:29.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "France",
      "workType": "internship",
      "status": "interview",
      "position": "Environmental Specialist",
      "company": "Innotype"
    },
    {
      "createdAt": { "$date": "2022-05-18T18:57:02.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Indonesia",
      "workType": "contaract",
      "status": "reject",
      "position": "Office Assistant III",
      "company": "Gabspot"
    },
    {
      "createdAt": { "$date": "2022-09-17T13:52:30.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Belarus",
      "workType": "contaract",
      "status": "interview",
      "position": "Web Developer I",
      "company": "Wordify"
    },
    {
      "createdAt": { "$date": "2022-12-01T09:24:49.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Poland",
      "workType": "full-time",
      "status": "reject",
      "position": "Assistant Media Planner",
      "company": "DabZ"
    },
    {
      "createdAt": { "$date": "2023-01-14T00:08:26.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Sweden",
      "workType": "internship",
      "status": "reject",
      "position": "Senior Sales Associate",
      "company": "Babbleset"
    },
    {
      "createdAt": { "$date": "2022-06-28T17:37:49.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Portugal",
      "workType": "contaract",
      "status": "reject",
      "position": "Programmer Analyst III",
      "company": "Wikibox"
    },
    {
      "createdAt": { "$date": "2022-10-23T15:26:47.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Philippines",
      "workType": "internship",
      "status": "interview",
      "position": "Mechanical Systems Engineer",
      "company": "Yodel"
    },
    {
      "createdAt": { "$date": "2022-07-28T07:00:23.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "internship",
      "status": "interview",
      "position": "Office Assistant III",
      "company": "Gabspot"
    },
    {
      "createdAt": { "$date": "2022-05-02T19:32:26.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Ecuador",
      "workType": "contaract",
      "status": "interview",
      "position": "Software Consultant",
      "company": "Browsedrive"
    },
    {
      "createdAt": { "$date": "2022-07-01T00:10:53.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "China",
      "workType": "internship",
      "status": "interview",
      "position": "Community Outreach Specialist",
      "company": "Snaptags"
    },
    {
      "createdAt": { "$date": "2022-10-19T23:56:59.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Sri Lanka",
      "workType": "full-time",
      "status": "pending",
      "position": "Pharmacist",
      "company": "Linkbuzz"
    },
    {
      "createdAt": { "$date": "2022-11-27T21:42:13.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Indonesia",
      "workType": "internship",
      "status": "pending",
      "position": "Assistant Manager",
      "company": "Tambee"
    },
    {
      "createdAt": { "$date": "2022-12-27T05:50:42.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "United States",
      "workType": "full-time",
      "status": "reject",
      "position": "Graphic Designer",
      "company": "Dynabox"
    },
    {
      "createdAt": { "$date": "2022-12-15T13:42:41.000Z" },
      "createdBy": {
        "$oid": "6752c8aefff6338d6f97f182"
      },
      "workLocation": "Indonesia",
      "workType": "internship",
      "status": "interview",
      "position": "Occupational Therapist",
      "company": "Zoomcast"
    }
  ]
  


export const createJobs = async (req,res,next)=>{

    const {company,position} = req.body;

    if(!company || !position){
        return next({
            status: 400,
            message: "Kindly Pass Company and position at least"
        })
    }

    // to check if user creating the job is the same person who logged in
    // this log in info we will get from auth middleware

//    if( req.body.createdBy !== req.user.userId){
//         return next({
//             status: 400,
//             message: "User Created by is not equal to Token given user Id from Auth middleware"
//         })
//    }
    req.body.createdBy = req.user.userId;
    const job = await jobsModel.create(req.body);

   res.status(200).json({job,
    status: true,
    message: "Job created Successfully !!"
   })

}


export const getAllJobs = async(req,res,next)=>{

// abhi backend me humare pas ["pending", "interview", "reject"] hai,
// leking frontend me hume "all" bhi rakhna padega ek select ka option taki hum saari unfiltered jobs bhi dekh ske.

    // front end pr hum enum me ek aur option rakhenge ALL jobs ka, taki
        // user all select krke saari jobs ko dekh ske agar use filters nahi lagane to.
        // Wo bas front end pr rhega

    try{
        // const jobs = await jobsModel.find();

        // to get jobs posted by login user
        // const jobs = await jobsModel.find({createdBy: req.user.userId});

// Hum ek query object banayenge, jisme log in user ki id to authMiddleware se milegi hi, aur usme conditionally
// status ki key dalenge agar hume query me koi key value pairs milte hain, fir usi ke hisab se hum jobsModel se find krke results dikhayenge.

      const {status, workType, search, sort, pageNo, limitNo} = req.query;

      const queryObject = {
        createdBy : req.user.userId
      }

// ab humare pas queryObject me already log in user ki id hai, 
// aur job database me humare pas keys hain jisme humne ye createdBy key dali hui hai jisme
// humne job add krne wale user ki id dali hai,

// ab hum user ki condition check krenge filter krne ke liye aur agar hume koi query 
// milti hai ["pending", "reject", "interview"] ya front end se "all" me se to hum 
// status nam ki key aur status jo bhi mila hia uski value ko add kr denge queryObject me.

// Logic filter
      if(status && status !== "all"){
        queryObject.status = status;
      }

      if(workType && workType !== "all"){
        queryObject.workType = workType
      }

      // agar tumhe kisi input ya value me regex lagana ho 
      // to hum mongoose ka $regex method use kr skte hain, aur agar
      //  regex use krte krte tumhe usko case insensitive bhi banana
      //  hai to $options: "i" lagana hota hai,lekin wo regex wala ek object 
      // hota hai
    
      if(search){
        queryObject.position = {$regex: search, $options: "i"};
      }

// ab hum jobsModel yani jobs wale collection me search krenge ki koi jobs hain kya
// jo query object yani {createdBy: "", status: "pending"} for ex se match hoti hai, agar hoti ha
// to usko return kr denge aur frontend me show kr denge.
 

// agar koi bhi query key value pairs nahi aaye hain, to fir seedhe queryObject
// me {createdBy: "login user id aa jayegi"}, aur all jobs find ho jayengi jo login user ne add ki hain.

// agar hum multiple queries bhi denge to bhi filtering acche se kam hogi, qki har filter ki condition add krne ke bad
// hum usko queryObject me add krakr find krwa rhe hain jobsModel se.

// Instance of Job which we have find out and ab hum isme sorting wagera krenge. Agar zrut padegi to.

let queryResult = jobsModel.find(queryObject);

// yha par humne await isliye nahi lagaya hai qki ho skta hai hume data ko
// sort krna pade to doccument ki array ke instance ko hi sort krenge aur
// aur result ko await krke frontend ya response pr bhej denge.



// ab hum sort nam ka variable lenge query params me aur uski value ke hisab
// se manipulate krenge results ko.
// Mongoose me sort method hota hai, usme column dalna hota hai kis collection ke doccument ke kis field
// ke hisab se sort krna hai, Assending ke liye "-fieldName" aur descending ke liye
// normal rakhna hota hai.

// jse sort == "latest hua to hum sort me "-createdAt" field ko select kiye aur - minus 
// isliye lagaye taki hum createdAt field me latest ke hisab se sort kr ske.

// humne sort me condition likha hai sort == "a-z" or "z-a" isme hum "Position"
// field ko target kr rhe hain sorting ke liye.
// /

// ab hume agar sorting krni hai to sort krenge

// SORTING LOGIC

if(sort === "latest"){
  queryResult = queryResult.sort("-createdAt");
}

if(sort === "oldest"){
  queryResult = queryResult.sort("createdAt");
}

if(sort == "a-z"){
  queryResult = queryResult.sort("position");
}

if(sort == "z-a"){
  queryResult = queryResult.sort("-position");
}

// Paging Logic (Pagination)

let page = Number(req.query.pageNo) || 1;
let limit = Number(req.query.limitNo) || 10;
const skip = (page - 1) * limit;

queryResult = queryResult.skip(skip).limit(limit);

// jobs count
const totalJobs = await jobsModel.countDocuments(queryResult);
const numberOfPage = Math.ceil(totalJobs/limit);

const jobs = await queryResult;
 

        res.status(200).json({
            status: 200,
            message:"Jobs fetched Successfully!!",
            totalJobs: totalJobs,
            jobs,
            numberOfPage,
            user: req.user

        },
)

}
catch(error){
    console.log(`Error arrived fom controller ${error}`.bgRed.white)
}
}


// ---------------------------------------------------

// Jobs Stats controller to check jobs

export const jobsStatsController = async(req,res)=>{

  const stats = await jobsModel.aggregate([
   
    // Search by user jobs

    // note: hum jab bhi login krenge, to authMiddleware token me se ek user id nikalkr
    // req ke andr ek user object banayega aur us object me userID key se wo object ki ID ko 
    // save kr dega, ab jab bhi auth middleware shi se kaam krega to req ke pas hamesha login krne wale user
    // ki id hogi,
    
    // har job create krte time hum createdBY nam ka key banate hain aur usme id ko value rakh dete hain ta
    // taaki hume pta ho ki konsa user ne login kia hai

    // is Case me bhi hum sirf whi jobs dikhayenge admin panel ya backend me
    // jo user ne create ki hongi, isliye ye condition likhi hai neeche.
    {
      $match : {
        createdBy: new mongoose.Types.ObjectId(req.user.userId),
      },
    },
    {
      $group : {
        _id : "$status",
        count: {$sum:1},
      },
    }
  ])

  // Sending Stats as Json response

  // ( Not compulsory ) test if we are trying to get a reponse from a user
  // that has not created any job, taaki usko response me empty stats object na mile,
// usko defaultStats naam ka ek object mile, but it is not working fine.
 
  const defaultStats = {
    pending: stats.pending || 0,
    interview : stats.interview || 0,
    reject : stats.reject || 0
  }

  let monthlyApplications = await jobsModel.aggregate([
    {
      $match:{
        createdBy : new mongoose.Types.ObjectId(req.user.userId)
      },
     
      },
      { 
        $group:{
            _id : {
              year:{
                $year: "$createdAt"
              },
              month: {
                $month: "$createdAt",
              }
            },
            count:{
              $sum: 1
            }
        },
    }
  ])

  monthlyApplications = monthlyApplications.map((item)=>{
    const {_id:{year, month}, count} = item;
    const date = moment().year(year).month(month-1).format("MMM Y");
    return {date, count}
  }).reverse()


  res.status(200).json({
    "totalJobs": stats.length,
    stats,
    monthlyApplications,
    defaultStats,
  })
}