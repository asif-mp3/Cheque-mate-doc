'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const videoSteps = [
  {
    src: "/ezgif-3-5f3056411f.mp4", // First video
    thumbnail: "/thumbnails/demo1.jpg", // First video thumbnail
    description: "Demo 1: Overview of the system execution",
  },
  {
    src: "/ezgif-3-487e334ddb.mp4", // Second video
    thumbnail: "/thumbnails/demo2.jpg", // Second video thumbnail
    description: "Demo 2: Detailed cheque processing flow",
  },
];

const executionSteps = [
  {
    id: 1,
    title: 'Website Interface',
    description: 'Users interact with the cheque processing app hosted on AWS Amplify.',
    image: '/CHEQUE PROCESSING/EXECUTION/WEBSITE.png',
  },
  {
    id: 2,
    title: 'Scan Option',
    description: 'Users can initiate cheque scanning or select an image for upload.',
    image: '/CHEQUE PROCESSING/EXECUTION/SCAN OPTION.png',
  },
  {
    id: 3,
    title: 'Upload Photo',
    description: 'Uploaded cheque images are analyzed by Lambda using Textract for extracting key details.',
    image: '/CHEQUE PROCESSING/EXECUTION/UPLOAD PHOTO.png',
  },
  {
    id: 4,
    title: 'Login to View Extracted Text After Uploading',
    description: 'Extracted data is accessible post-login and stored securely in AWS RDS.',
    image: '/CHEQUE PROCESSING/EXECUTION/AFTER UPLOADING VIEW THE EXTRACTED TEXT AFTER LOGIN.png',
  },
  {
    id: 5,
    title: 'Invalid Credentials Will Trigger an Error',
    description: 'Login attempts with incorrect credentials trigger an error and SNS alerts.',
    image: '/CHEQUE PROCESSING/EXECUTION/IF INVALID CREDENTIALS ERROR.png',
  },
  {
    id: 6,
    title: 'Valid Credentials Allow Access to Dashboard',
    description: 'Successful login grants access to the dashboard for cheque details.',
    image: '/CHEQUE PROCESSING/EXECUTION/VALIDN CREDENTIALS VIEW DASHBOARD.png',
  },
  {
    id: 7,
    title: 'Dashboard Displays Extracted Image Data in Structured Format',
    description: 'The dashboard organizes cheque data into a clear, structured format.',
    image: '/CHEQUE PROCESSING/EXECUTION/VALID CREDENTIALS VIEW DASHBOARD 1 .png',
  },
  {
    id: 8,
    title: 'SQL Schema for Managing Cheque Data in MySQL Workbench',
    description: 'Cheque data is managed via MySQL Workbench linked to AWS RDS endpoints.',
    image: '/CHEQUE PROCESSING/EXECUTION/EXTRACTED TEXT UPDATED IN MYSQL DATABASE.png',
  },
  {
    id: 9,
    title: 'Sample Cheque Data',
    description: 'A sample cheque image demonstrates the processing and data extraction workflow.',
    image: '/Cheques_Datasets/ch-16.jpg',
  },
  {
    id: 10,
    title: 'Extracted Text Stored in Structured Format in MySQL',
    description: 'Processed cheque text is stored in MySQL for secure and efficient retrieval.',
    image: '/CHEQUE PROCESSING/EXECUTION/EXTRACTED TEXT UPDATED IN MYSQL DATABASE 1.png',
  },
  {
    id: 11,
    title: 'Cheque Uploaded in S3',
    description: 'Uploaded cheque images are securely stored in Amazon S3 buckets.',
    image: '/CHEQUE PROCESSING/EXECUTION/CHEQUE UPLOADED IN S3.png',
  },
  {
    id: 12,
    title: 'Uploaded Cheque Details',
    description: 'Details of the uploaded cheque are displayed for user verification.',
    image: '/CHEQUE PROCESSING/EXECUTION/UPLOADED CHEQUE INFO.png',
  },
  {
    id: 13,
    title: 'SNS Notification in Mail',
    description: 'Email notifications for cheque uploads and updates are sent via SNS.',
    image: '/CHEQUE PROCESSING/EXECUTION/SNS IN MAIL.png',
  },
  {
    id: 14,
    title: 'Alarm Triggered Notification for Upload',
    description: 'An alarm signals successful upload, and users are alerted via SNS notifications.',
    image: '/CHEQUE PROCESSING/EXECUTION/ALARM TRIGGERED FOR UPLOAD.png',
  },
];


export default function AdvancedVideoPlayer() {
  const [videoStepIndex, setVideoStepIndex] = useState(0);
  const [imageStepIndex, setImageStepIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextVideoStep = () => {
    setVideoStepIndex((prev) => (prev + 1) % videoSteps.length);
  };

  const prevVideoStep = () => {
    setVideoStepIndex((prev) => (prev - 1 + videoSteps.length) % videoSteps.length);
  };

  const nextImageStep = () => {
    setImageStepIndex((prev) => (prev + 1) % executionSteps.length);
  };

  const prevImageStep = () => {
    setImageStepIndex((prev) => (prev - 1 + executionSteps.length) % executionSteps.length);
  };

  return (
    <section id="execution" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
            System Execution
          </h2>
          <p className="text-gray-300 text-lg">
            Experience our cutting-edge cheque processing system in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden bg-black"
          >
            <div className="relative bg-black aspect-video">
              <AnimatePresence mode="wait">
                <motion.video
                  key={videoStepIndex}
                  ref={videoRef}
                  src={videoSteps[videoStepIndex].src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  controls
                  poster={videoSteps[videoStepIndex].thumbnail}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            {/* Video Description */}
            <div className="text-center text-white mt-4">
              <p className="text-sm">{videoSteps[videoStepIndex].description}</p>
            </div>

            {/* Video Navigation Controls */}
            <div className="flex justify-between items-center p-4 bg-black">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevVideoStep}
                className="text-white hover:text-red-500 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <div className="flex gap-2">
                {videoSteps.map((_, index) => (
                  <motion.button
                    key={`video-step-${index}`}
                    onClick={() => setVideoStepIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === videoStepIndex ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextVideoStep}
                className="text-white hover:text-red-500 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Step-by-Step Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl overflow-hidden bg-black"
          >
            <div className="relative aspect-video bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageStepIndex}
                  src={executionSteps[imageStepIndex].image}
                  alt={executionSteps[imageStepIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>

            {/* Image Description */}
            <div className="text-center text-white mt-4">
              <h4 className="font-medium">{executionSteps[imageStepIndex].title}</h4>
              <p className="text-sm">{executionSteps[imageStepIndex].description}</p>
            </div>

            {/* Image Navigation Controls */}
            <div className="flex justify-between items-center p-4 bg-black">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImageStep}
                className="text-white hover:text-red-500 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <div className="flex gap-2">
                {executionSteps.map((_, index) => (
                  <motion.button
                    key={`image-step-${index}`}
                    onClick={() => setImageStepIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === imageStepIndex ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImageStep}
                className="text-white hover:text-red-500 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
