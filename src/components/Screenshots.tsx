'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, Monitor, Cloud, Terminal, Database, Shield, Bell, FileText, Network, Key } from 'lucide-react';
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  images: {
    url: string;
    title: string;
    description: string;
  }[];
}

const services: Service[] = [
  { 
    name: 'Amplify',
    description: 'Hosting front-end and enabling user interaction.',
    icon: <Cloud className="w-4 h-4" />,
    color: '#DD344C',
    images: [
      {
        url: '/CHEQUE PROCESSING/AMPLIFY/Screenshot 2025-01-01 213405.png',
        title: 'Initial Deployment & Hosting',
        description: 'Frontend is deployed and hosted using AWS Amplify, a managed hosting service.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/WEBSITE.png',
        title: 'Website Interface',
        description: 'Users interact with the cheque processing app hosted on AWS Amplify.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/SCAN OPTION.png',
        title: 'Scan Option Interface',
        description: 'Users can select or scan cheques for uploading through this interface.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/UPLOAD PHOTO.png',
        title: 'Photo Upload',
        description: 'Users upload cheque images, which are processed by AWS Lambda using Textract.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/AFTER UPLOADING VIEW THE EXTRACTED TEXT AFTER LOGIN.png',
        title: 'View Extracted Text',
        description: 'Users can view the extracted data after login, stored in AWS RDS.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/IF INVALID CREDENTIALS ERROR.png',
        title: 'Invalid Login Credentials',
        description: 'Users attempting to log in with incorrect credentials will receive an error message and SNS notification.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/VALIDN CREDENTIALS VIEW DASHBOARD.png',
        title: 'Access Dashboard',
        description: 'Users with valid credentials gain access to the dashboard displaying extracted cheque data.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/VALID CREDENTIALS VIEW DASHBOARD 1 .png',
        title: 'Dashboard Overview',
        description: 'The dashboard shows extracted cheque data in a clear and organized format for easy viewing.'
      },
    ]
  },
  { 
    name: 'Cognito',
    description: 'User authentication and authorization',
    icon: <Shield className="w-4 h-4" />,
    color: '#FF9910',
    images: [
      {
        url: '/CHEQUE PROCESSING/COGNITO/app clien.png',
        title: 'Cognito Client Application',
        description: 'Initial setup of the Cognito client application for user authentication and management.'
      },
      {
        url: '/CHEQUE PROCESSING/COGNITO/user pool.png',
        title: 'User Pool Setup',
        description: 'The Cognito user pool configuration for managing user accounts and authentication.'
      },
      {
        url: '/CHEQUE PROCESSING/COGNITO/user.png',
        title: 'User Profile',
        description: 'User profile details are stored and managed within the Cognito user pool for secure access.'
      },
      {
        url: '/CHEQUE PROCESSING/COGNITO/details.png',
        title: 'User Details Configuration',
        description: 'Detailed configuration of user attributes and permissions within Cognito for authentication.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/AFTER UPLOADING VIEW THE EXTRACTED TEXT AFTER LOGIN.png',
        title: 'Extracted Data Post-Login',
        description: 'Once authenticated, users can view the extracted data from uploaded cheques.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/IF INVALID CREDENTIALS ERROR.png',
        title: 'Invalid Login Credentials',
        description: 'Users with invalid credentials are notified of the error through Cognito\'s authentication system.'
      },
    ]
  },
  { 
    name: 'RDS',
    description: 'Storing extracted cheque data and annotations.',
    icon: <Database className="w-4 h-4" />,
    color: '#527FFF',
    images: [
      {
        url: '/CHEQUE PROCESSING/RDS/database.png',
        title: 'Database Creation and Setup',
        description: 'Initial setup of the RDS database to store and manage extracted cheque data and annotations.'
      },
      {
        url: '/CHEQUE PROCESSING/RDS/details.png',
        title: 'Details of the Database Created in RDS',
        description: 'Overview of the database structure and Connecting the endpoints with MySQL Workbench.'
      },
      {
        url: '/CHEQUE PROCESSING/RDS/security group and instances.png',
        title: 'Security Groups and Instances',
        description: 'Configuration of RDS security groups and instances to ensure secure access and data storage.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/EXTRACTED TEXT UPDATED IN MYSQL DATABASE 1.png',
        title: 'Extracted Text Stored in Structured Format in MySQL',
        description: 'Processed cheque text is stored in MySQL for secure and efficient retrieval.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/EXTRACTED TEXT UPDATED IN MYSQL DATABASE.png',
        title: 'SQL Schema for Managing Cheque Data in MySQL Workbench',
        description: 'Cheque data is managed via MySQL Workbench linked to AWS RDS endpoints for streamlined operations.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/VALID CREDENTIALS VIEW DASHBOARD 1 .png',
        title: 'Dashboard Displays Extracted Image Data in Structured Format',
        description: 'The dashboard organizes cheque data into a clear, structured format for easy user access and viewing.'
      },
    ]
  },
  { 
    name: 'S3',
    description: 'Storing uploaded cheque images securely.',
    icon: <Cloud className="w-4 h-4" />,
    color: '#569A31',
    images: [
      {
        url: '/CHEQUE PROCESSING/S3/Screenshot 2025-01-01 213616.png',
        title: 'S3 Bucket Setup',
        description: 'Initial setup of the S3 bucket for securely storing uploaded cheque images.'
      },
      {
        url: '/CHEQUE PROCESSING/S3/Screenshot 2025-01-01 213653.png',
        title: 'S3 Bucket Policy',
        description: 'Configuring the S3 storage settings to ensure efficient handling of cheque image uploads.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/CHEQUE UPLOADED IN S3.png',
        title: 'Cheque Uploaded to S3',
        description: 'A cheque image successfully uploaded and stored in the S3 bucket.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/UPLOADED CHEQUE INFO.png',
        title: 'Uploaded Cheque Information',
        description: 'Details of the uploaded cheque image stored in S3, accessible for further processing.'
      },
    ]
  },
  { 
    name: 'Lambda',
    description: 'Orchestrating cheque processing and data handling with an IAM Role.',
    icon: <Terminal className="w-4 h-4" />,
    color: '#FF9900',
    images: [
      {
        url: '/CHEQUE PROCESSING/LAMBDA/Screenshot 2025-01-01 213525.png',
        title: 'Image Upload Lambda Function',
        description: 'Lambda function responsible for handling the image upload process and executing the associated code for storing cheque images in S3.'
      },
      {
        url: '/CHEQUE PROCESSING/LAMBDA/Screenshot 2025-01-01 213551.png',
        title: 'Fetch Data from Database',
        description: 'Lambda function retrieves and processes extracted cheque data from the RDS database to be used in further steps of cheque verification.'
      },
    ]
  },
  { 
    name: 'Textract',
    description: 'Extracting textual data from cheque images.',
    icon: <FileText className="w-4 h-4" />,
    color: '#00A4EF',
    images: [
      {
        url: '/CHEQUE PROCESSING/TEXTRACT/integrated in lambda code.png',
        title: 'Textract Integration with Lambda',
        description: 'AWS Textract is integrated with the Lambda function to automate the extraction of text data from cheque images.'
      },
      {
        url: '/CHEQUE PROCESSING/TEXTRACT/Screenshot 2025-01-01 215257.png',
        title: 'Extracted Text Data',
        description: 'Sample extracted text data from a cheque image processed by AWS Textract.'
      },
      {
        url: '/Cheques_Datasets/ch-16.jpg',
        title: 'Cheque Image for Text Extraction',
        description: 'Sample cheque image used for text extraction via AWS Textract to process cheque data.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/EXTRACTED TEXT UPDATED IN MYSQL DATABASE 1.png',
        title: 'Extracted Text in Database',
        description: 'The extracted text from cheque images is updated in the MySQL database for further processing and validation.'
      },
    ]
  },
  { 
    name: 'CloudWatch',
    description: 'Monitoring system performance and logging errors for troubleshooting.',
    icon: <Bell className="w-4 h-4" />,
    color: '#3F8624',
    images: [
      {
        url: '/CHEQUE PROCESSING/CLOUDWATCH/Screenshot 2025-01-01 214453.png',
        title: 'CloudWatch Setup for Monitoring',
        description: 'Initial setup of AWS CloudWatch for monitoring system performance and logging any errors during cheque processing.'
      },
      {
        url: '/CHEQUE PROCESSING/CLOUDWATCH/upload error alarm.png',
        title: 'Alarm for Upload Error',
        description: 'CloudWatch alarm set up to notify when there is an error in uploading cheque images to the system.'
      },
      {
        url: '/CHEQUE PROCESSING/CLOUDWATCH/alarm for photo upload.png',
        title: 'Alarm for Photo Upload',
        description: 'CloudWatch triggers an alarm in case of issues during cheque image uploads, ensuring quick detection and resolution.'
      },
      {
        url: '/CHEQUE PROCESSING/CLOUDWATCH/log group for image upload function.png',
        title: 'Log Group for Image Upload Function',
        description: 'CloudWatch Log Group tracks the events and errors during the cheque image upload process for further analysis.'
      },
      {
        url: '/CHEQUE PROCESSING//CLOUDWATCH/log group for fetchDB data.png',
        title: 'Log Group for Fetch DB Function',
        description: 'Logs from the database fetch function are stored in CloudWatch for troubleshooting and performance analysis.'
      },
    ]
  },
  { 
    name: 'SNS',
    description: 'Sending user notifications about cheque processing status.',
    icon: <Cloud className="w-4 h-4" />,
    color: '#FF4F8B',
    images: [
      {
        url: '/CHEQUE PROCESSING/SNS/cheque processing sns.png',
        title: 'SNS Integration for Cheque Processing',
        description: 'Integrating AWS SNS to send notifications about the cheque processing status to users.'
      },
      {
        url: '/CHEQUE PROCESSING/SNS/Screenshot 2025-01-01 214713.png',
        title: 'SNS Notification Setup',
        description: 'Configuring AWS SNS for user notifications regarding the status of cheque processing.'
      },
      {
        url: '/CHEQUE PROCESSING/SNS/upload notification.png',
        title: 'Cheque Upload Notification',
        description: 'An SNS notification sent to the user after uploading a cheque image, informing them of the processing status.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/Screenshot 2025-01-19 194441.png',
        title: 'Notification via Email',
        description: 'Users receive notifications about cheque processing status via email through AWS SNS.'
      },
      {
        url: '/CHEQUE PROCESSING/EXECUTION/Screenshot 2025-01-19 194529.png',
        title: 'Upload Error Alarm Triggered',
        description: 'An SNS alarm triggered in case of an issue during cheque image upload, notifying the user of the failure.'
      },
    ]
  },
  { 
    name: 'API Gateway',
    description: 'Providing a REST API for front-end to back-end communication.',
    icon: <Network className="w-4 h-4" />,
    color: '#E63946',
    images: [
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/Screenshot 2025-01-01 213719.png',
        title: 'ImageUploadAPI Details',
        description: 'Configures the API endpoint for handling image upload requests and initiating the cheque processing workflow.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/Screenshot 2025-01-01 213742.png',
        title: 'Routes',
        description: 'Defines the paths for API requests, directing them to appropriate back-end services for cheque image processing.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/Screenshot 2025-01-01 213805.png',
        title: 'Integration with ImageUpload Lambda Function',
        description: 'Links the ImageUpload Lambda function to the API Gateway, automating image processing tasks after uploads.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/Screenshot 2025-01-01 213828.png',
        title: 'Deploying API Stage',
        description: 'Deploys the API stage, making it live and accessible for front-end requests to interact with the back-end.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/DB data api data.png',
        title: 'DBData API Details',
        description: 'Configures an API endpoint to retrieve essential database information for use in cheque processing operations.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/routes.png',
        title: 'Routes',
        description: 'Sets up additional routes for specific operations, ensuring smooth communication between the front-end and back-end.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/integration with fetchDBdata lambda function.png',
        title: 'Integration with FetchDBData Lambda Function',
        description: 'Integrates the FetchDBData Lambda function to retrieve data from the back-end, enabling dynamic cheque processing.'
      },
      {
        url: '/CHEQUE PROCESSING/API GATEWAY/cross origin resurce sharing details.png',
        title: 'Cross-Origin Resource Sharing Details',
        description: 'Configures CORS settings to ensure secure cross-domain data sharing between the front-end and back-end.'
      },
    ]
  },
  { 
    name: 'IAM',
    description: 'Providing controlled and secure access for Lambda to interact with services.',
    icon: <Key className="w-4 h-4" />,
    color: '#FF4F8B',
    images: [
      {
        url: '/CHEQUE PROCESSING/IAM/basic execution role policy code.png',
        title: 'Basic Execution Role Policy Code',
        description: 'Defines the IAM role and policies that grant Lambda functions permissions to interact with AWS services securely.'
      },
      {
        url: '/CHEQUE PROCESSING/IAM/fetchDB data role.png',
        title: 'FetchDB Data Role',
        description: 'IAM role for securely accessing the database and fetching the necessary data for cheque processing.'
      },
      {
        url: '/CHEQUE PROCESSING/IAM/policies 1.png',
        title: 'Defining Policies for Permissions',
        description: 'Defines IAM policies to manage access control for different services and ensure secure operations.'
      },
      {
        url: '/CHEQUE PROCESSING/IAM/policies.png',
        title: 'Additional IAM Policies',
        description: 'Continued setup of IAM policies to fine-tune access rights and restrictions for Lambda functions.'
      },
      {
        url: '/CHEQUE PROCESSING/IAM/role created for image upload .png',
        title: 'Role Created for Image Upload',
        description: 'Defines the IAM role that allows Lambda functions to interact with services for processing cheque images.'
      },
      {
        url: '/CHEQUE PROCESSING/IAM/role created to give cognito access.png',
        title: 'Role Created for Cognito Access',
        description: 'IAM role for enabling secure access to AWS Cognito for authentication and user management during cheque processing.'
      },
      {
        url: '/CHEQUE PROCESSING/IAM/S3 textract policy code.png',
        title: 'S3 Textract Policy Code',
        description: 'IAM policy allowing Lambda to access S3 buckets and interact with Amazon Textract for cheque data extraction.'
      },
    ]
  },
];

