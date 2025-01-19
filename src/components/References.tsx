'use client'

import { motion } from 'framer-motion'
import { Book, ExternalLink, Youtube, GraduationCap } from 'lucide-react'
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const researchPapers = [
  {
    title: "Handwritten Text Recognition in Bank Cheques",
    authors: "R. Ghosh, C. Panda, P. Kumar",
    year: "2018",
    conference: "Conference on Information and Communication Technology (CICT)",
    keywords: ["Feature extraction", "Image segmentation", "Handwriting recognition", "Text recognition", "Character recognition", "Support vector machines", "Histograms"],
    link: "https://ieeexplore-ieee-org.egateway.chennai.vit.ac.in/stamp/stamp.jsp?tp=&arnumber=8722420"
  },
  {
    title: "Characterizing and distinguishing text in bank cheque images",
    authors: "J. Eduardo Bastos Dos Santos, B. Dubuisson, F. Bortolozzi",
    year: "2002",
    conference: "XV Brazilian Symposium on Computer Graphics and Image Processing",
    keywords: ["Data mining", "Shape", "Solid modeling", "Process design", "Writing", "Ink", "Image databases"],
    link: "https://ieeexplore-ieee-org.egateway.chennai.vit.ac.in/stamp/stamp.jsp?tp=&arnumber=1167144"
  },
  {
    title: "A new method of verifying digital signatures in e-cheque processing",
    authors: "N. R. Sunitha, B. B. Amberker",
    year: "2008",
    conference: "16th IEEE International Conference on Networks",
    keywords: ["Digital signatures", "Public key", "Internet", "Computer science", "E-banking"],
    link: "https://ieeexplore-ieee-org.egateway.chennai.vit.ac.in/stamp/stamp.jsp?tp=&arnumber=4772604"
  },
  {
    title: "Automatic Segmentation and Recognition of Bank Cheque Fields",
    authors: "V. K. Madasu, B. C. Lovell",
    year: "2005",
    conference: "Digital Image Computing: Techniques and Applications (DICTA'05)",
    keywords: ["Handwriting recognition", "Writing", "Entropy", "Fuzzy neural networks", "System performance"],
    link: "https://ieeexplore-ieee-org.egateway.chennai.vit.ac.in/stamp/stamp.jsp?tp=&arnumber=1587635"
  },
  {
    title: "OCR based Cheque Validation using Image Processing",
    authors: "P. Kunekar, et al.",
    year: "2023",
    conference: "5th Biennial International Conference on Nascent Technologies in Engineering (ICNTE)",
    keywords: ["Image segmentation", "OCR", "SIFT", "KNN", "EasyOCR"],
    link: "https://ieeexplore-ieee-org.egateway.chennai.vit.ac.in/stamp/stamp.jsp?tp=&arnumber=10146687"
  }
]

const tutorials = [
  {
    title: "AWS Project–Building a React App with Amplify (Gen 1), Cognito, and CI/CD with GitHub | AWS Tutorial",
    channel: "Tiny Technical Tutorials",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=ma1FA2be8Ac&list=PL0jlkNM_q-2bVVRSMGLAK1m6Hsh5-QsU6&index=2&t=15s",
    description: "Learn how to build a React app with AWS Amplify, including authentication and continuous deployment."
  },
  {
    title: "AWS S3 File Upload + Lambda Trigger - Step by Step Tutorial",
    channel: "Be A Better Dev",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=OJrxbr9ebDE&list=PL0jlkNM_q-2bVVRSMGLAK1m6Hsh5-QsU6&index=3",
    description: "Step-by-step guide to implementing S3 file uploads with Lambda triggers."
  },
  {
    title: "AWS Project: Architect and Build an End-to-End AWS Web Application from Scratch, Step by Step",
    channel: "Tiny Technical Tutorials",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=7m_q1ldzw0U&list=PL0jlkNM_q-2bVVRSMGLAK1m6Hsh5-QsU6&index=4",
    description: "Comprehensive guide to building a complete AWS web application architecture."
  },
  {
    title: "Amazon Textract overview - Amazon Textract tutorial p1",
    channel: "Srce Cde",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=LZ05aNHTbbE&list=PL0jlkNM_q-2bVVRSMGLAK1m6Hsh5-QsU6&index=11",
    description: "Introduction to Amazon Textract for document processing and text extraction."
  },
  {
    title: "Amazon API Gateway | S3 Bucket | AWS Lambda | API Endpoint for File Upload to Amazon S3 Bucket | AWS",
    channel: "Cloud Quick Labs",
    platform: "YouTube",
    link: "https://www.youtube.com/watch?v=ed0QCU-KboY&list=PL0jlkNM_q-2bVVRSMGLAK1m6Hsh5-QsU6&index=10",
    description: "Learn how to create API endpoints for S3 file uploads using API Gateway and Lambda."
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export default function References() {
  return (
    <section id='references' className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-4">
            <Book className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
            References & Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Comprehensive collection of research papers and video tutorials used in this project.
          </p>
        </motion.div>

        <Tabs defaultValue="tutorials" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-lg p-1">
            <TabsTrigger value="papers" className="data-[state=active]:bg-blue-600">
              <GraduationCap className="h-4 w-4 mr-2" />
              Research Papers
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="data-[state=active]:bg-blue-600">
              <Youtube className="h-4 w-4 mr-2" />
              Video Tutorials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="papers">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {paper.title}
                          </h3>
                          <p className="text-gray-400">{paper.authors} • {paper.year}</p>
                          <p className="text-gray-500 italic">{paper.conference}</p>
                          <div className="flex flex-wrap gap-2">
                            {paper.keywords.map((keyword, i) => (
                              <Badge 
                                key={i}
                                variant="secondary" 
                                className="bg-blue-900/30 hover:bg-blue-900/50 text-blue-300 transition-colors"
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <motion.a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -10 }}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tutorials">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {tutorials.map((tutorial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 pt-1">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center"
                          >
                            <Youtube className="h-6 w-6 text-red-500" />
                          </motion.div>
                        </div>
                        <div className="space-y-3 flex-1">
                          <div>
                            <motion.a
                              href={tutorial.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2"
                              whileHover={{ x: 5 }}
                            >
                              {tutorial.title}
                              <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                            </motion.a>
                            <p className="mt-1 text-gray-400">{tutorial.channel}</p>
                          </div>
                          <p className="text-gray-500">{tutorial.description}</p>
                          <div className="pt-2">
                            <Badge variant="secondary" className="bg-red-900/30 text-red-300">
                              {tutorial.platform}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}

