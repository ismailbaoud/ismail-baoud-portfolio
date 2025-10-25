'use client';

import { FormEvent, useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success alert
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide alert after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        // Show error alert
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex justify-center py-10 md:py-20 px-4 md:px-20 lg:px-40" id="contact">
      {/* Success Alert Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 transform animate-scaleIn">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
              <p className="text-gray-600 text-base">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Great!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Alert Modal */}
      {showError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 transform animate-scaleIn">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-red-600 text-4xl">error</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Oops! Something went wrong</h3>
              <p className="text-gray-600 text-base">
                Failed to send your message. Please try again or contact me directly at ismailbaoud04@gmail.com
              </p>
              <button
                onClick={() => setShowError(false)}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-[960px]">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-gray-800 text-4xl font-black leading-tight tracking-[-0.033em]">
                Let&apos;s Build Something Together
              </p>
              <p className="text-gray-600 text-base font-normal leading-normal">
                I&apos;m currently open to new opportunities and freelance projects.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 px-4">
            {/* Left Column - Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="flex flex-col flex-1">
                  <p className="text-gray-800 text-base font-medium leading-normal pb-2">Name</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-gray-800 focus:outline-0 focus:ring-0 border border-gray-300 bg-[#f5f7f8] focus:border-[#2094f3] placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal" 
                    placeholder="Your Name" 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </label>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="flex flex-col flex-1">
                  <p className="text-gray-800 text-base font-medium leading-normal pb-2">Email</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-gray-800 focus:outline-0 focus:ring-0 border border-gray-300 bg-[#f5f7f8] focus:border-[#2094f3] placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal" 
                    placeholder="Your Email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </label>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="flex flex-col flex-1">
                  <p className="text-gray-800 text-base font-medium leading-normal pb-2">Message</p>
                  <textarea 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 focus:outline-0 focus:ring-0 border border-gray-300 bg-[#f5f7f8] focus:border-[#2094f3] min-h-36 placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal" 
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#2094f3] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2094f3]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                      <span className="truncate">Sending...</span>
                    </>
                  ) : (
                    <span className="truncate">Send Message</span>
                  )}
                </button>
              </div>
            </form>

            {/* Right Column - Contact Info */}
            <div className="flex flex-col gap-4 pt-0 md:pt-10">
              {/* LinkedIn */}
              <div className="flex items-center gap-4 bg-[#f5f7f8] min-h-14">
                <div className="text-gray-600 flex items-center justify-center rounded-lg bg-gray-200 shrink-0 size-10">
                  <span className="material-symbols-outlined">work</span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/ismail-baoud-b39aa1335/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 text-base font-normal leading-normal flex-1 truncate hover:text-[#2094f3] transition-colors cursor-pointer"
                >
                  linkedin.com/in/ismail-baoud-b39aa1335/
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 bg-[#f5f7f8] min-h-14">
                <div className="text-gray-600 flex items-center justify-center rounded-lg bg-gray-200 shrink-0 size-10">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <a 
                  href="hhttps://github.com/ismailbaoud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 text-base font-normal leading-normal flex-1 truncate hover:text-[#2094f3] transition-colors cursor-pointer"
                >
                  github.com/ismailbaoud
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-[#f5f7f8] min-h-14">
                <div className="text-gray-600 flex items-center justify-center rounded-lg bg-gray-200 shrink-0 size-10">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <a 
                  href="ismailbaoud04@gmail.com"
                  className="text-gray-800 text-base font-normal leading-normal flex-1 truncate hover:text-[#2094f3] transition-colors cursor-pointer"
                >
                  ismailbaoud04@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