export default function Screenshots() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedService]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => 
      prev === selectedService.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedService.images.length - 1 : prev - 1
    );
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedService]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id='screenshots' className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="absolute inset-0 backdrop-blur-[118px] bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge 
            variant="secondary" 
            className="mb-4 bg-blue-500/10 text-blue-400 backdrop-blur-sm animate-pulse"
          >
            AWS Services Documentation
          </Badge>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
            Configuration & Setup Guide
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive visual documentation of our AWS infrastructure setup and configuration
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <motion.div 
            className="flex gap-2 min-w-max p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => {
                    setIsLoading(true);
                    setSelectedService(service);
                    setCurrentImageIndex(0);
                    setActiveTab(index);
                  }}
                  variant={activeTab === index ? "default" : "outline"}
                  className={`relative group min-w-[140px] transition-all duration-300 ease-in-out ${
                    activeTab === index
                      ? `bg-${service.color} hover:bg-${service.color}/90`
                      : `bg-${service.color}/30 hover:bg-${service.color}/50`
                  }`}
                  style={{
                    backgroundColor: activeTab === index ? service.color : `${service.color}33`,
                    color: activeTab === index ? '#FFFFFF' : service.color,
                  }}
                >
                  <span className="mr-2">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                  {activeTab === index && (
                    <motion.div
                      className="absolute inset-0 border-2 rounded-md"
                      layoutId="serviceBorder"
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      style={{ borderColor: service.color }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Image Display */}
        <motion.div
          layout
          className="relative bg-gradient-to-b from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
              </motion.div>
            ) : (
              <div className="space-y-4">
                
                {/* Image Container */}
                <motion.div
                  key={currentImageIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextImage();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevImage();
                    }
                  }}
                  className="relative w-full h-[400px] rounded-lg overflow-hidden group"
                  onHoverStart={() => setShowDescription(true)}
                  onHoverEnd={() => setShowDescription(false)}
                >
                  <img
                    ref={imageRef}
                    src={selectedService.images[currentImageIndex].url || "/placeholder.svg"}
                    alt={`${selectedService.name} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: showDescription ? 1 : 0, y: showDescription ? 0 : '100%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4"
                  >
                    <h4 className="text-lg font-semibold mb-2">{selectedService.images[currentImageIndex].title}</h4>
                    <p className="text-sm">{selectedService.images[currentImageIndex].description}</p>
                  </motion.div>
                </motion.div>

                {/* Navigation Controls - Now below the image */}
                <div className="flex items-center justify-between px-4 py-2 bg-black/20 backdrop-blur-sm rounded-lg">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="transform transition-transform hover:-translate-x-1 bg-black/50 backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black/50 backdrop-blur-sm hover:bg-blue-800 group"
                  >
                    <ZoomIn className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Fullscreen
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="transform transition-transform hover:translate-x-1 bg-black/50 backdrop-blur-sm"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {selectedService.images.map((image, index) => (
            <motion.div
              key={`${selectedService.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              className={`relative cursor-pointer rounded-lg overflow-hidden group ${
                currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="w-full h-20 overflow-hidden">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={`${selectedService.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-black/50 flex items-center justify-center ${
                  currentImageIndex === index ? 'opacity-100' : ''
                }`}
              >
                <Monitor className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fullscreen Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-7xl h-[90vh] bg-black/95 backdrop-blur-xl border-blue-400/20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative h-full flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={selectedService.images[currentImageIndex].url || "/placeholder.svg"}
                  alt={`${selectedService.name} screenshot`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60 backdrop-blur-sm">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {selectedService.images[currentImageIndex].title}
                </h4>
                <p className="text-gray-200 text-sm">
                  {selectedService.images[currentImageIndex].description}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="transform hover:-translate-x-1 bg-black/50 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="transform hover:translate-x-1 bg-black/50 backdrop-blur-sm"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

