export const APP_VERSION = "v1.0.0";
// https://www.geeksforgeeks.org/apt-get-command-in-linux-with-examples/ --understand linux commands

// https://linuxhint.com/install_aws_cli_ubuntu/ --install aes cli on ubuntu
//https://linoxide.com/how-to-install-aws-cli-on-ubuntu-20-04/
//https://itsfoss.com/build-essential-ubuntu/

//sudo apt-get install -y python-pip python-dev build essential --these are additional unnix
//packages needed to run the aws cli properly

// THe circle ci/cd file has a basic concept of jobs.
// these are small excutable actionable steps to do a particular MdFollowTheSignsthese jobs can then be composed into
// a pipeline which is essentially menat to state the order in which hese jobs run and theri various dependencies

//before executor
// version: 2.1
// orbs:
//   aws-s3: circleci/aws-s3@1.0.11
// jobs: # Define the build and deploy jobs
//   build:
//     docker: # Use the Docker executor for the build job
//       - image: circleci/node:16.13.1-browsers # Specify the Docker image to use for the build job
//     working_directory: ~/repo
//     steps:
//       - checkout #checks out the current branch to be worked on.
//       - run:
//           name: Show current branch
//           command: echo $CIRCLE_BRANCH
//       - restore_cache:
//           keys:
//             - v1-dependencies-{{ checksum "package.json" }}
//             # fallback to the line below using the latest cache if no exact match is found
//             - v1-dependencies-
//       - run:
//           name: install dependencies
//           command: yarn install
//       - save_cache:
//           paths:
//             - node_modules
//             - ~/.npm
//             - ~/.cache
//           key: v1-dependencies-{{ checksum "package.json" }}

//   deploy-to-aws-s3:
//     docker:
//       - image: circleci/node:16.13.1-browsers
//     working_directory: ~/repo
//     steps:
//       - checkout #checks out the current branch to be worked on.
//       - run:
//           name: Show current branch
//           command: echo $CIRCLE_BRANCH
//       - run:
//           name: Installing AWS CLI
//           working_directory: /
//           command: |
//             sudo apt-get -y -qq update
//             sudo apt-get install -y awscli
//             sudo apt-get install -y python-pip python-dev build-essential
//       - run:
//           name: Build Project
//           command: | #piping because we are running multiple commands
//             yarn install
//             yarn run test
//             yarn build
//             yarn export
//             echo "Build successful"
//       - run:
//           name: Deploy to AWS S3
//           command: | #checking what the current branch is for deployment
//             if [ "$CIRCLE_BRANCH" == "main" ]
//             then
//               aws --region $AWS_REGION s3 sync ~/repo/out s3://${AWS_DEV_BUCKET} --delete
//             elif [ "$CIRCLE_BRANCH" == "staging" ]
//             then
//               aws --region $AWS_REGION s3 sync ~/repo/out s3://${AWS_STAGING_BUCKET} --delete
//             else
//               aws --region $AWS_REGION s3 sync ~/repo/out s3://${AWS_PRODUCTION_BUCKET} --delete
//             fi
//   deploy-to-aws-cloudfront:
//     docker:
//       - image: circleci/node:16.13.1-browsers
//     working_directory: ~/repo
//     steps:
//       - checkout #checks out the current branch to be worked on.
//       - run:
//           name: Show current branch
//           command: echo $CIRCLE_BRANCH
//       - run:
//           name: Installing AWS CLI
//           working_directory: /
//           command: |
//             sudo apt-get -y -qq update
//             sudo apt-get install -y awscli
//             sudo apt-get install -y python-pip python-dev build-essential
//       - run:
//           name: Build Project
//           command: | #piping because we are running multiple commands
//             yarn install
//             yarn run test
//             yarn build
//             yarn export
//             echo "Build successful"
//       - run:
//           name: Deploy to AWS Cloudfront
//           command: | #checking what the current branch is for deployment
//             aws configure set preview.cloudfront true
//             if [ "$CIRCLE_BRANCH" == "main" ]
//             then
//               aws cloudfront create-invalidation --distribution-id ${DEV_DISTRIBUTION_ID} --paths /\*
//             elif [ "$CIRCLE_BRANCH" == "staging" ]
//             then
//               aws cloudfront create-invalidation --distribution-id ${STAGING_DISTRIBUTION_ID} --paths /\*
//             else
//               aws cloudfront create-invalidation --distribution-id ${PRODUCTION_DISTRIBUTION_ID} --paths /\*
//             fi

