export default function Declaration() {
  return (
    <section id="declaration" className="py-12 fade-in relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
       
      ></div>
      <div  style={{ backgroundImage: 'url("../bg.png")' }} className="relative z-10 max-w-3xl mx-auto bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Declaration</h1>
        <p className="text-gray-200 leading-relaxed text-justify">
        This project was developed as part of our coursework in the AWS-Solution Architect program at VIT Chennai to modernize cheque processing systems. The implementation leverages various AWS services to create a robust, scalable, and secure solution for automated cheque processing.
        </p>
        <p className="text-gray-200 leading-relaxed mt-4 text-justify">
          All components and services used in this project were carefully selected to
          ensure optimal performance, security, and cost-effectiveness while maintaining
          high accuracy in cheque data extraction and processing.
        </p>
      </div>
    </section>
  );
}