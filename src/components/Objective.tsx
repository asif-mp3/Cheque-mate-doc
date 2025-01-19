export default function Objective() {
  return (
    <section id="objective" className="py-12 fade-in relative">
   <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
       
      ></div>
      <div  style={{ backgroundImage: 'url("../image.png")' }} className="relative z-10 max-w-3xl mx-auto bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-lg shadow-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Objective</h1>
      <p className="leading-relaxed text-justify">
      The objective of this project was to create an automated and secure system for processing 
              individual cheque images using AWS cloud services. The system aimed to improve the accuracy, 
              efficiency, and speed of cheque verification while maintaining a high level of security and compliance.
      </p>
      <p className="leading-relaxed text-justify mt-4">
      By utilizing advanced AI-powered text extraction and cloud-based services, the project minimized 
      manual efforts and ensured precise data extraction from each cheque.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-justify mt-4">
      <li>Automate cheque processing workflow</li>
                <li>Enhance accuracy in data extraction</li>
                <li>Ensure secure handling of sensitive information</li>
                <li>Provide real-time processing capabilities</li>
                <li>Maintain scalability for future growth</li>
      </ul>
    </div>
  </section>
  );
}

