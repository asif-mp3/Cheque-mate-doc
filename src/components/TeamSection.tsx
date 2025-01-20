'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Users, X, ChevronRight, Mail, Github, Linkedin, MapPin, Calendar, Briefcase, Award } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

type TeamMember = {
  name: string
  id: string
  role: string
  email?: string
  github?: string
  linkedin?: string
  tasks: string[]
  skills: string[]
  location: string
  joinDate: string
  avatar?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'MOHAMED ASIF M',
    id: '22BCE1634',
    role: 'Team Lead',
    email: 'asifoned@gmail.com',
    github: 'https://github.com/asif-mp3',
    linkedin: 'https://www.linkedin.com/in/asif2107/',
    location: 'VIT Chennai, Tamil Nadu',
    joinDate: 'September 2022',
    tasks: [
      'Constructed the overall system architecture',
      'Designed and optimized the whole database schema',
      'Developed Lambda function to process cheque images using Textract',
      'Developed the Documentation frontend'
    ],
    skills: ['AWS Lambda', 'MySQL', 'Textract', 'Next.js'],
    avatar: '/public/Team/Asif_pfp.jpg'
  },
  {
    name: 'SAHANA S',
    id: '22BCE5195',
    role: '',
    email: 'sahana.s2022@vitstudent.ac.in',
    github: 'https://github.com/SSahanaSS',
    linkedin: 'https://www.linkedin.com/in/sahana-s-204b85277/',
    location: 'VIT Chennai, Tamil Nadu',
    joinDate: 'September 2022',
    tasks: [
      'Constructed the overall system architecture',
      'Developed AWS Cognito Authentication for secure user access',
      'Designed and implemented the frontend',
      'Created and configured the S3 bucket for image storage',
    ],
    skills: ['UI/UX Design', 'AWS Cognito', 'AWS S3', 'System Architecture'],
    avatar: '/Team/sahana-aws.jpg'
  },
  {
    name: 'S VISWANATH',
    id: '22BCE1572',
    role: '',
    email: 'sboaviswanath@gmail.com ',
    github: 'https://github.com/Vichuva',
    linkedin: 'https://www.linkedin.com/in/viswanath-link',
    location: 'VIT Chennai, Tamil Nadu',
    joinDate: 'September 2022',
    tasks: [
      'Constructed the overall system architecture',
      'Configured SNS for notifications & alarms',
      'Configured the S3 bucket for image storage',
      'Set up CloudWatch for monitoring, alerts, and notifications',
    ],
    skills: ['AWS SNS', 'CloudWatch', 'Backend Development', 'Canva'],
    avatar: '/Team/viswa-aws.jpg'
  },
  {
    name: 'A V MITUL AADITHYA',
    id: '22BCE1159',
    role: '',
    email: 'aadithyamitul@gmail.com',
    github: 'https://github.com/mitul',
    linkedin: 'https://www.linkedin.com/in/mitul-aadithya-911454255/',
    location: 'VIT Chennai, Tamil Nadu',
    joinDate: 'September 2022',
    tasks: [
      'Invoked necessary AWS services via API Gateway',
      'Prepared the project presentation (PPT)'
    ],
    skills: ['AWS RDS', 'API Gateway', 'Cloud Architecture'],
    avatar: '/Team/mitul-aws.jpg'
  },
  {
    name: 'SANJAY C',
    id: '22BCE1814',
    role: '',
    email: 'sanjaychandru70@gmail.com',
    github: 'https://github.com/sanjay417-4',
    linkedin: 'https://www.linkedin.com/in/sanjay-chandru-97175118b?trk=blended-typeahead',
    location: 'VIT Chennai, Tamil Nadu',
    joinDate: 'September 2022',
    tasks: [
      'Prepared and utilized Kaggle cheque datasets',
      'Added roles and policies in IAM for secure access'
    ],
    skills: ['AWS IAM', 'Security', 'Compliance'],
    avatar: '/Team/sanjay-aws.jpg'
  },
  {
    name: 'GAUTHAM U S',
    id: '22BCE5209',
    role: '',
    email: 'gautham.us2022@vitstudent.ac.in',
    github: 'https://github.com/gauthamUS',
    linkedin: 'https://www.linkedin.com/in/gauthamus8work/',
    location: 'VIT Chennai, Tamil Nadu',
    joinDate: 'September 2022',
    tasks: [
      'Hosted the website using AWS Amplify',
      'Collected information and helped the team on AWS service usage'
    ],
    skills: ['AWS Amplify','Cloud Security', 'Documentation'],
    avatar: '/Team/gautham-aws.jpg'
  }
]

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  const handleImageClick = (e: React.MouseEvent, imageSrc: string) => {
    e.stopPropagation();
    setFullScreenImage(imageSrc);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }),
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="team" className="py-12 min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/public/bg.png')",
          filter: "brightness(0.3)"
        }}
      />
      <motion.div 
        className="max-w-7xl mx-auto px-4 relative"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="relative group">
              <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-full p-2 transform transition-transform group-hover:rotate-12">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
              Meet Our Team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-2xl text-gray-300 mb-2">
              VIT CHENNAI
            </p>
            <p className="text-xl text-gray-300 mb-2">
              B.Tech Computer Science and Engineering
            </p>
            <p className="text-gray-400">
              School of Computer Science and Engineering
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                layoutId={`card-${member.id}`}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer"
              >
                <div className="relative bg-[#1a2b4b]/80 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border border-blue-500/10 backdrop-blur-sm">
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div onClick={(e) => handleImageClick(e, member.avatar || '')}>
                        <Avatar className="h-24 w-24 mb-4 border-2 border-blue-500/20 ring-2 ring-blue-500/10 cursor-pointer">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback className="bg-blue-500/10 text-blue-400">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </motion.div>
                    <div className="text-center">
                      <motion.h3 
                        className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors"
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className="text-blue-400 font-medium mb-1"
                        layout
                      >
                        {member.role}
                      </motion.p>
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-gray-400 justify-center"
                        layout
                      >
                        <MapPin className="h-4 w-4" />
                        <span>{member.location}</span>
                      </motion.div>
                    </div>
                  </div>
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center mt-4"
                    layout
                  >
                    {member.skills.slice(0, 2).map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-blue-900/20 text-blue-300 transition-all duration-300 hover:bg-blue-800/40"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {member.skills.length > 2 && (
                      <Badge 
                        variant="secondary" 
                        className="bg-blue-900/20 text-blue-300 transition-all duration-300 hover:bg-blue-800/40"
                      >
                        +{member.skills.length - 2}
                      </Badge>
                    )}
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between pt-4 mt-4 border-t border-blue-500/10"
                    layout
                  >
                    <p className="text-gray-400 text-sm">
                      {member.id}
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-400">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedMember && (
            <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
              <DialogContent className="sm:max-w-[700px] bg-[#1a2b4b] text-white border-blue-500/20 backdrop-blur-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="/vitcc.png" 
                        alt="VIT Logo" 
                        className="absolute top-5 right-4 h-24 w-44 object-contain"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Avatar className="h-16 w-16 border-2 border-blue-500/20 ring-2 ring-blue-500/10">
                          <AvatarImage src={selectedMember.avatar || "/placeholder.svg"} alt={selectedMember.name} />
                          <AvatarFallback className="bg-blue-500/10 text-blue-400">
                            {selectedMember.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <motion.h2 
                          className="text-2xl font-semibold text-white"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {selectedMember.name}
                        </motion.h2>
                        <motion.div 
                          className="flex items-center gap-3 mt-1"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Badge variant="secondary" className="bg-blue-900/20 text-blue-300">
                            {selectedMember.role}
                          </Badge>
                          <p className="text-sm text-gray-400">
                            {selectedMember.id}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                  </DialogTitle>
                </DialogHeader>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                  <TabsList className="grid w-full grid-cols-2 bg-[#0a1836]">
                    <TabsTrigger 
                      value="overview"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger 
                      value="contributions"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Contributions
                    </TabsTrigger>
                  </TabsList>
                  
                  <AnimatePresence mode="wait">
                    <TabsContent value="overview" className="mt-6 space-y-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-300 group">
                            <div className="p-2 rounded-full bg-blue-900/20 group-hover:bg-blue-800/40 transition-colors">
                              <MapPin className="h-4 w-4 text-blue-400" />
                            </div>
                            <span>{selectedMember.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 group">
                            <div className="p-2 rounded-full bg-blue-900/20 group-hover:bg-blue-800/40 transition-colors">
                              <Calendar className="h-4 w-4 text-blue-400" />
                            </div>
                            <span>Joined {selectedMember.joinDate}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-300 group">
                            <div className="p-2 rounded-full bg-blue-900/20 group-hover:bg-blue-800/40 transition-colors">
                              <Briefcase className="h-4 w-4 text-blue-400" />
                            </div>
                            <span>{selectedMember.role}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 group">
                            <div className="p-2 rounded-full bg-blue-900/20 group-hover:bg-blue-800/40 transition-colors">
                              <Award className="h-4 w-4 text-blue-400" />
                            </div>
                            <span>{selectedMember.skills.length} Skills</span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <h3 className="font-medium text-white mb-3">Skills & Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedMember.skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-blue-900/20 text-blue-300 transition-all duration-300 hover:bg-blue-800/40"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <h3 className="font-medium text-white mb-3">Contact Information</h3>
                        <div className="flex flex-wrap gap-4">
                          {selectedMember.email && (
                            <motion.div whileHover={{ y: -2 }}>
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={`mailto:${selectedMember.email}`}
                                  className="inline-flex items-center gap-2 text-blue-400"
                                >
                                  <Mail className="h-4 w-4" />
                                  <span>Email</span>
                                </a>
                              </Button>
                            </motion.div>
                          )}
                          {selectedMember.github && (
                            <motion.div whileHover={{ y: -2 }}>
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={selectedMember.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-blue-400"
                                >
                                  <Github className="h-4 w-4" />
                                  <span>GitHub</span>
                                </a>
                              </Button>
                            </motion.div>
                          )}
                          {selectedMember.linkedin && (
                            <motion.div whileHover={{ y: -2 }}>
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={selectedMember.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-blue-400"
                                >
                                  <Linkedin className="h-4 w-4" />
                                  <span>LinkedIn</span>
                                </a>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="contributions" className="mt-6">
                      <div className="space-y-4">
                        {selectedMember.tasks.map((task, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 rounded-lg bg-[#0a1836] hover:bg-blue-900/40 transition-colors"
                          >
                            <Badge 
                              variant="secondary" 
                              className="mt-0.5 shrink-0 bg-blue-900/20 text-blue-300"
                            >
                              {index + 1}
                            </Badge>
                            <p className="text-gray-300">{task}</p>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  </AnimatePresence>
                </Tabs>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setFullScreenImage(null)}
          >
            <motion.img
              src={fullScreenImage}
              alt="Full screen image"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <Button
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              size="icon"
              onClick={() => setFullScreenImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

