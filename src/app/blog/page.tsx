"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("product-strategy");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "product-strategy",
        "by-learning",
        "by-assessing",
        "by-managing",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}

        {/* Main Content */}
        <div className="mt-12 flex flex-col md:flex-row">
          {/* Sticky Sidebar */}
          <div className="md:w-64 md:pr-8 md:border-r md:border-gray-200 md:sticky md:top-6 md:self-start h-auto">
            <nav className="space-y-4">
              <motion.h2
                className="text-xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Overview
              </motion.h2>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { id: "product-strategy", label: "Product Strategy" },
                  { id: "by-learning", label: "By Learning" },
                  { id: "by-assessing", label: "By Assessing" },
                  { id: "by-managing", label: "By managing" },
                ].map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={`#${item.id}`}
                      className={`block py-2 border-l-4 pl-3 transition-all duration-200 ${
                        activeSection === item.id
                          ? "border-black text-black font-medium"
                          : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(item.id);
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 md:pl-8 mt-8 md:mt-0">
            <motion.section
              id="product-strategy"
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-8 border-b pb-4"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Product strategy
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-800"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p className="leading-relaxed text-lg" variants={fadeIn}>
                  When we imagine teaching process I see two important activity.
                  First, where students take a particular lecture or class.
                  Where a teacher explains a topic and important concepts.
                  Second, part of the learning happens when a student goes out
                  of the class. When he reads by himself and solves a question.
                  While both parts are necessary but it is the second part that
                  matters the most. Our product is for that second part.
                </motion.p>

                <motion.div variants={fadeIn}>
                  <p className="font-medium mb-4 text-lg">That second part</p>
                  <p className="leading-relaxed">
                    constitutes reading, doing questions, revising topic, mock
                    test, practice sheets, managing study, different subjects,
                    different exams and a lot more that can be comprehend. Our
                    focus in this iteration is on three core parts
                  </p>
                  <motion.ul
                    className="mt-4 ml-6 space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  >
                    {["Learning", "Assessing", "Managing"].map(
                      (item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="h-1.5 w-1.5 bg-black rounded-full mr-2"></span>
                          {item}
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.section>

            <motion.section
              id="by-learning"
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-8 border-b pb-4"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                By Learning
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-800"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  "it means learning by reading and practicing questions. I am breaking it for two parts. 1. First time learning and growing : Linear move 2. Revision and Reassuring : In General, A student opens a Book or sheet by a coaching institute or a question bank book to start reading the concept and do practice from them. There are some good books. Similarly there are good question bank and coaching material. Every student starts from the beginning and travels as he or she flips the pages.",
                  "One problem is the sequence of theory and question. They are mostly separate. Few theoretical part can only be understood unless prior theory has been understood completely and that comes only when you have practice it enough. This is critical in learning as the students mental state gets affected and it is such mental states compounded over the years that results in a better or worse student. These minor events creates a huge difference in overall performance of a student over the year. Now imagine someone is sitting right by the side of student at his private study hour. That someone knows the book, syllabus and its every details of it. And he give a page to the student for the immediate study. He watches the student carefully while the learning process goes on. And when it ends he hands over another sheet. Then the student learns this one. Again, at the end of the sesion that someone analyzes all the previous sessions and gives the student another sheet. And the process continues like that…Crafting the learning process. When and what to read. When and what question to solve. We do this.",
                  "Another problem arises when he gets stuck. Either he needs to wait for another day or see the solution. Some smart student goes back reads the question and tries it back. This process is very emotional. Many student see the solution and makes up his mind whether it is easy or hard. Whether he will be able to do the question next time or not. Learning is hard. And anyone who says he learns easy is basically a lie. It takes rigorous training in that particular subject for hours or month that makes a student or a person intuitive enough or smart enough to tackle the question easily or understand that concept. It is also that rigourous moment where the difference occurs. It is very emotional and affects a student psychologically for the subject and the study in general.",
                  "Now imagine that someone, lets call him Mr. B and I will use this name through the document to describe our product as a human, who is already at the study table. When the student gets stuck. Mr. B hands over a small sheet. That sheet contains only a hint to go just one more step for the question. That sheet contains only that concept that needed to be applied to that particular question. That sheet contains only that concept that will help the student to understand the article he is reading. And once the student is done, he takes away the smaller sheet and walks him back to the question or article he was engaged with. Mr. B is different than a human teacher. He never gets frustrated. He never gets bored. He got all the time for that student only. The student feels slight tough, as learning is tough, but he never gets frustrated as a whole. He never goes anywhere else or looks for any alternative. He gets all the help he need by Mr. B. We do this.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="leading-relaxed"
                    variants={fadeIn}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="by-assessing"
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-8 border-b pb-4"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                By Assessing
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-800"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p className="leading-relaxed" variants={fadeIn}>
                  it means trying practice sheets exam and try to understand
                  where they land. Primarily Assessment happens in two ways.
                </motion.p>

                <motion.p className="leading-relaxed" variants={fadeIn}>
                  a) when a teacher asks a question to the whole class and
                  demands for the answer. b) Test series. Many students creates
                  their own exam sessions and tries to assess them.
                </motion.p>

                <motion.p className="leading-relaxed" variants={fadeIn}>
                  The problem with these assessments are
                </motion.p>

                <motion.ol
                  className="ml-6 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {[
                    "They are in general.",
                    "They are on a fixed time.",
                    "It takes time to get the result.",
                    "When a student do get the result they see the performance as a function of question asked and subject entertained in the exam.",
                    "They are also a fixed number of times.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="list-decimal leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ol>

                <motion.p className="leading-relaxed" variants={fadeIn}>
                  Now imagine if we can create an assessment after fixed number
                  of concept. The assessment is unlimited and the students
                  number of hours will determine when he gets one. What topic of
                  assessment that needs to be done. Remember Mr. B was at the
                  table. He knows where the problem was faced earlier and hence
                  how a assessment should be created to test whether that
                  concept is learned and understood or not! Mr. B has no other
                  thing to do except thinking about that student. So he hands
                  over the test result immediately. We create specific
                  assessment for that student. Assessment happens whenever a
                  student has studied enough that can clutter his thought and he
                  needs an assessment. We do all that.
                </motion.p>
              </motion.div>
            </motion.section>

            <motion.section
              id="by-managing"
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-8 border-b pb-4"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                By managing
              </motion.h2>
              <motion.div
                className="space-y-6 text-gray-800"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  "it means keeping track of what happens in learning and assessing along with exams, schools and other factors which affects their life and are key aspects of their learning.",
                  "There is a context of learning and students have some exam to crack. Students constantly need to check whether they are meeting the demands of the exam or not!",
                  "This is mostly done by none. Only few students do make charts and plan for themselves. Most of them just follow school and college framework. This gets highly unmanaged. This is the reason why 60% student quit their preparation by the time they reach 12th standard for JEE or NEET. Another 20% also shift to boards six months before the exam. They start going on zig zag path and it is this mis management at this time which effects their outcome hugely. Now imagine if we keep tracking the exam requirement from the beginning. Keep proritizing the study show that minimum is always insured. Students, based on their number of hour and capacity, gets their own particular plan. Imagine while we teaching we expose them with the questions and study in a way that consecutively takes care of exam. Since now they do not need to worry for the minimum they can remain calm and feel more confident. No one knows what could be the highest height but we can, for sure, constrained the minimum threshold height. And when there is this level of management they will do wonders. We do wonders.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="leading-relaxed"
                    variants={fadeIn}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