//Refactroring to conform to the DRY principle

//adding and executor and refactoring EXECUTORS
//Definition of an executor
//Each separate job defined within your config will run in a unique executor. An executor can be a docker container or a virtual machine
//running Linux, Windows, or MacOS. Note, macOS is not available on installations of CircleCI server v2.x

//since we have several repeating executors, we will refactor to clean up the code
// executors:
//   app-executor:
//     docker: # Use the Docker executor for the build job
//       - image: circleci/node:16.13.1-browsers # Specify the Docker image to use for the build job
//     working_directory: ~/repo

//adding ALIASES

//-------------------------------------------------------------------------------------------------------------

//It is loosely typed and prone to errors. Although the beauty of TypeScript is mostly seen at compile time, but I have found TypeScript Codebases to have less bugs than JavaScript.

//I have a bit of experience with DevOps mostly related to frontend processes. I have been Involved in setting up a Circle CI pipeline which runs specific jobs as indicated in the YAML file and deploys on AWS S3 and then finally served through CloudFront.

//Yes I have some experience with Docker. I mostly use in my local/development environment to ensure uniformity of platforms and avoid dependency errors while working with a Team.
//I would use Async/Await if i have a single asynchronous operation. like a single api call. I would rather use a promise.then in a scenario where the result of the previous asynchronous operation is used by the next asynchronous operation (i.e in a promise chaining).  I just think the syntax is clearer and more readable that way. I also use promises in a parallel asynchronous execution scenario.
//Yes. I have worked with WebSockets while building out a server monitoring Dashboard.

// I have my own EsLint configuration because some rules are more of a preference than a standard. Personally, i have rules and best practices that I think should be adhered to and this makes my codebase cleaner and less error prone. (E.g I have a rule in react native that prevents me from in-line styling and this is just a preference). I also tend to add more rules to my configuration based on project needs. (E.g if i am using co-located contexts in a project instead of redux, i would often times search for a rule that enforces memoization of all functions and functional components just to prevent re-rendering of the tree except where necessary)

// Here is an array = [1, 3, 1, 2, 8, 4] and K = 7, where K
// should be the sum of the first any given two numbers in a string.
// It is necessary to return which are the numbers or their indexes in
// the string. In the given case, the solution is [3, 4] or [index: 1,
// index: 5]. Please write in short paragraph how you would solve this task.
// The task must not have 2 for loops as a solution. *

// const getIndexAndNumber = (array, sum) => {
//   const resultArray = [];

//   for (let i = 0; i < array.length; i++) {
//     let gottenSum;
//     let count = 0;
//     do {
//       gottenSum = array[i] + array[count]; //1 + 2
//       if (gottenSum === sum) {
//         resultArray.push(array[i], array[count]);
//       }
//       count++;
//     } while (count === array.length || gottenSum === sum);
//   }
// };

//--> starting
// const ben = () => {
//   console.log(aka);

//   var aka = "muname";
// };

// aka();

// const aka = function () {
//   console.log("dgsdb");
// };

// const aka = ()=>{
//   console.log("dgsdb");
// }
// const array = [1, 3, 1, 2, 8, 4];
// const k = 7;

// const bigfunction = (array, sum) => {
//   let number = 0;
//   let gottenNumbers = [];
//   let gottenIndex = [];
//   const getIndexAndNumber = () => {
//     if (number === array.length) return;
//     if (number < array.length) {
//       for (let i = number + 1; i < array.length; i++) {
//         const internalSum = array[number] + array[i];
//         if (internalSum === sum) {
//           gottenNumbers.push(array[number], array[i]);
//           gottenIndex.push(number, i);
//           return { gottenNumbers, gottenIndex };
//         }
//       }
//     }
//     number++;
//     return getIndexAndNumber();
//   };
//   return getIndexAndNumber();
// };

