'use client'

import { motion } from 'framer-motion'
import { Upload, Database, FileText, Bell, BarChart, Users, Shield, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

// Define the type for service colors
type ServiceColor = {
  color: string;
  gradient: string[];
  border: string;
  background: string;
  text: string;
}

// Define the type for serviceColors
type ServiceColors = {
  [key: string]: ServiceColor;
}

// AWS service colors
const serviceColors: ServiceColors = {
  'AWS Amplify': {
    color: '#FF9900',
    gradient: ['#FF9900', '#FFC400'],
    border: 'border-[#FF9900]',
    background: 'from-[#FF9900]/5 to-[#FFC400]/5',
    text: 'text-[#FF9900]'
  },
  'Amazon S3': {
    color: '#569A31',
    gradient: ['#569A31', '#7BC043'],
    border: 'border-[#569A31]',
    background: 'from-[#569A31]/5 to-[#7BC043]/5',
    text: 'text-[#569A31]'
  },
  'API Gateway': {
    color: '#E63946',
    gradient: ['#E63946', '#F1A5A9'],
    border: 'border-[#E63946]',
    background: 'from-[#E63946]/5 to-[#F1A5A9]/5',
    text: 'text-[#E63946]'
  },
  'AWS Lambda': {
    color: '#FF9900',
    gradient: ['#FF9900', '#FFB444'],
    border: 'border-[#FF9900]',
    background: 'from-[#FF9900]/5 to-[#FFB444]/5',
    text: 'text-[#FF9900]'
  },
  'Amazon Textract': {
    color: '#00A4EF',
    gradient: ['#00A4EF', '#00C3FF'],
    border: 'border-[#00A4EF]',
    background: 'from-[#00A4EF]/5 to-[#00C3FF]/5',
    text: 'text-[#00A4EF]'
  },
  'Amazon RDS': {
    color: '#911a99',
    gradient: ['#911a99', '#8B4B8B'],
    border: 'border-[#911a99]',
    background: 'from-[#911a99]/5 to-[#8B4B8B]/5',
    text: 'text-[#911a99]'
  },
  'Amazon SNS': {
    color: '#FF4F8B',
    gradient: ['#FF4F8B', '#FF73A3'],
    border: 'border-[#FF4F8B]',
    background: 'from-[#FF4F8B]/5 to-[#FF73A3]/5',
    text: 'text-[#FF4F8B]'
  },
  'CloudWatch': {
    color: '#3F8624',
    gradient: ['#3F8624', '#4CAF50'],
    border: 'border-[#3F8624]',
    background: 'from-[#3F8624]/5 to-[#4CAF50]/5',
    text: 'text-[#3F8624]'
  },
  'Amazon Cognito': {
    color: '#DD344C',
    gradient: ['#DD344C', '#FF4D6A'],
    border: 'border-[#DD344C]',
    background: 'from-[#DD344C]/5 to-[#FF4D6A]/5',
    text: 'text-[#DD344C]'
  }
}

// Define the type for workflow steps
type WorkflowStep = {
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ElementType;
  service: string;
  status: 'active' | 'processing' | 'inactive';
  time: string;
  tags: string[];
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Image Upload',
    subtitle: 'User Uploads a Cheque Image',
    description: [
      'User accesses the web application hosted on AWS Amplify',
      'Provides scan/upload option for cheque images',
      'Triggers the backend workflow securely'
    ],
    icon: Upload,
    service: 'AWS Amplify',
    status: 'active',
    time: '< 1s',
    tags: ['Frontend', 'User Input']
  },
  {
    title: 'Secure Storage',
    subtitle: 'Image Storage in Amazon S3',
    description: [
      'Secure storage with 99.999999999% durability',
      'Role-based access control via IAM policies',
      'Metadata storage for logging purposes'
    ],
    icon: Database,
    service: 'Amazon S3',
    status: 'active',
    time: '1-2s',
    tags: ['Storage', 'Security']
  },
  {
    title: 'API Processing',
    subtitle: 'API Gateway Initiates Processing',
    description: [
      'Validates incoming requests',
      'Ensures authorized access',
      'Forwards requests to Lambda function'
    ],
    icon: Shield,
    service: 'API Gateway',
    status: 'processing',
    time: '0.5s',
    tags: ['API', 'Security']
  },
  {
    title: 'Serverless Logic',
    subtitle: 'Lambda Function Processing',
    description: [
      'Retrieves image from S3 bucket',
      'Performs image pre-processing',
      'Handles business logic'
    ],
    icon: Cloud,
    service: 'AWS Lambda',
    status: 'active',
    time: '2-3s',
    tags: ['Serverless', 'Processing']
  },
  {
    title: 'Text Extraction',
    subtitle: 'Text Extraction with Amazon Textract',
    description: [
      'Extracts printed and handwritten text',
      'Identifies specific cheque fields',
      'Converts to structured format'
    ],
    icon: FileText,
    service: 'Amazon Textract',
    status: 'active',
    time: '3-4s',
    tags: ['AI/ML', 'OCR']
  },
  {
    title: 'Data Storage',
    subtitle: 'Data Storage in Amazon RDS',
    description: [
      'Stores structured data in MySQL database',
      'Maintains transaction records',
      'Enables quick data retrieval'
    ],
    icon: Database,
    service: 'Amazon RDS',
    status: 'active',
    time: '1s',
    tags: ['Database', 'Storage']
  },
  {
    title: 'Notifications',
    subtitle: 'Notifications via Amazon SNS',
    description: [
      'Sends processing status alerts',
      'Notifies about errors or failures',
      'Real-time stakeholder updates'
    ],
    icon: Bell,
    service: 'Amazon SNS',
    status: 'active',
    time: '< 1s',
    tags: ['Notifications', 'Alerts']
  },
  {
    title: 'Monitoring',
    subtitle: 'Monitoring with CloudWatch',
    description: [
      'Logs system events',
      'Monitors performance metrics',
      'Triggers alerts for anomalies'
    ],
    icon: BarChart,
    service: 'CloudWatch',
    status: 'active',
    time: 'Real-time',
    tags: ['Monitoring', 'Alerts']
  },
  {
    title: 'User Access',
    subtitle: 'Dashboard Access',
    description: [
      'Secure login via Amazon Cognito',
      'View processed cheque data',
      'Access historical records'
    ],
    icon: Users,
    service: 'Amazon Cognito',
    status: 'active',
    time: '< 1s',
    tags: ['Authentication', 'UI']
  }
]

