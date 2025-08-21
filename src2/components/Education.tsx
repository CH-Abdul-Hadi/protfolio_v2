import React, { useEffect, useState } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { usePortfolio } from "../../src/hooks/PortfolioContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../src/components/ui/card";
// import { Badge } from '@/components/ui/badge';

// Education Card component
const EducationCard = ({
  institution,
  degree,
  fieldOfStudy = "",
  startDate,
  endDate = "Present",
  location = "",
  description = "",
  grade = "",
  url = "",
}) => {
  return (
    <Card className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 group">
      <CardHeader className="pb-2 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
              {degree}{" "}
              {fieldOfStudy && (
                <>
                  <span className="hidden sm:inline">in {fieldOfStudy}</span>
                  <span className="sm:hidden block text-base mt-1">
                    in {fieldOfStudy}
                  </span>
                </>
              )}
            </CardTitle>
            <CardDescription className="text-base sm:text-lg font-medium mt-1 flex items-center flex-wrap">
              <span className="break-words">{institution}</span>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex ml-2 text-blue-500/70 hover:text-blue-500 transition-colors flex-shrink-0"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </CardDescription>
          </div>
          {grade && (
            <div className="bg-accent/20 text-primary px-2 py-1 rounded text-sm font-medium self-start sm:self-center flex-shrink-0">
              {grade}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-3 text-muted-foreground text-sm">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1.5 flex-shrink-0" />
            <span className="break-words">
              {startDate} - {endDate}
            </span>
          </div>
          {location && (
            <div className="flex items-center">
              <MapPin size={14} className="mr-1.5 flex-shrink-0" />
              <span className="break-words">{location}</span>
            </div>
          )}
        </div>
      </CardHeader>

      {description && (
        <CardContent className="pt-2 px-4 sm:px-6">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </CardContent>
      )}
    </Card>
  );
};

// Main Education component
const Education = () => {
  const { portfolio, isLoading } = usePortfolio();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Helper function to parse education dates
  const parseDates = (dateString: string) => {
    if (!dateString) return { startDate: "", endDate: "Present" };

    // Handle different date formats
    const parts = dateString.split("-");
    const startDate = parts[0].trim();

    // If there's no second part or the second part is "Present", use "Present"
    let endDate = parts.length > 1 ? parts[1].trim() : "Present";

    // If endDate is empty, use "Present"
    if (!endDate) endDate = "Present";

    return { startDate, endDate };
  };

  if (isLoading) {
    return (
      <section id="education" className="py-12 sm:py-16  lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto px-4 relative w-full max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold  mb-8 mt-4 text-center">
              Education
            </h2>
            <div className="flex justify-center items-center h-32 sm:h-40">
              <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-b-2 border-primary"></div>
              <span className="ml-3 text-sm sm:text-base">
                Loading education data...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto px-4 relative w-full max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Education
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-sm sm:text-base px-4 sm:px-0">
                My academic background and qualifications.
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
            >
              {portfolio?.education && portfolio.education.length > 0 ? (
                portfolio.education.map((edu, index) => {
                  const { startDate, endDate } = parseDates(edu.dates || "");
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full"
                    >
                      <EducationCard
                        institution={edu.institution || ""}
                        degree={edu.degree || ""}
                        startDate={startDate}
                        endDate={endDate}
                        grade={edu.cgpa || ""}
                        description={edu.description || ""}
                      />
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-1 lg:col-span-2 text-center py-8">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Education information not available
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
