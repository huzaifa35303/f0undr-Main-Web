'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$15k - $30k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border-subtle bg-bg-subtle/50">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Context & Direct Contact */}
          <div>
            <span className="text-xs font-mono text-accent lowercase">intake terminal</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mt-2">
              Let&apos;s build something extraordinary together.
            </h2>
            <p className="text-text-secondary mt-4 text-base leading-relaxed max-w-lg">
              Whether you need high-conversion video ads, custom AI autonomous agents, cross-platform apps for desktop and mobile, or a complete product ecosystem, we are ready to execute.
            </p>

            <div className="mt-10 space-y-4">
              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted block lowercase">direct dispatch</span>
                  <a
                    href="mailto:huzaifa.f0undr@gmail.com"
                    className="text-sm font-mono text-text-primary hover:text-accent transition-standard"
                  >
                    huzaifa.f0undr@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center text-accent shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted block lowercase">response SLA</span>
                  <span className="text-sm text-text-primary">
                    Guaranteed briefing review within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="glass-panel rounded-2xl p-8 border-border-subtle">
            {submitted ? (
              <div className="min-h-[380px] flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent-subtle text-accent flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Brief Received
                </h3>
                <p className="text-sm text-text-secondary max-w-sm">
                  Our architecture and creative leads have received your transmission. We will follow up with scheduling within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 rounded-full text-xs font-mono border border-border-subtle text-text-secondary hover:text-text-primary"
                >
                  submit another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-1 lowercase">
                    your name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border-subtle text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-standard"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-1 lowercase">
                      work email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border-subtle text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-standard"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-mono text-text-muted mb-1 lowercase">
                      company or project
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Labs"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border-subtle text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-standard"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-mono text-text-muted mb-1 lowercase">
                    estimated budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border-subtle text-sm text-text-primary focus:border-accent focus:outline-none transition-standard"
                  >
                    <option value="under-$15k">&lt; $15,000</option>
                    <option value="$15k - $30k">$15,000 - $30,000</option>
                    <option value="$30k - $75k">$30,000 - $75,000</option>
                    <option value="$75k+">$75,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-1 lowercase">
                    project overview & goals *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the software, video ads, or AI agent systems you want to build..."
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border-subtle text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-standard resize-none"
                  />
                </div>

                {/* Explicit Consent & Data Minimization */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-text-secondary select-none">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 rounded border-border-subtle bg-bg text-accent focus:ring-accent accent-[#00f0ff]"
                    />
                    <span>
                      I consent to f0undr processing my contact info to evaluate this project inquiry. We never share data with third parties and respect your right to immediate data erasure. Read our{' '}
                      <a href="/privacy" className="text-accent underline hover:text-text-primary">
                        Privacy Policy
                      </a>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-medium bg-text-primary text-bg hover:bg-accent hover:text-bg transition-standard flex items-center justify-center gap-2"
                >
                  <span>transmit project inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
