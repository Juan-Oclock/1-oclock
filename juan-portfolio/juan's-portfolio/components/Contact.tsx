import React, { useState } from 'react';
import { ArrowRight, Loader2, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2
  });

  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('success');
    setFormState({ name: '', email: '', message: '' });

    // Reset success status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const reasons = [
    'MVPs and product prototypes',
    'UI engineering + front-end systems',
    'Automation and internal tools'
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Large background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className={`text-[clamp(4rem,15vw,12rem)] font-bold tracking-tighter text-black uppercase leading-none transition-opacity duration-1000 ${
            headerVisible ? 'opacity-[0.02]' : 'opacity-0'
          }`}
        >
          CONNECT
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left Column: Copy & Details */}
          <div className="space-y-12">
            <div className="space-y-6" ref={headerRef}>
              <h2
                className={`text-4xl md:text-6xl font-bold tracking-tight text-black leading-none uppercase transition-all duration-700 ease-out ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                Got a problem?<br/>
                <span
                  className={`text-gray-400 inline-block transition-all duration-700 ease-out ${
                    headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  Let's solve it.
                </span>
              </h2>
              <p
                className={`text-gray-700 text-lg md:text-xl font-normal max-w-sm leading-relaxed transition-all duration-700 ease-out ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '250ms' }}
              >
                If it's worth fixing, it's worth shipping.
              </p>
            </div>

            <div className="space-y-6" ref={reasonsRef}>
              <h3
                className={`text-gray-500 text-xs font-semibold uppercase tracking-wider transition-all duration-700 ease-out ${
                  reasonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Reasons to reach out
              </h3>
              <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                {reasons.map((reason, index) => (
                  <li
                    key={reason}
                    className={`group flex items-center gap-3 transition-all duration-500 ease-out ${
                      reasonsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${100 + index * 100}ms` }}
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full transition-transform duration-300 group-hover:scale-150"></span>
                    <span className="transition-colors duration-300 group-hover:text-black">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`space-y-8 transition-all duration-700 ease-out ${
                reasonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div>
                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">Contact</h3>
                <a
                  href="mailto:juan@example.com"
                  className="group relative text-2xl text-black transition-colors inline-block"
                >
                  <span className="relative z-10 group-hover:text-gray-600 transition-colors duration-300">
                    juan@example.com
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gray-300 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">Socials</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Github, label: 'GitHub' },
                    { icon: Linkedin, label: 'LinkedIn' }
                  ].map(({ icon: Icon, label }, index) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all duration-300 hover:scale-110 ${
                        reasonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="pt-2 md:pt-4" ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              {/* Name Input */}
              <div
                className={`group relative transition-all duration-700 ease-out ${
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full bg-transparent border-b border-gray-300 py-4 text-black text-lg focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-gray-600 text-lg transition-all duration-300 -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-black cursor-text"
                >
                  Your Name
                </label>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300">
                  <div
                    className={`absolute inset-y-0 left-0 bg-black transition-all duration-500 ease-out ${
                      focusedField === 'name' || formState.name ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Email Input */}
              <div
                className={`group relative transition-all duration-700 ease-out ${
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full bg-transparent border-b border-gray-300 py-4 text-black text-lg focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-gray-600 text-lg transition-all duration-300 -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-black cursor-text"
                >
                  Email Address
                </label>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300">
                  <div
                    className={`absolute inset-y-0 left-0 bg-black transition-all duration-500 ease-out ${
                      focusedField === 'email' || formState.email ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Message Input */}
              <div
                className={`group relative transition-all duration-700 ease-out ${
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full bg-transparent border-b border-gray-300 py-4 text-black text-lg focus:outline-none transition-colors placeholder-transparent resize-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-gray-600 text-lg transition-all duration-300 -translate-y-8 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-black cursor-text"
                >
                  Tell me about your project
                </label>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300">
                  <div
                    className={`absolute inset-y-0 left-0 bg-black transition-all duration-500 ease-out ${
                      focusedField === 'message' || formState.message ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Submit Button */}
              <div
                className={`pt-4 flex justify-end transition-all duration-700 ease-out ${
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="relative group overflow-hidden rounded-full bg-black text-white px-8 py-4 font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[160px] flex items-center justify-center"
                >
                  {status === 'submitting' ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-2">Sent <Check size={18} /></span>
                  ) : (
                    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Send Message <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