export default function WorkflowDiagram() {
  return (
    <TooltipProvider>
      <section id="workflow" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div 
                className="relative"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-75 animate-pulse blur-sm" />
                <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
                  <Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </motion.div>
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
                System Workflow
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              A comprehensive overview of our AWS-powered cheque processing system,
              from image upload to data visualization.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div 
              className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#232F3E] to-[#405773] opacity-75 transform -translate-x-1/2"
              style={{
                boxShadow: "0 0 20px rgba(35, 47, 62, 0.2)"
              }}
            />

            <div className="space-y-24">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div 
                      className={`relative p-6 rounded-xl border ${serviceColors[step.service].border} bg-gradient-to-br ${serviceColors[step.service].background} shadow-lg transform transition-all duration-300`}
                      style={{
                        boxShadow: `0 4px 20px ${serviceColors[step.service].gradient[0]}15`
                      }}
                      whileHover={{ 
                        y: -4,
                        scale: 1.02,
                        boxShadow: `0 20px 40px ${serviceColors[step.service].gradient[0]}30`
                      }}
                    >
                      <div className="relative space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`${serviceColors[step.service].text} ${serviceColors[step.service].border}`}
                          >
                            Step {index + 1}
                          </Badge>
                          <Badge 
                            variant="secondary"
                            className={serviceColors[step.service].text}
                          >
                            {step.time}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-left">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                          <p className={serviceColors[step.service].text}>
                            {step.service}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {step.description.map((desc, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                            >
                              <CheckCircle2 className={`h-5 w-5 mt-0.5 shrink-0 ${serviceColors[step.service].text}`} />
                              <span>{desc}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary"
                              className={`bg-white/50 dark:bg-gray-800/50 ${serviceColors[step.service].text} ${serviceColors[step.service].border}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.div 
                          className="w-16 h-16 rounded-full relative"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <motion.div 
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: `linear-gradient(135deg, ${serviceColors[step.service].gradient[0]}, ${serviceColors[step.service].gradient[1]})`
                            }}
                            animate={{ 
                              opacity: [0.5, 0.8, 0.5],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                            <step.icon className={`h-8 w-8 ${serviceColors[step.service].text}`} />
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent 
                        className={`border ${serviceColors[step.service].border} bg-gradient-to-r ${serviceColors[step.service].background}`}
                      >
                        <p>{step.subtitle}</p>
                      </TooltipContent>
                    </Tooltip>

                    <motion.div 
                      className="absolute -bottom-2 -right-2 z-20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Badge 
                        className={`
                          ${step.status === 'active' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 
                            step.status === 'processing' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-gray-500 to-slate-500'} 
                          text-white shadow-lg animate-pulse
                        `}
                      >
                        {step.status === 'active' ? 'Active' : 
                         step.status === 'processing' ? 'Processing' : 'Inactive'}
                      </Badge>
                    </motion.div>

                    {index < workflowSteps.length - 1 && (
                      <motion.div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4"
                        animate={{ 
                          y: [0, 4, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className={`h-6 w-6 ${serviceColors[step.service].text}`} />
                      </motion.div>
                    )}
                  </motion.div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <a href="https://drive.google.com/file/d/1fdlLVX3cYfUrizOzdb3WAbJGdtEWnS6t/view" target="_blank" rel="noopener noreferrer">
  <Button
    size="lg"
    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 blur-xl"
      animate={{ 
        opacity: [0, 0.5, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <span className="relative z-10">Learn More About Our Architecture</span>
  </Button>
</a>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  )
}