// console.log(bigfunction(array, k));

//The problem will be solved with recursion in 2 major parts
//PART1: get all elements in the array by recursion.
//PART2: for each current element in the recursive loop, get all the next elements
//in the array and add each next element to the current element in the
//recursive loop until the sum  K is reached.
//PART3: Push the current recursive element and current next element which when summed up gives
//k  to a new array and push their corresponding index into another array. Return both arrays as the answer

//BREAKDOWN

//==step 1
//loop through all the elements in the array recursively.this replaces the need for a "for loop".
//i.e initialize a variable currentIndex = 0 and continuously increment it while calling the base function
//until currentIndex === array.length. with this we can get all the elements
//in the array using array[currentIndex]

//----step 2
//Ater we can get all elements in the array, we will now work inside each recursive call
//to get the all the next elements in the array per current recursive element
//In the recursive function as a base case, use a for loop to iterate through the array, starting from
//currentIndex +1 so that the loop starts at the next number in the array.eg (if array = [1, 3, 1, 2, 8, 4] and currentIndex = 1,
//then our for loop will be for(let i = currentIndex + 1; i < array.length; i++))
//which will result in our i values being 2,3,4,5. with these indexes we can get the corresponding elements using
//array[i]

//Now that we have gotten all next elements in the array per the current element being acted upon by the
//recursive function, we add each next element to the current recursive element
//until the sum k is gotten.
//this looks like array[currentIndex] + array[i] ()
//where i = currentIndex + 1 (for loop values)
//once sum k is gotten, push the current elements array[currentIndex] and array[currentIndex + 1]
//into a new array and push their corresponding index into another array. Return both arrays as the answer

// const dataSet = [
//   {
//     bank_account: 313423434,
//     amount: "5.00"
//   },
//   {
//     bank_account: 3323434,
//     amount: "10.00"
//   },
//   {
//     bank_account: 313423434,
//     amount: "1.00"
//   },
//   {
//     bank_account: 313423434,
//     amount: "3.00"
//   }
// ];

// const totalSumOfAccountSecond = (dataSet, accountNumber) => {
//   const filterAccount = dataSet.filter((item) => {
//     return item.bank_account === accountNumber;
//   });

//   const sum = filterAccount.reduce((intial, item) => {
//     if (item) return intial + Number(item.amount);
//   }, 0);

//   console.log(sum);

//   return sum;
// };

// const totalSumOfAccount = (accountNumber) => {
//   let filteredArray = [];
//   for (let i = 0; i < bankAmounts.length; i++) {
//     if (bankAmounts[i].bank_account === accountNumber) {
//       filteredArray.push(bankAmounts[i]);
//     }
//   }

//   const sum = filteredArray.reduce((intial, item) => {
//     if (item) return intial + Number(item.amount);
//   }, 0);

//   console.log(sum);
// };

// var startTime = performance.now();
// totalSumOfAccount(dataSet, 313423434);
// // totalSumOfAccountSecond(313423434);
// var endTime = performance.now();
// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

//create a function that akes in the account number we are interested in an the array of data
//then using array.filter, get an array of all the items that contain that particular
// account number.
//using array.reduce, get the sum of thw bank accounts.

// import React from "react";
// interface IProps {
//   name: string;
//   position: string;
//   age: number;
// }

// const arr=[0,1,2,3,4,5,5,1,2];

// arr.forEach((val,idx) => {
//   const current = val;
//   const next = arr[idx+1];
//   const next2 = arr[idx + 2];

// });
// export const trial: React.FC<IProps> = ({ name, position, age }) => {
//   return (
//     <div>
//       <p>name: {name}</p>
//       <p>position: {position}</p>
//       <p>age: {age}</p>
//     </div>
//   );
// };

//I mostly make use of React Query for Server state management
//and small colocated contexts or Redux for UI state
