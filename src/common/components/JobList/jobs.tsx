import wmcp from '../../../images/logo.png';
import stanford from '../../../images/stanford_som.png';
import apple2011 from '../../../images/apple-logo-2011.png';
import apple2018 from '../../../images/apple-logo-2018.png';
export const jobs = [
  {
    "file": wmcp,
    "company": "What's My Cut? Productions, LLC",
    "startDate": '1/1/1990',
    "endDate": 'Present',
    "title": "Freelance Developer",
    "urls": [
      {
        "url": "http://www.whatsmycut.com",
        "displayName": "www.whatsmycut.com"
      }
    ],
    "description": "Various freelance web development projects including 3D Animation, graphic and web design, Adobe Suite, logo design, tee-shirt screen printing preparation, QuarkXpress / InDesign work, WordPress customization and training, SysAdmin and architecture consulting. Also involved in the development of Docker containers and microcomputer devices (Raspberry Pi / Arduino / ARM architecture) to host instances of web sites and services. \
    \
    In 2019 I have worked on React-Native mobile apps using Expo and &quot;CRN&quot; to create stunning, cross-platform applications supported on iOS and Android in concert with Webpack and Babel to generate and companion React-Redux web applications. \
    <br/><br/> \
    Approached by Human Design to rescue two projects that were at risk of going over budget and missing the release dates, I worked tirelessly to achieve the deadlines and subsequent deployments. \
    • Expo.io • React Native (ES6) • Webpack 4 • Babel • Android Studio • XCode \
    • AWS S3 • AWS Amplify • GraphQL • Apple App Store • Google Play Store \
    <br/><br/> \
    Upli Financial Services App - http://www.getupli.com \
    User Interface development for internal administrative web interface used for managing assets in the Upli Financial App for iOs and Android. \
    <br/><br/> \
    &quot;EarthTracker&quot; Community Carbon Footprint Reduction App - https://www.earthguardians.org/ \
    User Interface and GraphQL integration for the EarthTracker App for iOS and Android (Release scheduled for Earth Day, April 22, 2019). \
    <br/><br/> \
    I did a brief stint at Amenify Real-estate amenities service provider in August. ",
    "technologies": [

    ],
    "clients": {
        "Amenify": {
          "file": stanford,
          "company": "Amenify",
          "project": "Amenify Mobile App",
          "startDate": "August, 2019",
          "endDate": "August, 2019",
          "reason": "Non-payment",
          "urls": [{"url": 'http://www.amenify.com', "displayName": 'www.amenify.com'}],
        },
        "Human Design": {
          "file": stanford,
          "company": "Human Design",
          "project": "Legacy Spring Boot to Docker",
          "startDate": "November, 2018",
          "endDate": "February, 2019",
          "reason": "Commute too long"
        }
      },
  },
  {
    "file": stanford,
    "company": "Stanford School of Medicine",
    "title": "Managed Service Provider (MSP) for Intelliswift Software",
    "startDate": "Nov, 2018",
    "endDate": "Feb, 2019",
    "urls": [{
      "url": "http://med.stanford.edu.",
      "displayName": "med.stanford.edu",
    }],
    "description": "Full stack developer with front-end experience. Dockerized Java/Spring Javascript MVC legacy code."
  },
  {
    "file": apple2018,
    "company": "Apple, Inc.",
    "title": "QA Typescript Developer",
    "startDate": "July, 2018",
    "endDate": "October, 2018",
    "urls": [{
      "url": "http://www.apple.com",
      "displayName": "www.apple.com",
    }],
    "description": "TypeScript/QA contractor at Apple Inc. through Mondo technical recruiters, writing Protractor 5 / Selenium Automated Test Suites for a major Angular 6 application internal administrative project."
  },
  {
    "file": apple2011,
    "company": "Apple, Inc.",
    "title": "UI Javascript Developer",
    "startDate": "April, 2011",
    "endDate": "August, 2011",
    "urls": [{
      "url": "http://www.apple.com",
      "displayName": "www.apple.com",
    }],
    "description": "TypeScript/QA contractor at Apple Inc. through Mondo technical recruiters, writing Protractor 5 / Selenium Automated Test Suites for a major Angular 6 application internal administrative project."
  }
];
export default { jobs };
