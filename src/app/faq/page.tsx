'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "Who can participate in WomenInDev 2.0?",
          a: "Any female student enrolled in a college or university is eligible. Team size can range from 1–4 members."
        },
        {
          q: "Can teams have members from different colleges or different years?",
          a: "Yes, cross-branch, cross-year, and cross-institution teams are allowed."
        },
        {
          q: "Is there a registration fee for the hackathon?",
          a: "No, registration is completely free."
        },
        {
          q: "Can multiple teams participate from the same college?",
          a: "Yes, there's no restriction on the number of teams from one college."
        }
      ]
    },
    {
      category: "Prelims (Online Quiz)",
      questions: [
        {
          q: "How will the prelims round be conducted?",
          a: "It's an online timed quiz covering programming, computer science basics, web/app development, and tech trends."
        },
        {
          q: "Who in the team attempts the quiz?",
          a: "Only one member per team attempts the quiz on behalf of the team."
        },
        {
          q: "How are teams evaluated in the prelims?",
          a: "Evaluation is based on accuracy and speed. Top 15 teams qualify for the offline hackathon, and 5 teams are kept on the waitlist."
        },
        {
          q: "What happens if two teams score the same in prelims?",
          a: "Tie-breaking will consider submission speed and correctness."
        }
      ]
    },
    {
      category: "Final Round (Offline Hackathon at IIIT Nagpur)",
      questions: [
        {
          q: "What should teams bring to the hackathon?",
          a: "Participants must bring their laptops, chargers, and any necessary setup. Internet access and workspace will be provided."
        },
        {
          q: "Can we use open-source libraries and APIs?",
          a: "Yes, publicly available and free-to-use resources are permitted."
        },
        {
          q: "Will accommodation and food be provided?",
          a: "Yes, details will be shared with the shortlisted teams after the prelims."
        },
        {
          q: "What will be the hackathon theme?",
          a: "The theme will be revealed at the beginning of the offline round."
        }
      ]
    },
    {
      category: "Project Submission & Evaluation",
      questions: [
        {
          q: "How should projects be submitted?",
          a: "All teams must submit their project in a public GitHub repository with complete code and documentation."
        },
        {
          q: "What are the judging criteria for the final round?",
          a: "Projects will be evaluated on: Relevance to theme, Functionality & technical implementation, Innovation & creativity, UX & interface design, Problem-solving effectiveness, Scalability & future potential, Team collaboration & effort."
        },
        {
          q: "Can we work on our idea beforehand?",
          a: "No, projects must be built from scratch during the 24-hour hackathon."
        },
        {
          q: "Are participants allowed to present partially completed projects?",
          a: "Yes, but incomplete projects may score lower on functionality and problem-solving effectiveness."
        }
      ]
    },
    {
      category: "Rules & Communication",
      questions: [
        {
          q: "What happens if plagiarism is detected?",
          a: "Plagiarism or use of prohibited resources will lead to disqualification."
        },
        {
          q: "How will updates be shared with teams?",
          a: "A dedicated WhatsApp group link will be provided after registration."
        },
        {
          q: "Who takes the final call in disputes or evaluation?",
          a: "The organizers' decision will be final and binding."
        },
        {
          q: "Can participants share their solutions on social media during the event?",
          a: "No, sharing solutions publicly before the event ends is strictly prohibited."
        }
      ]
    }
  ];

  let questionIndex = 0;

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about WomenInDev 2.0
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openItems.includes(currentIndex);
                  
                  return (
                    <div key={faqIndex} className="bg-gray-50 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(currentIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}